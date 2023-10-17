import { EleventyConfig } from "../../eleventy";

import { h } from "preact";
import render from "preact-render-to-string";
import ts from "typescript";
import fs from "fs";
import path from "path";
import vm from "vm";
export default function (eleventyConfig: EleventyConfig, options = {}) {
  eleventyConfig.addPassthroughCopy("src/scripts");
  eleventyConfig.addAsyncShortcode("react", async function (component) {
    let filename = `src/scripts/${component.comp}`;

    const source = fs.readFileSync( filename, "utf8");

    const serverResult = ts.transpileModule(source, {
      compilerOptions: {
        module: ts.ModuleKind.Node16,
        jsx: ts.JsxEmit.React,
        esModuleInterop: true,
      },
    });

    // Evaluate the JavaScript code
    const outputDir = path.join(__dirname, "_site", "scripts");
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
    const Component = context.exports.default as any;

    // Render the component to a string
    const compString = Component 
    const componentHTML = render(compString);

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
  `;
  });
}
