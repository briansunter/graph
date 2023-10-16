const path = require('path')
const pluginRss = require("@11ty/eleventy-plugin-rss"); // needed for absoluteUrl SEO feature
const eleventyNavigationPlugin = require("@11ty/eleventy-navigation");
const EleventyVitePlugin = require("@11ty/eleventy-plugin-vite");
const Image = require("@11ty/eleventy-img");
const yaml = require("js-yaml"); // Because yaml is nicer than json for editors
const slinkity = require('slinkity')
const preact = require('@slinkity/preact')
const { DateTime } = require("luxon");

require('dotenv').config();

const noTrailingSlash = () => ({
  name: 'configure-server',
  configureServer(server) {
    server.middlewares.use((req, res, next) => {
      let [url, queryString] = req.url.split('?');
      queryString = queryString ? '?' + queryString : '';

      const lastSegment = url.split("/").pop();

      if (url !== "/" && url.endsWith("/")) {
        res.writeHead(301, { Location: url.slice(0, -1) + queryString });
        res.end();
      } else if (url !== "/" && !/\.[\w-]+$/i.test(lastSegment) && !url.startsWith('/@vite/')) {
        req.url = url + "/index.html" + queryString;
        next();
      } else {
        next();
      }
    })
  },
})

const baseUrl = process.env.BASE_URL || "http://localhost:8080";
console.log('baseUrl is set to ...', baseUrl);

const globalSiteData = {
  title: "11ty Starter Site",
  description: "This is a basic 11ty starter template with my most commonly used features and modern tooling",
  locale: 'en',
  baseUrl: baseUrl,
}

module.exports = function(eleventyConfig) {

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
 

  eleventyConfig.addPlugin(pluginRss); // just includes absolute url helper function
  eleventyConfig.addPlugin(eleventyNavigationPlugin);
  eleventyConfig.addPassthroughCopy("public");

  // eleventyConfig.addPlugin(
  //   slinkity.plugin,
  //   slinkity.defineConfig({
  //     renderers: [preact()],
  //   })
  // ) 
  eleventyConfig.addPlugin(EleventyVitePlugin, {viteOptions: {plugins: [noTrailingSlash()]}});

  eleventyConfig.addUrlTransform(({url}) => {
    return url.replace(/\/$/, "");
  });

  /* --- SHORTCODES --- */
  eleventyConfig.addShortcode("youtube", function(videoId) { return `https://www.youtube.com/watch?v=${videoId}` });
  eleventyConfig.addShortcode("tweet", function(userId, tweetId) { return `https://twitter.com/${userId}/status/${tweetId}` })
  eleventyConfig.addShortcode("sref", function(url) { return `${baseUrl}${url}` });
  eleventyConfig.addShortcode("embed", function(url) { return `embed url` });
  eleventyConfig.addShortcode("renderer", function(url) { return `renderer url` });
  eleventyConfig.addShortcode("ytime", function(url) { return `ytime url` });
  eleventyConfig.addPairedShortcode("logseq", function(url) { return `logseq url` });
  eleventyConfig.addPairedShortcode("logseqOrgNOTE", function(url) { return `logseq url` });
  eleventyConfig.addPairedShortcode("logseqOrgWARNING", function(url) { return `logseq url` });
  eleventyConfig.addPairedShortcode("logseqOrgSRC", function(url) { return `logseq url` });
  eleventyConfig.addPairedShortcode("logseqOrgQUOTE", function(url) { return `logseq url` });
  eleventyConfig.addShortcode("jsonPosts", function(url) { 
    
  
  })
  // Image shortcode config
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


  /* --- FILTERS --- */

  // Custom Random Helper Filter (useful for ID attributes)
  eleventyConfig.addFilter("generateRandomIdString", function (prefix) {
    return prefix + "-" + Math.floor(Math.random() * 1000000);
  });

  eleventyConfig.addFilter("asPostDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
 
     // other config likely here
   });
  /* --- BASE CONFIG --- */
  // eleventyConfig.setServerPassthroughCopyBehavior("passthrough");

  return {
    dir: {
      input: "src",
      output: "_site",
      includes: "includes", // this path is releative to input-path (src/)
      layouts: "layouts", // this path is releative to input-path (src/)
      data: "data", // this path is releative to input-path (src/)
    },
    templateFormats: ["njk", "md", "11ty.js"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};