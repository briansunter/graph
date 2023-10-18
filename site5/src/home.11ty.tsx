import React from 'preact/compat';
import { Context } from "./lib/Context";
import renderToString from 'preact-render-to-string';
import { BlogPostPreview } from './BlogPostPreview';

export const data = {
  title: 'Blog',
  description: 'Here you\'ll find my latest blog posts about software development, technology, and my experiences in the tech industry.',
  permalink: '/home/index.html',
  layout: "base",
  eleventyImport: {
    collections: ['newsletter']
  }
};

export function render(data: Context) {
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
      </div>
  );
}