import type { PageContextBuiltInServer } from "vike/types";
import { getFiles } from "../../lib/fileProcessor";
import fs from "fs";
import path from "path";
import { ImageData } from "../../lib/ImageProcessor";
import { ImageProcessor } from "../../lib/ImageProcessor";
import { DateTime } from "luxon";

export interface PageProps {
  blogtitle: string;
  description: string;
  permalink: string;
  tags: string[];
  coverimage?: string;
  responsiveCoverImage?: ImageData[];
  coverPlaceholder?: string;
  date: string;
}

export interface Page {
  permalink: string;
  originalFile: string;
  content: string;
  props: PageProps;
}

const files = await getFiles();

export default async function onBeforeRender(
  pageContext: PageContextBuiltInServer
) {
  const { name } = pageContext.routeParams;

  const pagesWithTag = Object.values(files).filter((page) => {
    return page.props.tags && page.props.tags.includes(name);
  });

  const capitalizedPageTitle = name.charAt(0).toUpperCase() + name.slice(1);

  return {
    pageContext: {
      title: `${name}`,
      description: `Posts tagged with ${name}`,
      pageProps: {
        pages: pagesWithTag,
      },
    },
  }
}
