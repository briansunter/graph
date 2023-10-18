import { EleventyConfig } from "../../eleventy";
import uuid from "short-uuid";
import { VNode, h } from "preact";
import render from "preact-render-to-string";
import path from "path";

export default function (
  eleventyConfig: EleventyConfig,
  options = { componentDir: "src/components" }
) {
  eleventyConfig.addPassthroughCopy(options.componentDir);
  eleventyConfig.addAsyncShortcode("react", async function (component) {
    let filename = path.resolve(process.cwd(), options.componentDir, component.comp);
 
    // Dynamically import the component
    const Component = (await import(path.resolve(options.componentDir, component.comp))).default.default as preact.FunctionComponent<typeof component.props>;

    const componentInstance = h(Component, component.props);
    const componentHTML = render(componentInstance);

    const domId = `pr-${uuid().new()}`;

    return `
  <script type="module">
  import c from '/components/${component.comp}'
  import hydrate from '/components/hydrate.ts'
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
