#!/usr/bin/env node
import { loadFile } from '@logseq/nbb-logseq';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
const __dirname = fileURLToPath(dirname(import.meta.url));
const main = await loadFile('src/cached_db.cljs');
const pagesQuery = `[:find (pull ?p [*])
                :where
                [?p :block/properties ?pr]
                [(get ?pr :public) ?t]
                [(= true ?t)]
                [?p :block/created-at]
                [?p :block/updated-at]]`;
// Expects to be called as node X.js ...
const args = ["../logseq", pagesQuery];
const result = main.apply(null, args);
console.log(result);
