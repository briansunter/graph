// @ts-nocheck
import { visit } from "unist-util-visit";
import type { Element, Node, Text } from "hast";
import fs from "fs";
import path from "path";
import crypto from "crypto";

import type { Root } from "hast";

export function rehypeYoutubeEmbed(): (tree: Root) => void {
  return function transformer(tree: Root): void {
    tree.children = tree.children.map((node: any) => {
      if (node.type === "element" && node.tagName === "p") {
        return {
          ...node,
          children: node.children.map((child: any) => {
            if (child.type === "text") {
              const textNode = child;
              const youtubeMatch = textNode.value.match(
                /\{\{\s*<\s*youtube\s+([\w-]+)\s*>\s*\}\}/
              );

              if (youtubeMatch) {
                const youtubeHtml = createYoutubeEmbed(youtubeMatch[1]);
                return {
                  type: "raw",
                  value: youtubeHtml,
                };
              }
            }
            return child;
          }),
        };
      }
      return node;
    });
  };
}

function createYoutubeEmbed(videoId: string): string {
  return `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen style="max-width:100%"></iframe>`;
}

export function rehypeYoutubeTimestampEmbed(): (tree: Node) => void {
  return function transformer(tree: Node): void {
    visit<Element>(tree, "element", (node: Element) => {
      if (node.tagName === "p") {
        node.children = node.children.flatMap((child) => {
          if (child.type === "text") {
            const textNode = child as Text;
            const ytimeRegex =
              /\{\{\s*ytime\s+videoId\s*=\s*"([^"]+)"\s+start\s*=\s*"(\d+)"\s+time\s*=\s*"([^"]+)"\s*\}\}/g;

            const parts = textNode.value.split(ytimeRegex);

            if (parts.length > 1) {
              return parts.reduce((acc, part, index) => {
                if (index % 4 === 0) {
                  acc.push({ type: "text", value: part });
                } else if (index % 4 === 1) {
                  const videoId = parts[index];
                  const formattedTimestamp = parts[index + 2];
                  const youtubeHtml = createYoutubeTimestampedLink(
                    videoId,
                    formattedTimestamp
                  );
                  acc.push({ type: "raw", value: youtubeHtml });
                }
                return acc;
              }, []);
            }
          }
          return child;
        });
      }
    });
  };
}

function createYoutubeTimestampedLink(
  videoId: string,
  formattedTimestamp: string
): string {
  const seconds = convertToSeconds(formattedTimestamp);
  return `<a href="https://www.youtube.com/watch?v=${videoId}&t=${seconds}s" target="_blank">@${formattedTimestamp}</a>`;
}

function convertToSeconds(formattedTimestamp: string): number {
  const parts = formattedTimestamp.split(":").reverse();
  let seconds = 0;

  for (let i = 0; i < parts.length; i++) {
    seconds += parseInt(parts[i]) * Math.pow(60, i);
  }

  return seconds;
}

export function rehypeConvertMp4ImgToVideo(): (tree: Element) => void {
  return async function transformer(tree: Element): Promise<void> {
    const copyPromises = tree.children.flatMap((node: Element) => {
      if (
        node.tagName === "p" &&
        node.children.length === 1 &&
        node.children[0].tagName === "img" &&
        node.children[0].properties.src.endsWith(".mp4")
      ) {
        const imgNode = node.children[0];

        // Copy video asset to dist/client/assets
        const srcPath = path.join(__dirname, "..", imgNode.properties.src);
        const hash = crypto
          .createHash("md5")
          .update(imgNode.properties.src)
          .digest("hex");
        const ext = path.extname(imgNode.properties.src);
        const destPath = path.join(
          __dirname,
          "..",
          "dist",
          "client",
          "assets",
          `${hash}${ext}`
        );
        const videoNode = createVideoNode(
          `/assets/${hash}${ext}`,
          imgNode.properties.alt || "",
          true
        );
        return fs.promises.copyFile(srcPath, destPath).then(() => videoNode);
      } else {
        return node;
      }
    });

    tree.children = await Promise.all(copyPromises);
  };
}

function createVideoNode(
  videoPath: string,
  altText: string,
  shouldAutoplay: boolean
): Element {
  const videoProperties = {
    className: ["post-video"],
    src: videoPath,
    alt: altText,
    controls: !shouldAutoplay,
  };

  if (shouldAutoplay) {
    videoProperties["muted"] = true;
    videoProperties["playsInline"] = true;
    videoProperties["autoPlay"] = true;
    videoProperties["loop"] = true;
  }

  return {
    type: "element",
    tagName: "video",
    properties: videoProperties,
    children: [],
  };
}

export function rehypeRemoveLogseqBlocks(): (tree: Node) => void {
  return function transformer(tree: Node): void {
    visit(tree, "text", (node) => {
      if (!node.value || typeof node.value !== "string") return;

      const logseqRegex = /\{% (.*?(logseq|endlogseq).*?) %\}/g;
      node.value = node.value.replace(logseqRegex, "");
    });
  };
}
