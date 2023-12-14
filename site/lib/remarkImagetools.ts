import { visit } from 'unist-util-visit';
import type { Element } from 'hast';
export function remarkRemoveHiddenImages() {
  return (tree: Element) => {
    visit(tree, 'image', (node: Element, index: number, parent: Element) => {
        const regex = /\|\s*hidden/;
        if (node.alt && regex.test(node.alt)) {
          console.log(node)
          parent.children.splice(index, 1);
        }
    });
  };
}