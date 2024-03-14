import { visit } from 'unist-util-visit';
import type { Node } from 'unist';

export function rehypeVideoPlugin() {
  return (tree: Node) => {
    visit(tree, 'element', (node: any, index, parent) => {
      if (node.tagName === 'img' && (node.properties.src.endsWith('.mp4') || node.properties.src.endsWith('.webm') || node.properties.src.endsWith('.ogg'))) {
        parent.children.splice(index, 1);
        // node.tagName = 'video';
        // node.properties.controls = true;
        // node.children = [];
      }
    });
  };
}

export default rehypeVideoPlugin;