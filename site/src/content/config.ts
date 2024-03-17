import { defineCollection, z } from 'astro:content';
const blog = defineCollection({
	type: 'content',
	schema: z.object({
		title: z.string(),
		description: z.string(),
		pubDate: z.coerce.date(),
		updatedDate: z.coerce.date().optional(),
		heroImage: z.string().optional(),
	}),
});

const logseq = defineCollection({
  type: "content",
  schema: ({ image }) => z.object({
    coverimage: image().optional(),
    date: z.date(),
    description: z.string().optional().default(""),
	  title: z.string().optional().default(""),
    blogtitle: z.string().optional().default(""),
    math: z.boolean().optional(),
    lastMod: z.date().optional(),
    tags: z.array(z.string()).nullable().optional().default([]),
  })
});


export const collections = {  logseq, blog };
