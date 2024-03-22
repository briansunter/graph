import type { Root, Image } from 'mdast';
import { visit } from 'unist-util-visit';

export function remarkRemoveHiddenImages() {
    return (tree: Root) => {
      visit(tree, 'image', (node: Image, index?: number, parent?: any) => {
          const regex = /\|\s*hidden/;
          if (node.alt && regex.test(node.alt) && index !== undefined && parent) {
            parent.children.splice(index, 1);
          }
      });
      return tree;
    };
}