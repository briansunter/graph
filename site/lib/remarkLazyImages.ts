import type { Element } from "hast";
import { visit } from "unist-util-visit";
import { ImageProcessor, ImageData } from "./ImageProcessor"; 
const imageProcessor = ImageProcessor.getInstance();

export function remarkLazyLoadImages() {
  return async (tree: Element) => {
    const imageNodes: Element[] = [];
    visit(tree, "element", (node: Element) => {
      if (node.tagName === "img") {
        imageNodes.push(node);
      }
    });

    await Promise.all(
      imageNodes.map(async (node: Element) => {
        if (!node.properties) node.properties = {};
        if (!node.properties.src || typeof node.properties.src !== "string")
          return;

        try {
          const lowQualityImage = await imageProcessor.generateLowQualityImage(
            node.properties.src
          );
          const responsiveSizes = await imageProcessor.generateResponsiveSizes(
            node.properties.src
          );
          const lastHeight = responsiveSizes[responsiveSizes.length - 1].height;


          node.properties.style = `background-image: url(${lowQualityImage});
                                      object-fit: contain;
                                      background-repeat: no-repeat;
                                      background-size: contain;
                                      background-position: center center; 
                                      height: ${lastHeight}px;
                                      width: 100%;`;

          node.properties.height = lastHeight;
          node.properties.loading = "lazy";
          node.properties.srcset = responsiveSizes
            .map((size: ImageData) => size.srcset)
            .join(", ");
          node.properties.src = undefined;
        } catch (error) {
          console.error(error);
        }
      })
    );
  };
}
