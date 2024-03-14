import { visit } from 'unist-util-visit';
import type { Node } from 'unist';

interface ImageNode extends Node {
  url: string;
}

export function renameImagesRemark() {
  return (tree: Node) => {
    visit(tree, 'image', (node: ImageNode) => {
      if (node.url) {
        if (node.url.startsWith('/assets')) {
          node.url = '../../assets' + node.url.slice('/assets'.length);
        } else if (node.url.startsWith('../assets')) {
          node.url = '../../assets' + node.url.slice('../assets'.length);
        }
      }
    });
  };
}