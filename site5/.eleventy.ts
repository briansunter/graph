import path from 'path';
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
import eleventyLogseq from './eleventyLogseq';
require('dotenv').config();
import preact from "@preact/preset-vite";

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

  /* --- PLUGINS --- */
 
  eleventyConfig.addPlugin(pluginRss); 
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPlugin(eleventyLogseq, { baseUrl: baseUrl })
  eleventyConfig.addPlugin(preactSSR);

  // Vite Plugin, handles /index.html and index/ redirects
  eleventyConfig.addPlugin(EleventyVitePlugin, {
    viteOptions: {
      esbuild: {
        jsxInject: `import React from 'react'`,
      },
      plugins: [noTrailingSlash(), preact()],
  }});

  // Remove trailing slashes from urls
  eleventyConfig.addUrlTransform(({url}) => {
    return url.replace(/\/$/, "");
  });

  /* --- SHORTCODES --- */

  let defaultSizesConfig = "(min-width: 1200px) 1400px, 100vw"; // above 1200px use a 1400px image at least, below just use 100vw sized image

  eleventyConfig.addShortcode("image", async function(src, alt, sizes=defaultSizesConfig) {
		console.log(`Generating image(s) from:  ${src}`)
    let metadata = await Image(src, {
			widths: [800, 1500],
			formats: ["webp", "jpeg"],
      urlPath: "/images/",
			outputDir: "./_site/images/",
			filenameFormat: function (id, src, width, format, options) {
				const extension = path.extname(src)
				const name = path.basename(src, extension)
				return `${name}-${width}w.${format}`
			}
		});

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