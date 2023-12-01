import { visit } from 'unist-util-visit';
import { Element, Node } from 'hast';

export default function rehypeYoutubeEmbed(): (tree: Node) => void {
    return function transformer(tree: Node): void {
        visit<Element>(tree, 'element', (node: Element, index: number | null, parent: Element | undefined) => {
            if (index === null || parent === undefined) return;
            if (node.tagName === 'p' && node.children.some(child => child.type === 'text')) {
                const textNode = node.children.find(child => child.type === 'text');
                if (!textNode || typeof textNode.value !== 'string') return;
                
                const youtubeMatch = textNode.value.match(/\{% youtube (\w+) %\}/);

                if (youtubeMatch) {
                    const youtubeHtml = createYoutubeEmbed(youtubeMatch[1]);
                    const youtubeNode = {
                        type: 'raw',
                        value: youtubeHtml
                    };
                    parent.children.splice(index, 1, youtubeNode);
                }
            }
        });
    };
}

function createYoutubeEmbed(videoId: string): string {
    return `<iframe width="560" height="315" src="https://www.youtube.com/embed/${videoId}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`;
}
