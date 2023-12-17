import { promises as fsPromises } from "fs";

import { resolve } from "path";
import { unified } from "unified";
import { parse } from "path";

export default function MarkdownPlugin() {
  let processor = unified();

  return {
    name: "vite-plugin-markdown",
    use(plugin: any, args?: any) {
      processor = processor.use(plugin, args);
      return this;
    },
    async transform(_: any, id: string) {
      if (id.endsWith(".md")) {
        const filePath = resolve(id.split('?')[0]);
        const fileContents = await fsPromises.readFile(filePath, "utf-8");
        const result = await processor.process(fileContents);
        return {
          code: `export default ${JSON.stringify(
            result.toString()
          )}; export const html = ${JSON.stringify(
            result.toString()
          )}; export const data = ${JSON.stringify(result.data)};`,
          map: null,
        };
      }
    },
  };
}

export interface ProcessedPage {
  html: string;
  data: any;
}