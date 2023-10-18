import React from 'react';
import {Post} from './components/AllPages';
import { Context } from "./lib/Context";
import renderToString from 'preact-render-to-string';
import { BlogPostPreview } from './BlogPostPreview';

export const data = {
  title: 'Blog',
  description: 'Here you\'ll find my latest blog posts about software development, technology, and my experiences in the tech industry.',
  permalink: '/home/index.html',
  layout: "base",
  eleventyImport: {
    collections: ['newsletter','programming']
  }
};
export async function render(this: Context, data: Context) {
  const postPromises : Promise<Post>[] = data.collections.all.map(async (post: any) => {
    const template = await  post.template.read();
    return {
      title: post.data.title,
      description: post.data.description,
      publishDate: post.data.publishDate,
      updatedDate: post.data.updatedDate,
      content: template.content,
      tags: post.data.tags,
      coverimage: post.data.coverimage,
      };
      });
      const posts = await Promise.all(postPromises);
  const rendered = await this.react('AllPages.tsx', { allPosts: posts.slice(0, 10)})
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
        <div className="" dangerouslySetInnerHTML={{__html: rendered}} />
        </section>
      </div>
  );
}