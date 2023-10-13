// import { exit } from 'process';
import { loadString } from '@logseq/nbb-logseq'

// Expects to be called as `node query.mjs ...`
const args = process.argv.slice(2);
if (args.length < 2) {
  console.log("Usage: $0 GRAPH-DIR QUERY");
  // exit(1);
};

// Evaluate cljs inline

interface PageProperties {
  date: string;
  tags: string[];
  url: string;
  coverimage: string;
  description: string;
  name: string;
  blogtitle: string;
}

interface Block {
  id: number;
  name: string;
  content: string;
  properties: PageProperties;
  updatedAt: string;
  createdAt: string;
  journal: boolean;
}

async function run(graph: string, query: string):Promise<Block[]> {

const results = await loadString(`
  (ns query
    (:require [logseq.graph-parser.cli :as gp-cli]
              [logseq.db.rules :as rules]
              [datascript.core :as d]
              [clojure.edn :as edn]))

  (defn- main [graph-dir query*]
    (let [{:keys [conn]} (gp-cli/parse-graph graph-dir {:verbose false})
          query (into query* [:in '$ '%]) ;; assumes no :in are in queries
          results (map first (apply d/q query @conn [(vals rules/query-dsl-rules)]))]
      (clj->js results)))

  (main "${graph}" '${query})
`);
return results;

}
const graphUrl ="../logseq"
const pagesQuery = `[:find (pull ?p [*])
                :where
                [?p :block/properties ?pr]
                [(get ?pr :public) ?t]
                [(= true ?t)]
                [?p :block/created-at]
                [?p :block/updated-at]]`
const parentBlocks = await run(graphUrl, pagesQuery);
const block = parentBlocks[0]
const childPagesQuery = `[:find (pull ?p [*])
                :where [?p :block/page ${block.id}]]`
const childBlocks = await run(graphUrl, childPagesQuery);
console.log(childBlocks)