import path from 'path';
import pluginRss from "@11ty/eleventy-plugin-rss";
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

  // Vite Plugin, handles /index.html and index/ redirects
  eleventyConfig.addPlugin(EleventyVitePlugin, {
    viteOptions: {
      plugins: [noTrailingSlash()],
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



  const tsNode = require('ts-node');
  const { h } = require('preact');
  const render = require('preact-render-to-string');
  const ts = require('typescript');
 
 tsNode.register({
    transpileOnly: true,
    extensions: ['.ts', '.tsx']
  }); 
  const vm = require('vm');

  eleventyConfig.addAsyncShortcode("react", async function(component) {
    let filename = `src/scripts/${component.comp}`;
    // console.log('filename', filename)
  
    // Read the TypeScript file
    const source = fs.readFileSync(path.resolve(__dirname, filename), 'utf8');
  
    // Compile the TypeScript to JavaScript
    // const result = ts.transpileModule(source, {
    //   compilerOptions: { module: ts.ModuleKind.ESNext, jsx: ts.JsxEmit.React, esModuleInterop: true },
    // });

    const serverResult = ts.transpileModule(source, {
      compilerOptions: { module: ts.ModuleKind.Node16, jsx: ts.JsxEmit.React, esModuleInterop: true },
    });
   
    // Evaluate the JavaScript code
    const outputDir = path.join(__dirname, '_site', 'scripts');
    const outputFile = path.join(outputDir, `${component.comp}.js`);
  
    // Ensure the output directory exists
    fs.mkdirSync(outputDir, { recursive: true });
  
    // Write the transpiled code to the output file
    // fs.writeFileSync(outputFile, result.outputText, 'utf8'); 
    const context = {
      require: require,
      module: {},
      console: console,
      exports: {} as any,
    };
  
    // Run the code in the new context
    vm.runInNewContext(serverResult.outputText, context);
  
    // Access the exported Component function
    const Component = context.exports.default;

    // Render the component to a string
    const componentHTML = render(h(Component));
    // console.log('componentHTML', componentHTML)
 
    const uuid = `pr-${Math.floor(Math.random() * 1000000)}`;

    return `
    <script type="module">
    import c from '/scripts/${component.comp}'
    import hydrate from '/scripts/hydrate.ts'
    const domNode = document.getElementById("foo");

    if (!domNode) {
        throw new Error("Could not find element with id ");
    }
    const props = ${JSON.stringify(component.props)}; 

    hydrate("foo",c, props);
    </script>
    
    <div id="foo">
    ${componentHTML}
    </div>
    `
  }); 

  eleventyConfig.addExtension('11ty.tsx', {
    key: '11ty.js',
  });
  
  // dev server doesn't spider js dependencies properly, so opt for hard browsersync with watch. 
  eleventyConfig.setServerOptions({
    module: "@11ty/eleventy-server-browsersync",
    snippet: true,
    watch: "src", 
    server: '_site'
  }); 
   /* --- FILTERS --- */

  // Custom Random Helper Filter (useful for ID attributes)
  eleventyConfig.addFilter("generateRandomIdString", function (prefix) {
    return prefix + "-" + Math.floor(Math.random() * 1000000);
  });

  eleventyConfig.addFilter("asPostDate", (dateObj) => {
    return DateTime.fromJSDate(dateObj).toLocaleString(DateTime.DATE_MED);
 
     // other config likely here
   });

   eleventyConfig.addWatchTarget("./src/scripts/");
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
    templateFormats: ["njk", "md", "11ty.js", "11ty.tsx"],
    htmlTemplateEngine: "njk",
    markdownTemplateEngine: "njk",
  };
};