import { visit } from 'unist-util-visit';
import { Element, Node } from 'hast';

export function rehypeYoutubeEmbed(): (tree: Node) => void {
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


export function rehypeYoutubeTimestampEmbed(): (tree: Node) => void {
    return function transformer(tree: Node): void {
        visit<Element>(tree, 'element', (node: Element) => {
            if (node.tagName === 'p') {
                node.children = node.children.flatMap(child => {
                    if (child.type === 'text') {
                        const textNode = child as Text;
                        const ytimeRegex = /\{% ytime "(\w+)" , "(\d+)" , "(.+?)" %\}/;
                        const parts = textNode.value.split(ytimeRegex);

                        if (parts.length > 1) {
                            return parts.reduce((acc, part, index) => {
                                if (index % 4 === 0) {
                                    acc.push({ type: 'text', value: part });
                                } else if (index % 4 === 1) {
                                    const videoId = parts[index];
                                    const formattedTimestamp = parts[index + 2];
                                    const youtubeHtml = createYoutubeTimestampedLink(videoId, formattedTimestamp);
                                    acc.push({ type: 'raw', value: youtubeHtml });
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


function createYoutubeTimestampedLink(videoId: string, formattedTimestamp: string): string {
    const seconds = convertToSeconds(formattedTimestamp);
    return `<a href="https://www.youtube.com/watch?v=${videoId}&t=${seconds}s" target="_blank">@${formattedTimestamp}</a>`;
}

function convertToSeconds(formattedTimestamp: string): number {
    const parts = formattedTimestamp.split(':').reverse();
    let seconds = 0;

    for (let i = 0; i < parts.length; i++) {
        seconds += parseInt(parts[i]) * Math.pow(60, i);
    }

    return seconds;
}