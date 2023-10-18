import { EleventyConfig } from "../../eleventy";
import uuid from "short-uuid";
import { VNode, h } from "preact";
import render from "preact-render-to-string";
import path from "path";

interface Options {
  componentDir: string;
}

const defaultOptions: Options = {
  componentDir: 'src/components'
}

export default function (
  eleventyConfig: EleventyConfig,
  userOptions: Partial<Options> = {}
) {
  const options: Options = { ...defaultOptions, ...userOptions };

  eleventyConfig.addPassthroughCopy(options.componentDir);
  eleventyConfig.addWatchTarget(options.componentDir);
  eleventyConfig.addAsyncShortcode("react", async function (name, props) {

    let filename = path.resolve(process.cwd(), options.componentDir, name);
 
    // Dynamically import the component
    const Component = (await import(path.resolve(options.componentDir, name))).default.default as preact.FunctionComponent<typeof props>;

    const componentInstance = h(Component, props);
    const componentHTML = render(componentInstance);

    const domId = `pr-${uuid().new()}`;

    return `

  <script type="module">
  import c from '/components/${name}'
  import hydrate from '/components/hydrate.ts'
  const domNode = document.getElementById("${domId}");

  if (!domNode) {
      throw new Error("Could not find element with id ");
  }

  const dataElement = document.getElementById("${domId}-data");
  const storedProps = "${encodeURIComponent(JSON.stringify(props))}";
  const props = JSON.parse(decodeURIComponent(storedProps));
  hydrate("${domId}",c, props);
  </script>
  
  <div id="${domId}">
  ${componentHTML}
  </div>
  `;
  });
}
