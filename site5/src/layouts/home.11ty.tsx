import React from 'react';

import { ResultPost } from '../components/AllPages';
import { Context } from "../lib/Context";
import renderToString from 'preact-render-to-string';
// import { BlogPostPreview } from '../BlogPostPreview';
import { Post, EleventyPage } from '../types';
import wordsCounter from 'word-counting'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowCircleRight } from '@fortawesome/free-solid-svg-icons';
import fs from 'fs';
import util from 'util';
const readFile = util.promisify(fs.readFile);
export const data = {
  // title: 'Blog',
  description: 'Here you\'ll find my latest blog posts about software development, technology, and my experiences in the tech industry.',
  permalink: '/home/index.html',
  layout: "base",
  eleventyImport: {
    collections: ['newsletter', 'programming']
  }
};

interface HomePageData extends Context {
  title: string;
  avatar: string;
  intro: string;
  content: string;
}
export async function render(this: Context, data: Context) {
  const { Intro } = require('../includes/Intro.tsx');
  const { BlogPostPreview }= require('../BlogPostPreview.tsx')

  const {title, avatar, intro, content} = data as HomePageData;
  const contentComponent = <div className="" dangerouslySetInnerHTML={{ __html: content }} />
  const postPromises: Promise<ResultPost>[] = data.collections.all.map(async (post: EleventyPage<Post>) => {
    const content = await readFile(post.inputPath, 'utf-8');
    const wordCount = wordsCounter(content).wordsCount;
    let smallImage = '';
    if (post.data.coverimage) {
      const imageMeta = await this.imageMeta('src/assets' + post.data.coverimage);
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
      <section className='flex flex-col items-center'>
        <Intro socialIcons={data.social.socialIcons} image_src={avatar} title={title} short_intro={intro} long_intro={contentComponent} />
        </section>
      <section className='flex items-center flex-col'>
        <hr />
        <div className='w-11/12 p-4'>
          <h2 className="text-6xl font-bold my-8">Blog</h2>
          <p className="text-lg text-gray-600 my-4">
            Here you'll find my latest blog posts about software development, technology, and my experiences in the tech industry.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-4 gap-4 w-11/12 p-4">
            {data.collections.newsletter.slice(-7).reverse().map((post: any) =>
              <BlogPostPreview post={post} />
            )}
            <div className="bg-gray-100 p-4 rounded-md shadow-md flex items-center justify-center">
              <a href="/more-posts" className="text-2xl text-blue-500 hover:text-blue-700 transition-colors duration-200 ease-in-out flex flex-col items-center">
                <FontAwesomeIcon icon={faArrowCircleRight} size="2x" className="h-16 w-16" />
                <span className="mt-4">More Blogs</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className='flex items-center flex-col'>
        <hr />
        <div className='w-11/12 p-4'>
          <h2 className="text-6xl font-bold my-8">Projects</h2>
          <p className="text-lg text-gray-600 my-4">
            Here you'll find my latest blog posts about software development, technology, and my experiences in the tech industry.
          </p>
        </div>
        <div className="flex justify-center">
          <div className="grid grid-cols-4 gap-4 w-11/12 p-4">
            {data.collections.newsletter.slice(0, 3).map((post: any) =>
              <BlogPostPreview post={post} />
            )}
            <div className="bg-gray-100 p-4 rounded-md shadow-md flex items-center justify-center">
              <a href="/more-posts" className="text-2xl text-blue-500 hover:text-blue-700 transition-colors duration-200 ease-in-out flex flex-col items-center">
                <FontAwesomeIcon icon={faArrowCircleRight} size="2x" className="h-16 w-16" />
                <span className="mt-4">More Projects</span>
              </a>
            </div>
          </div>
        </div>
      </section>
      <section className='flex justify-center'>
        <div className='w-11/12 p-4'>
          <h1 className="text-6xl font-bold my-8">All Pages</h1>
          <div className="" dangerouslySetInnerHTML={{ __html: rendered }} />
        </div>
      </section>
    </div>
  );
}