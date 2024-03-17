import rss from '@astrojs/rss';
import { getCollection } from 'astro:content';
import { SITE_TITLE, SITE_DESCRIPTION } from '../consts';
import type { APIContext } from 'astro';

export async function GET(context: APIContext) {
	const posts = await getCollection('logseq');	
	if(!context.site){
		throw new Error("No site data found");
	}
	return rss({
		title: SITE_TITLE,
		description: SITE_DESCRIPTION,
		site: context.site,
		items: posts.map((post) => ({
			...post.data,
			link: `/${post.slug}/`,
			coverimage: post.data.coverimage || "",
			pubDate: post.data.date,
			description: post.data.description || "",
			title: post.data.blogtitle || post.data.title || "",
			blogtitle: post.data.blogtitle || post.data.title || "",
			tags: post.data.tags || [],
		})),
	});
}