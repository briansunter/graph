// https://vike.dev/onBeforeRender
export { onBeforeRender };

import { Post } from "../../lib/types";
import path from "path";
import { promises as fs } from "fs";
import type { OnBeforeRenderAsync } from "vike/types";

import {  getFiles } from "../../lib/fileProcessor";
import { ImageProcessor } from "../../lib/ImageProcessor";

const imageProcessor = ImageProcessor.getInstance();

const onBeforeRender: OnBeforeRenderAsync = async (
  pageContext
): ReturnType<OnBeforeRenderAsync> => {
    const allFiles = await getFiles();
  const processedFiles = Object.keys(allFiles).filter((file) => !allFiles[file].isAlias);

  const allPages: string[] = [
    ...pageContext._pageRoutes
    .filter(route => route.routeString !== undefined)
    .filter(route => !route.routeString.includes('@'))
    .filter(route => !route.routeString.includes('sitemap'))
    .map((route) =>  route.routeString),
    ...processedFiles,
  ];

  const domain = pageContext.config.domain;

  const xmlPages = allPages
    .map((page) => `<url><loc>${domain}${page}</loc></url>`)
    .join("\n");

    const xml = `<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">${xmlPages}</urlset>`

  await fs.writeFile(
    "dist/client/sitemap.xml",
    xml
  );
  return {
    pageContext: {
      pageProps: {
        xml
      },
    },
  };
};

export interface PageProps {
  xml: string;
}

export interface Page {
  permalink: string;
  content: string;
  props: PageProps;
}
