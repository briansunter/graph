import { defineCollection, z } from 'astro:content';
import {recipeSchema} from '../../cooklang-astro';
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

const photos = defineCollection({
  type: "data",
  schema: ({ image }) =>
    z.object({
      name: z.string(),
      description: z.string(),
      location: z.string(),
      cover: image(),
      date: z.date(),
      gps: z.object({
        lat: z.number(),
        lng: z.number(),
      }),
      photos: z.array(
        z.object({
          title: z.string().optional(),
          description: z.string().optional(),
          filename: image(),
        })
      ),
    }),
});

const recipes = defineCollection({
  type: "data",
  schema: z.object({
    ...recipeSchema
}) 
});

export const collections = { logseq, blog, photos, recipes};

