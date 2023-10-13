// import { exit } from 'process';
import { loadString } from '@logseq/nbb-logseq';
// Expects to be called as `node query.mjs ...`
const args = process.argv.slice(2);
if (args.length < 2) {
    console.log("Usage: $0 GRAPH-DIR QUERY");
    // exit(1);
}
;
async function run(graph, query) {
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
const graphUrl = "../logseq";
const pagesQuery = `[:find (pull ?p [*])
                :where
                [?p :block/properties ?pr]
                [(get ?pr :public) ?t]
                [(= true ?t)]
                [?p :block/created-at]
                [?p :block/updated-at]]`;
const parentBlocks = await run(graphUrl, pagesQuery);
const block = parentBlocks[0];
const childPagesQuery = (blockId) => `[:find (pull ?p [*])
                :where [?p :block/page ${blockId}]
                ]`;
const results = [];
function buildContentInOrder(blockId, blocks, processedIds = new Set()) {
    if (processedIds.has(blockId)) {
        // console.log(`Block with id ${blockId} already processed, skipping`);
        return '';
    }
    processedIds.add(blockId);
    const block = blocks.find(b => b.id === blockId);
    if (!block) {
        // console.log(`Block with id ${blockId} not found`);
        return '';
    }
    // console.log(`Processing block with id ${blockId}, content: ${block.content}`);
    let content = block.content;
    if (block.left) {
        // console.log(`Block with id ${blockId} has left block with id ${block.left.id}`);
        content = buildContentInOrder(block.left.id, blocks, processedIds) + "\n" + content;
    }
    const childBlocks = blocks.filter(b => b.parent && b.parent.id === blockId);
    for (const childBlock of childBlocks) {
        // console.log(`Block with id ${blockId} has child block with id ${childBlock.id}`);
        content += "\n" + buildContentInOrder(childBlock.id, blocks, processedIds);
    }
    return content;
}
// Usage:
// Usage:
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import fs from 'fs';
import path from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// console.log(parentBlocks.map(b => b.name).join("\n"));
const parentBlockPromises = parentBlocks.map(async (parent) => {
    let childBlocks = await run(graphUrl, childPagesQuery(parent.id));
    const content = buildContentInOrder(parent.id, [parent, ...childBlocks]);
    // console.log("content", content)
    if (content) {
        const dirPath = path.join(__dirname, 'out');
        if (!fs.existsSync(dirPath)) {
            fs.mkdirSync(dirPath, { recursive: true });
        }
        const safeName = parent.name.replace(/\//g, '_');
        await fs.promises.writeFile(path.join(dirPath, `block_${safeName}.md`), content);
    }
});
await Promise.all(parentBlockPromises);
// while(childBlocks.length > 0){
//   const leftMostBlock = childBlocks.reduce((leftBlock: Block, currentBlock: Block) => {
//     return (!leftBlock || !currentBlock.left || currentBlock.left.id < leftBlock.left.id) ? currentBlock : leftBlock;
//   }, childBlocks[0]);
//   if (leftMostBlock) {
//     results.push(leftMostBlock);
//     childBlocks = childBlocks.filter(block => block.id !== leftMostBlock.id);
//   } else {
//     break;
//   }
// }
// console.log(childBlocks.map(b => b.content).join("\n"));
// const blockTreeQuery = (parentBlockId: number, previousBlockId: number) => `[:find (pull ?b [*])
// :where
// [?b :block/left ${previousBlockId}]
// [?b :block/parent ${parentBlockId}]]`;
// for (const block of childBlocks){
//   const blockTree = await run(graphUrl, blockTreeQuery(block.parent.id, block.left.id));
//   console.log(blockTree)
// }
