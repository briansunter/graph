import type { PageContextBuiltInServer } from "vike/types";
import { getFiles } from "../../lib/fileProcessor";
import fs from "fs";
import path from "path";
import { ImageData } from "../../lib/ImageProcessor";
import { ImageProcessor } from "../../lib/ImageProcessor";
import { DateTime } from "luxon";
import {getPagesWithTag} from './tagHelper'

export interface PageProps {
  blogtitle: string;
  description: string;
  permalink: string;
  tags: string[];
  coverimage?: string;
  responsiveCoverImage?: ImageData[];
  coverPlaceholder?: string;
  date: string;
  redirectTo: string;
}

export interface Page {
  permalink: string;
  originalFile: string;
  content: string;
  props: PageProps;
}

export default async function onBeforeRender(
  pageContext: PageContextBuiltInServer
) {
  let { name } = pageContext.routeParams;
 let redirectTo;
 if (name === 'newsletter') {
   redirectTo = '/newsletter'
 }
  if (!name && pageContext.urlPathname === '/newsletter') {
    name = 'newsletter'
  }
 const pagesWithTag = await getPagesWithTag(name);
 const capitalizedPageTitle = name.charAt(0).toUpperCase() + name.slice(1);
 
  return {
    pageContext: {
      title: `${capitalizedPageTitle} | ${pageContext.config.title}`,
      description: `Posts tagged with ${name}`,
      pageProps: {
        title: capitalizedPageTitle,
        pages: pagesWithTag,
        redirectTo,
      },
    },
  }
}
