// https://vike.dev/onBeforeRender
export { onBeforeRender };
import { DateTime } from 'luxon';

import { Post } from "../../lib/types";
import path from "path";
import { promises as fs } from "fs";
import type { OnBeforeRenderAsync } from "vike/types";

import {  getFiles } from "../../lib/fileProcessor";
import { ImageProcessor } from "../../lib/ImageProcessor";

const imageProcessor = ImageProcessor.getInstance();

const onBeforeRender: OnBeforeRenderAsync = async (pageContext): ReturnType<OnBeforeRenderAsync> => {
  const allPages = await getFiles();
  const domain = pageContext.config.domain; 
  const rssItems = Object.values(allPages).filter(page=> !page.isAlias).map((page) => {
    const { title, permalink, description, props } = page;

    let pubDateLine = '';
    if (props.date && DateTime.fromISO(props.date).isValid) {
      const pubDate = DateTime.fromISO(props.date).toHTTP();
      pubDateLine = `<pubDate>${pubDate}</pubDate>`;
    }

    // Conditional rendering of title and description
    if(!title){
      console.error(`Missing title for page ${permalink}`);
    }
    const titleLine = title ? `<title>${title}</title>` : '';
    const descriptionLine = description ? `<description>${description}</description>` : '';

    // Constructing the cover image URL
    let imageLine = '';
    if (props.responsiveCoverImage && props.responsiveCoverImage.length > 0) {
      const lastImage = props.responsiveCoverImage[props.responsiveCoverImage.length - 1];
      const imageUrl = `${domain}/assets/${lastImage.hashedFilename}`;
      imageLine = `<image>${imageUrl}</image>`; 
    }

    return `
      <item>
        ${titleLine}
        <link>${domain}${permalink}</link>
        ${descriptionLine}
        ${pubDateLine}
        ${imageLine}
        <guid>${domain}${permalink}</guid>
      </item>
    `;
  }).join("\n");

  const rss = `<?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0">
      <channel>
        <title>Brian Sunter's Blog</title>
        <link>${domain}</link>
        <description>A blog about programming and productivity</description>
        ${rssItems}
      </channel>
    </rss>
  `;

  await fs.writeFile("dist/client/index.xml", rss);
  return {
    pageContext: {
      pageProps: {
        rss
      },
    },
  }; 
};