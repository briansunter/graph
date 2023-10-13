;; Copyright (c) Rich Hickey. All rights reserved.
;; The use and distribution terms for this software are covered by the
;; Eclipse Public License 1.0 (http://opensource.org/licenses/eclipse-1.0.php)
;; which can be found in the file epl-v10.html at the root of this distribution.
;; By using this software in any fashion, you are agreeing to be bound by
;; the terms of this license.
;; You must not remove this notice, or any other, from this software.

(ns cljs.main
  (:require [cljs.repl.browser :as browser]
            [cljs.cli :as cli]
            [clojure.string :as string])
  (:gen-class))

(defn single-segment? [x]
  (== 1 (count (string/split x #"\."))))

(defn- get-js-opt [args]
  (if (= 2 (count args))
    (let [ns-frag (nth args 1)
          repl-ns (symbol
                    (cond->> ns-frag
                      (single-segment? ns-frag)
                      (str "cljs.repl.")))]
      (try
        (require repl-ns)
        (if-let [repl-env (ns-resolve repl-ns 'repl-env)]
          repl-env
          (throw
            (ex-info (str "REPL namespace " repl-ns " does not define repl-env var")
              {:repl-ns repl-ns})))
        (catch Throwable t
          (throw
            (ex-info (str "Failed to load REPL namespace " repl-ns)
              {:repl-ns repl-ns} t)))))
    browser/repl-env))

(defn- normalize* [args]
  (if (not (cli/dispatch? cli/default-commands :main (first args)))
    (let [pred (complement #{"-re" "--repl-env"})
          [pre post] ((juxt #(take-while pred %)
                            #(drop-while pred %))
                       args)]
      (if (= pre args)
        [nil pre]
        (let [[js-opt post'] (normalize* (nnext post))]
          (if js-opt
            [js-opt (concat pre post')]
            [[(first post) (fnext post)] (concat pre post')]))))
    [nil args]))

(defn normalize [args]
  (let [[js-opt args] (normalize* args)]
    (concat js-opt args)))

(defn -main [& args]
  (let [args (normalize (cli/normalize cli/default-commands args))
        pred (complement #{"-re" "--repl-env"})
        [pre post] ((juxt #(take-while pred %)
                          #(drop-while pred %))
                     args)
        [js-args args] ((juxt #(take 2 %) #(drop 2 %)) post)
        repl-opt (get-js-opt js-args)]
    (try
      (apply cli/main repl-opt (concat pre args))
      (finally
        (shutdown-agents)))))
