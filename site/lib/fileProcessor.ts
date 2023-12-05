import path from "path";
import { ImageProcessor } from "./ImageProcessor";
import { Page, PageProps } from "../pages/pages/+onBeforeRender";
import { ProcessedPage } from "./remark-vite";
import { globalRedirects } from "./redirects";

const imageProcessor = ImageProcessor.getInstance();
const files: Record<string, () => Promise<any>> = import.meta.glob("../content/logseq/**/*.md");

function ensureStartsWithSlash(str: string): string {
  return str.startsWith('/') ? str : '/' + str;
}

function filePathToURL(filePath: string): string {
  let relativePath = filePath
    .replace(/^\.\.\/content\/logseq\//, "")
    .replace(/\.md$/, "")
    .replace(/\\/g, "/") // Replace backslashes with forward slashes
    .replace(/ /g, "-") // Replace spaces with hyphens
    .toLowerCase() // Convert to lowercase
    .split(".")[0]; // Remove the file extension
  return ensureStartsWithSlash(relativePath);
}

export async function getFiles(): Promise<Record<string, Page>> {
  const urlToPageMap: Record<string, Page> = {};
  const supportedImages = [".png", ".jpg", ".jpeg", ".webp", ".gif"];

  for (const page in files) {
    const f = (await files[page]()) as ProcessedPage;
    const props = f.data.matter as PageProps;
    const url = ensureStartsWithSlash(props.permalink || filePathToURL(page));
    //title or default based on filename
    const title = props.blogtitle || path.basename(page, ".md");
    const p: Page = {
      permalink: url,
      title: title,
      description: props.description,
      originalFile: page,
      content: f.html,
      props,
    };

    if (
      p.props?.coverimage &&
      supportedImages.includes(path.extname(p.props.coverimage))
    ) {
      const responsiveCoverImage = await imageProcessor.generateResponsiveSizes(
        p.props.coverimage
      );
      const lowQualityImagePlaceholder =
        await imageProcessor.generateLowQualityImage(p.props.coverimage);
      p.props.responsiveCoverImage = responsiveCoverImage;
      p.props.coverPlaceholder = lowQualityImagePlaceholder;
      p.coverimage = '/assets/' + p.props.responsiveCoverImage[p.props.responsiveCoverImage.length - 1].hashedFilename
    }

    urlToPageMap[url] = p;

    if (p.props?.aliases && Array.isArray(p.props.aliases)) {
      for (let alias of p.props.aliases) {
        alias = ensureStartsWithSlash(alias.replace(/^\//, "").replace(/\/$/, ""));
        const aliasPage: Page = {
          isAlias: true,
          permalink: alias,
          originalFile: page,
          content: `<meta http-equiv="refresh" content="0; URL='${url}'" />
       <link rel="canonical" href="${url}" />`,
          props,
        };
        urlToPageMap[alias] = aliasPage;
      }
    }
  }

  for (const redirect in globalRedirects) {
    const redirectPage: Page = {
      isAlias: true,
      permalink: redirect,
      originalFile: null,
      content: `<meta http-equiv="refresh" content="0; URL='${globalRedirects[redirect]}'" />
       <link rel="canonical" href="${globalRedirects[redirect]}" />`,
      props: {},
    };
    urlToPageMap[redirect] = redirectPage;
  }

  return urlToPageMap;
}