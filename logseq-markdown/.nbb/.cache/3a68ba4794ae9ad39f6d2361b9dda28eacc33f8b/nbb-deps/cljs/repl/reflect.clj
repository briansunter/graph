;; Copyright (c) Rich Hickey. All rights reserved.
;; The use and distribution terms for this software are covered by the
;; Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
;; which can be found in the file epl-v10.html at the root of this distribution.
;; By using this software in any fashion, you are agreeing to be bound by
;; the terms of this license.
;; You must not remove this notice, or any other, from this software.

(ns cljs.repl.reflect
  (:refer-clojure :exclude [macroexpand])
  (:require [cljs.repl.server :as server]
            [cljs.analyzer :as analyzer]
            [cljs.compiler :as compiler]
            [clojure.string :as str]
            [clojure.pprint :as pprint]))

(defn- dissoc-unless
  "Dissoc all keys from map that do not appear in key-set.

    (dissoc-unless {:foo 1 :bar 2} #{:foo})
    => {:foo 1}"
  [m key-set]
  {:pre [(map? m)
         (set? key-set)]}
  (reduce (fn [coll key]
            (if (contains? key-set key)
              coll
              (dissoc coll key)))
          m (keys m)))

(defn- get-meta [sym]
  (let [ns (symbol (namespace sym))
        n  (symbol (name sym))]
    (if-let [sym-meta (get (:defs (get @analyzer/namespaces ns)) n)]
      (-> (dissoc-unless sym-meta
                         #{:name :method-params :doc :line :file})
          (update-in [:name] str)
          (update-in [:method-params] #(str (vec %)))))))

(defn macroexpand
  "Fully expands a cljs macro form."
  [form]
  (let [mform (analyzer/macroexpand-1 {} form)]
    (if (identical? form mform)
      mform
      (macroexpand mform))))

(defn- url-decode [encoded & [encoding]]
  (java.net.URLDecoder/decode encoded (or encoding "UTF-8")))

(def read-url-string (comp read-string url-decode))

(defn parse-param
  "Parses the query parameter of a path of the form \"/reflect?var=foo\"
  into the vector [\"var\" \"foo\"]."
  [path]
  (-> (str/split path #"\?")
      (last)
      (str/split #"=")))

(defn- compile-and-return
  "Compiles a form to javascript and returns it on conn."
  [conn form]
  (let [ast (analyzer/analyze {:ns {:name 'cljs.user}} form)
        js  (try (compiler/emit-str ast)
                 (catch Exception e (println e)))]
    (server/send-and-close conn 200 js "text/javascript")))

(defmulti handle-reflect-query (fn [[param _] & _] param))

(defmethod handle-reflect-query "var"
  [[_ sym] req conn opts]
  (let [sym (read-url-string sym)]
    (compile-and-return conn (get-meta sym))))

(defmethod handle-reflect-query "macroform"
  [[_ mform] req conn opts]
  (let [mform (-> mform read-url-string macroexpand)]
    (server/send-and-close conn 200 (with-out-str (pprint/pprint mform)))))

(server/dispatch-on :get
                    (fn [{:keys [path]} _ _] (.startsWith path "/reflect"))
                    (fn [{:keys [path] :as req} conn opts]
                      (handle-reflect-query (parse-param path) req conn opts)))
