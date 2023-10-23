import React from 'react';
import { ResultPost } from './components/AllPages';
import { Context } from "./lib/Context";
import renderToString from 'preact-render-to-string';
import { BlogPostPreview } from './BlogPostPreview';
import { Post, EleventyPage } from './types';
import wordsCounter from 'word-counting'
import fs from 'fs';
import util from 'util';
const readFile = util.promisify(fs.readFile);
export const data = {
  title: 'Blog',
  description: 'Here you\'ll find my latest blog posts about software development, technology, and my experiences in the tech industry.',
  permalink: '/home/index.html',
  layout: "base",
  eleventyImport: {
    collections: ['newsletter', 'programming']
  }
};
export async function render(this: Context, data: Context) {
  const postPromises: Promise<ResultPost>[] = data.collections.all.map(async (post: EleventyPage<Post>) => {
    const content = await readFile(post.inputPath, 'utf-8');
    const wordCount = wordsCounter(content).wordsCount;
    let smallImage = '';
    if (post.data.coverimage) {
    const imageMeta = await this.imageMeta('src/assets'+ post.data.coverimage);
    smallImage = imageMeta['webp'][0].url
    }

    const resultPost: ResultPost = {
      title: post.data.title,
      url: post.url,
      description: post.data.description,
      tags: post.data.tags,
      coverimage: smallImage,
      date: post.date,
      lastModified: await this.lastModified(post),
      wordCount
    };

    return resultPost;
  });

  const posts: ResultPost[] = await Promise.all(postPromises);
  const rendered = await this.react('AllPages.tsx', { allPosts: posts.slice(0, 200) })
  return renderToString(
    <div>
      <section>
        <hr />
        <h2 className="text-6xl font-bold my-8">Blog</h2>
        <p className="text-lg text-gray-600 my-4">
          Here you'll find my latest blog posts about software development, technology, and my experiences in the tech industry.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto max-w-5xl">
          {data.collections.newsletter.slice(0, 3).map((post: any) =>
            <BlogPostPreview post={post} />
          )
          }
        </div>
      </section>
      <section>
        <hr />
        <h2 className="text-6xl font-bold my-8">Projects</h2>
        <p className="text-lg text-gray-600 my-4">
          Here you'll find my latest blog posts about software development, technology, and my experiences in the tech industry.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mx-auto max-w-5xl">
          {data.collections.newsletter.slice(0, 3).map((post: any) =>
            <BlogPostPreview post={post} />
          )
          }
        </div>
      </section>
      <section>
        <h1>All Pages</h1>
        <div className="" dangerouslySetInnerHTML={{ __html: rendered }} />
      </section>
    </div>
  );
}