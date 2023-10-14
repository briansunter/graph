import { loadFile } from "@logseq/nbb-logseq";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
import fs from 'fs';
import path from 'path';

const __dirname = fileURLToPath(dirname(import.meta.url));
const logseqPath = resolve(__dirname, "../../../../logseq");
const cachedDbPath = resolve(__dirname, "cached_db.cljs");
const main = await loadFile(cachedDbPath);
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
    parent: {id: number};
    left: {id: number};
    page: {id: number};
  }
  
const pagesQuery = `[:find (pull ?p [*])
                :where
                [?p :block/properties ?pr]
                [(get ?pr :public) ?t]
                [(= true ?t)]
                [?p :block/created-at]
                [?p :block/updated-at]]`;

const childrenQuery = `[:find (pull ?b [*])
                :where
                [?p :block/properties ?pr]
                [(get ?pr :public) ?t]
                [(= true ?t)]
                [?b :block/page ?p]]`;
// const promises = []
// for (let i = 0; i < 50; i++) {
// promises.push(await main.root(logseqPath, pagesQuery))
// // .then((p:{name: string}[]) => p.map(p => console.log(p.name  ))));
// }
// await Promise.all(promises);
// console.log(result);
// console.log(await main.root(logseqPath, pagesQuery))
function buildContentInOrder(blockId: number, blocks: Block[], processedIds: Set<number> = new Set()): string {
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

const pages = await main.root(logseqPath, pagesQuery);
console.log("pages", pages.length);
const children = await main.root(logseqPath, childrenQuery);

  const writePromises = pages.map(async (page:Block) => {
    const content = buildContentInOrder(page.id, [page, ...children.filter((c:Block) => c.page.id === page.id)]);
    if (content) {
      const dirPath = path.join(__dirname, 'out');
      if (!fs.existsSync(dirPath)) {
        fs.mkdirSync(dirPath, { recursive: true });
      }
      const safeName = page.name.replace(/\//g, '_');
      return fs.promises.writeFile(path.join(dirPath, `block_${safeName}.md`), content);
    }
  });
  
  await Promise.all(writePromises);