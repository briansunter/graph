import { EleventyConfig } from "../../eleventy";
import uuid from "short-uuid";

import { h } from "preact";
import render from "preact-render-to-string";
import ts from "typescript";
import fs from "fs";
import vm from "vm";
export default function (eleventyConfig: EleventyConfig, options = {}) {
  eleventyConfig.addPassthroughCopy("src/scripts");
  eleventyConfig.addAsyncShortcode("react", async function (component) {
    let filename = `src/scripts/${component.comp}`;

    const source = fs.readFileSync(filename, "utf8");

    const serverResult = ts.transpileModule(source, {
      compilerOptions: {
        module: ts.ModuleKind.Node16,
        jsx: ts.JsxEmit.React,
        esModuleInterop: true,
      },
    });

    const context = {
      require: require,
      module: {},
      console: console,
      exports: {} as any,
    };

    // Run the code in the new context
    vm.runInNewContext(serverResult.outputText, context);

    // Access the exported Component function
    const Component = context.exports.default as preact.ComponentType<any>;
    const componentInstance = h(Component, component.props||{});
    const componentHTML = render(componentInstance);
    console.log("foobar",componentHTML)

    const domId = `pr-${uuid().new()}`;

    return `
  <script type="module">
  import c from '/scripts/${component.comp}'
  import hydrate from '/scripts/hydrate.ts'
  const domNode = document.getElementById("${domId}");

  if (!domNode) {
      throw new Error("Could not find element with id ");
  }
  const props = ${JSON.stringify(component.props)}; 

  hydrate("${domId}",c, props);
  </script>
  
  <div id="${domId}">
  ${componentHTML}
  </div>
  `;
  });
}
