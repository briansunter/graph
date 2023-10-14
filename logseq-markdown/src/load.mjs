import { loadFile } from "@logseq/nbb-logseq";
import { fileURLToPath } from "url";
import { dirname, resolve } from "path";
const __dirname = fileURLToPath(dirname(import.meta.url));
const logseqPath = resolve(__dirname, "../logseq");
const cachedDbPath = resolve(__dirname, "cached_db.cljs");
const main = await loadFile(cachedDbPath);
const pagesQuery = `[:find (pull ?p [*])
                :where
                [?p :block/properties ?pr]
                [(get ?pr :public) ?t]
                [(= true ?t)]
                [?p :block/created-at]
                [?p :block/updated-at]]`;
const promises = [];
for (let i = 0; i < 50; i++) {
    promises.push(await main.root(logseqPath, pagesQuery));
    // .then((p:{name: string}[]) => p.map(p => console.log(p.name  ))));
}
// await Promise.all(promises);
// console.log(result);
// console.log(await main.root(logseqPath, pagesQuery))
