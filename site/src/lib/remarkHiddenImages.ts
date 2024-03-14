import type { Element } from 'hast';
import {visit } from 'unist-util-visit';

interface ImageElement extends Element {
  alt?: string;
}

export function remarkRemoveHiddenImages() {
    return (tree: Element) => {
      visit(tree, 'image', (node: ImageElement, index: number, parent: Element) => {
          const regex = /\|\s*hidden/;
          if (node.alt && regex.test(node.alt)) {
            parent.children.splice(index, 1);
          }
      });
    };
}