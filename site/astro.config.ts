import { defineConfig } from "astro/config";
import mdx from "@astrojs/mdx";
import sitemap from "@astrojs/sitemap";
import rehypeVideoPlugin from "./src/lib/rehypeVideoPlugin";
import tailwind from "@astrojs/tailwind";
import { renameImagesRemark } from "./src/lib/renameImagesRemark";
import rehypeTweetPlugin from "./src/lib/rehypeTweetPlugin";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import {
  rehypeRemoveLogseqBlocks,
  rehypeYoutubeEmbed,
  rehypeYoutubeTimestampEmbed,
} from "./src/lib/rehypeLogseq";
import { remarkRemoveHiddenImages } from "./src/lib/remarkHiddenImages";
import remarkMermaid from "remark-mermaidjs";
import remarkWikiLinkPlugin from "remark-wiki-link";
import icon from "astro-icon";
import rehypeFigure from "@microflash/rehype-figure";
import remarkGfm from "remark-gfm-no-autolink";
import cooklang from './cooklang-astro';
// https://astro.build/config
export default defineConfig({
  site: "https://briansunter.com",
  // build: {
  //   format: "file",
  // },
  // experimental: {
  //   contentCollectionCache: true,
  // },
  integrations: [mdx(), sitemap(), tailwind(), icon(), cooklang()],
  prefetch: {
    prefetchAll: true,
  },
  markdown: {
    gfm: false,
    remarkPlugins: [
      remarkGfm,
      [
        remarkWikiLinkPlugin,
        {
          hrefTemplate: (permalink: string) =>
            `/${permalink.replace(/_/g, "-").toLowerCase()}`,
        },
      ],
      renameImagesRemark,
      remarkRemoveHiddenImages,
      remarkMath,
      remarkMermaid,
    ],
    rehypePlugins: [
      rehypeYoutubeEmbed,
      rehypeVideoPlugin,
      rehypeTweetPlugin,
      rehypeYoutubeTimestampEmbed,
      rehypeRemoveLogseqBlocks,
      [rehypeKatex, { output: "html" }],
      rehypeFigure,
    ],
  },
  redirects: {
    "/newsletter": "/",
    "/pages/newsletter/issue/2": "/newsletter/issue-2",
    "/pages/newsletter-issue-1": "/newsletter/issue-1",
    "/pages/newsletter/issue/3": "/newsletter/issue-3",
    "/pages/newsletter/issue/4": "/newsletter/issue-4",
    "/pages/newsletter/issue/5": "/newsletter/issue-5",
    "/pages/newsletter-6": "/newsletter/issue-6",
    "/pages/newsletter-7": "/newsletter/issue-7",
    "/pages/newsletter-issue-8": "/newsletter/issue-8",
    "/pages/newsletter-issue-9": "/newsletter/issue-9",
    "/blog/how-to-take-smart-notes-roam-research/": "/how-to-take-smart-notes",
    "/blog/why-clojure/": "/why-clojure",
    "/blog/five-minute-journal": "/five-minute-journal",
    "/pages/ai-learning-resources": "/ai-learning-resources",
    "/pages/newsletter/issue-13": "/newsletter/issue-13",
    "/pages/almanack-of-naval-ravikant": "/almanack-of-naval-ravikant",
    "/pages/[...slug]": "/[...slug]",
    "/blog/[...slug]": "/[...slug]",
  },
});
