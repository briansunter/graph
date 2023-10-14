(ns logseq.bb-tasks.nbb.cached-db
  "Handles nbb side of cached-db functionality. File path and cache implementation
encapsulated in this ns"
  (:require [datascript.transit :as dt]
            [datascript.core :as d]
            [logseq.graph-parser.cli :as gp-cli]
            [logseq.graph-parser :as graph-parser]
            [clojure.string :as string]
            [logseq.db.rules :as rules]
            [clojure.edn :as edn]
            [promesa.core :as p]
            ["fs" :as fs]))
(def ^:private cache-file
  "Cache file for storing transit db"
  ".cached-db-transit.json")

(defn write-file!
  [fpath content]
  (p/create
   (fn [resolve reject]
     (fs/writeFile fpath content (fn [err]
                                   (if err
                                     (reject err)
                                     (resolve nil)))))))
(defn read-file
  [fpath]
  (p/create
   (fn [resolve reject]
     (fs/readFile fpath (fn [err content]
                          (if err
                            (reject err)
                            (resolve content)))))))
(defn ^:api read-db
  "Reads db from cache file"
  []
  (-> (read-file cache-file)
      (p/then dt/read-transit-str)))



(defn ^:api read-db
  "Reads db from cache file"
  []
  (dt/read-transit-str (fs/readFileSync cache-file)))
  

(defn write-db
  "Writes cache db file given the graph directory. First time writing the cache
  can take long for large graphs since all files are parsed. Subsequent writes
  are quick as the cache only needs to update changed files."
  [dir changed-files]
  (if (fs/existsSync cache-file)
    (let [old-conn (d/conn-from-db (read-db))
          files (->> changed-files
                      ;; Can remove if the graph-parser filters with frontend.util.fs/ignored-path?
                     (remove #(string/includes? % "logseq/bak"))
                     (map #(hash-map :file/path %
                                     :file/content (str (fs/readFileSync %)))))
          delete-blocks (fn [db file-page file-path uuid-blocks]
                          (into (graph-parser/get-blocks-to-delete db file-page file-path uuid-blocks)
                                ;; Delete page to allow for page properties to be redefined
                                ;; Assumes no page rename for now
                                [[:db.fn/retractEntity [:block/name (:block/name file-page)]]]))
          conn (:conn (gp-cli/parse-graph dir
                                          {:conn old-conn
                                           :files files
                                           :verbose true
                                           :parse-file-options {:delete-blocks-fn delete-blocks}}))]
      (println "Updating cache file" cache-file)
      (fs/writeFileSync cache-file (dt/write-transit-str @conn)))
    (let [conn (:conn (gp-cli/parse-graph dir {:verbose false}))]
      (println "Writing cache file" cache-file)
      (fs/writeFileSync cache-file (dt/write-transit-str @conn))))
  nil)

(defn- main [graph-dir query-str]
  (p/let [conn (-> (read-file cache-file)
                   (p/catch (fn [_]
                              (p/create (fn [resolve _]
                                          (let [conn (:conn (gp-cli/parse-graph graph-dir {:verbose false}))]
                                            (p/then (write-db graph-dir []) (fn [_] (resolve conn))))))))
                   (p/then (fn [content]
                             (d/conn-from-db (dt/read-transit-str content)))))
          query* (edn/read-string query-str)
          query (into query* [:in '$ '%]) ;; assumes no :in are in queries
          results (map first (apply d/q query @conn [(vals rules/query-dsl-rules)]))]
    (clj->js results)))