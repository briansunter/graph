import path from 'path';
import {Md5} from 'ts-md5';
import { wordCount } from "eleventy-plugin-wordcount";
import pluginRss from "@11ty/eleventy-plugin-rss";
import preactSSR from './src/lib/preactSSR';
import eleventyNavigationPlugin from "@11ty/eleventy-navigation";
import EleventyVitePlugin from "@11ty/eleventy-plugin-vite";
import Image from "@11ty/eleventy-img";
import yaml from "js-yaml"; 
import { DateTime } from "luxon";
import { noTrailingSlash } from './src/lib/noTrailingSlash';
import fs from "fs";
import type { EleventyConfig } from './eleventy';
import {ImageMetadata} from './src/types';
import eleventyLogseq from './eleventyLogseq';
import dotenv from 'dotenv';
dotenv.config();
import preact from "@preact/preset-vite";

import util from 'util';

const stat = util.promisify(fs.stat);

const baseUrl = process.env.BASE_URL || "http://localhost:8080";


const globalSiteData = {
  title: "11ty Starter Site",
  description: "This is a basic 11ty starter template with my most commonly used features and modern tooling",
  locale: 'en',
  baseUrl: baseUrl,
}

module.exports = function(eleventyConfig: EleventyConfig) {

  /* --- GLOBAL DATA --- */
  eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));
  eleventyConfig.addGlobalData("site", globalSiteData);

  /* --- YAML SUPPORT --- */
  
  eleventyConfig.addDataExtension("yaml", contents => yaml.load(contents));
  eleventyConfig.addDataExtension("yml", contents => yaml.load(contents));

  /* --- PASSTHROUGHS --- */

  eleventyConfig.addPassthroughCopy('src/assets/css')
	eleventyConfig.addPassthroughCopy('src/assets/js')
  eleventyConfig.addPassthroughCopy('src/assets/images')
  eleventyConfig.addPassthroughCopy({"src/assets/assets":"assets"})
  eleventyConfig.addPassthroughCopy("public")

  /* --- PLUGINS --- */
 
  eleventyConfig.addPlugin(pluginRss); 
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(eleventyLogseq, { baseUrl: baseUrl })
  eleventyConfig.addPlugin(preactSSR);
  eleventyConfig.addPlugin(wordCount);

  eleventyConfig.addPlugin(EleventyVitePlugin, {
    viteOptions: {
      plugins: [noTrailingSlash(), preact()],
  }});

  async function metaDataFromSrc(src: string): Promise<ImageMetadata>{
    return Image(src, {
			widths: [256, 800, 1500],
			formats: ["webp", "jpeg"],
      urlPath: "/assets/",
			outputDir: "./_site/assets",
		});
  }

  eleventyConfig.addAsyncShortcode("imageMeta", async function(src) {
    const metadata = await metaDataFromSrc(src);
    return metadata;
  });
  // Vite Plugin, handles /index.html and index/ redirects

  // Remove trailing slashes from urls
  eleventyConfig.addUrlTransform(({url}) => {
    return url.replace(/\/$/, "");
  });

  /* --- SHORTCODES --- */

  let defaultSizesConfig = "(min-width: 1200px) 1400px, 100vw"; // above 1200px use a 1400px image at least, below just use 100vw sized image

  eleventyConfig.addShortcode("image", async function(src, alt, sizes=defaultSizesConfig) {
    const metadata = await metaDataFromSrc(src);
		let imageAttributes = {
			alt,
			sizes,
			loading: "lazy",
			decoding: "async",
		};

		return Image.generateHTML(metadata, imageAttributes);
	});

  // Output year for copyright notices
  eleventyConfig.addShortcode("year", () => `${new Date().getFullYear()}`);


  eleventyConfig.addExtension('11ty.tsx', {
    key: '11ty.js',
  });
  
   /* --- FILTERS --- */

  // Custom Random Helper Filter (useful for ID attributes)
  eleventyConfig.addFilter("generateRandomIdString", function (prefix) {
    return prefix + "-" + Math.floor(Math.random() * 1000000);
  });

  eleventyConfig.addFilter("asPostDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
   });

   eleventyConfig.addAsyncFilter("lastModified", async function (value) {
     const fileStats = await stat(value.inputPath);
     const updatedAt = fileStats.mtime;
     return updatedAt;
   });

   eleventyConfig.addWatchTarget("./src/**/*.tsx");
   eleventyConfig.addWatchTarget("./src/**/*.ts");
   eleventyConfig.addWatchTarget("./src/**/*.11ty.tsx");
  /* --- BASE CONFIG --- */

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "includes", // this path is releative to input-path (src/)
      layouts: "layouts", // this path is releative to input-path (src/)
      data: "data", // this path is releative to input-path (src/)
    },
    templateFormats: ["njk", "md", "11ty.js", "11ty.tsx", "tsx"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};