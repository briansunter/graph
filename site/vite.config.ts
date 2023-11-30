import react from "@vitejs/plugin-react";
import remarkSlug from 'remark-slug'
import vike from "vike/plugin";
import { UserConfig } from "vite";
import { imagetools } from "vite-imagetools";
import FullReload from 'vite-plugin-full-reload'
import remarkHtml from 'vite-remark-html'
import remarkFrontmatter from 'remark-frontmatter'
// import ViteYaml from '@modyfi/vite-plugin-yaml';
import { ViteToml } from 'vite-plugin-toml'
import styleImport from 'vite-plugin-style-import';
import mdx from '@mdx-js/rollup'
import { remarkLazyLoadImages } from "./lib/remarkLazyImages";
import remarkMath from 'remark-math'
import rehypeKatex from 'rehype-katex'
import remarkRehype from "remark-rehype";
import remarkParse from "remark-parse";
import rehypeStringify from "rehype-stringify";
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import MarkdownPlugin from "./lib/remark-vite";
import remarkStringify from 'remark-stringify'
import myUnifiedPluginHandlingYamlMatter from "./lib/unified-yaml-matter";
import remarkTweetPlugin from "./lib/remarkTweetPlugin";
import rehypeRaw from 'rehype-raw'
import remarkPrism from  'remark-prism'
import remarkMermaid from 'remark-mermaidjs'


const config: UserConfig = {
  ssr: {
    noExternal: ['react-tweet']
},

  plugins: [
    react(),
    vike({ prerender: true }),
    MarkdownPlugin()
    .use(remarkParse)
    .use(remarkStringify)
    .use(remarkFrontmatter, ['yaml', 'toml'])
    .use(myUnifiedPluginHandlingYamlMatter)
    .use(remarkMermaid)
    .use(remarkMath)
    .use(remarkPrism)
    .use(remarkRehype, {allowDangerousHtml: true})
    .use(remarkTweetPlugin)
    .use(rehypeRaw)
    .use(remarkLazyLoadImages)
    .use(rehypeKatex)
    .use(rehypeStringify),
  //   remarkHtml.default( { exclude: /\/node_modules\//,
  //   allowDangerousHtml: true,
  // }).use(remarkFrontmatter, ['yaml', 'toml'])
  // .use(remarkParse)
  //   .use(remarkLazyLoadImages)
  //   .use(remarkMath)
  //   .use(remarkRehype)
  //   .use(rehypeKatex)
  //   .use(rehypeStringify)
  //   ,
    ViteToml(),
    mdx({include: /\.mdx$/}),
    // ViteYaml(),
    // FullReload(['**/*.{md, yaml}']),
    imagetools()
  ],
  build: {
    target: "esnext",
  },

};

export default config;
