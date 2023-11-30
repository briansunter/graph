import type { PageContextBuiltInServer } from "vike/types";
import { getFiles } from "../../lib/fileProcessor";
import fs from "fs";
import path from "path";
import { ImageData } from "../../lib/ImageProcessor";
export { prerender };
import { ImageProcessor } from "../../lib/ImageProcessor";

export interface PageProps {
  blogtitle: string;
  description: string;
  permalink: string;
  tags: string[];
  coverimage?: string;
  responsiveCoverImage?: ImageData[];
  coverPlaceholder?: string;
  date: string;
  aliases?: string[];
}

export interface Page {
  isAlias?: boolean;
  permalink: string;
  originalFile: string;
  content: string;
  props: PageProps;
  title: string;
  description: string;
}

const files = await getFiles();

export default async function onBeforeRender(pageContext: PageContextBuiltInServer) {
  let name = pageContext.urlPathname;
  
  const pageProps = files[name];

  if (!pageProps) {
    throw new Error(
      `Could not find page with name ${name}`
    );
  }

  return {
    pageContext: {
      pageProps: { page: pageProps },
    },
  };
}