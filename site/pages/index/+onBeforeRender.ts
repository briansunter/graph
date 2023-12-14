// https://vike.dev/onBeforeRender
export { onBeforeRender };

import social from "./social.toml";
import {data as homeContent, html as about } from "./short-about-me.md";
import { Post } from "../../lib/types";
import { DateTime } from "luxon";
import path from "path";

import type { OnBeforeRenderAsync } from "vike/types";

import {  getFiles } from "../../lib/fileProcessor";
import { ImageProcessor } from "../../lib/ImageProcessor";

const homeProps: PageProps = {
  ...homeContent.matter,
  title: homeContent.matter.blogTitle,
  socialIcons: social.social,
  aboutDescription: about,
  blogPosts: [],
};

const imageProcessor = ImageProcessor.getInstance();

const onBeforeRender: OnBeforeRenderAsync = async (
  pageContext
): ReturnType<OnBeforeRenderAsync> => {
  const f = await getFiles();
  const blogPosts = Object.values(f).filter(p => !p.isAlias);

  const homeBlogPosts = blogPosts.filter((post) => post.props.tags && (post.props.tags.includes("newsletter") || post.props.tags.includes("blog")))
  .sort((b, a) => DateTime.fromISO(a.props.date).toMillis() - DateTime.fromISO(b.props.date).toMillis());

  const homePages = blogPosts.filter((post) => post.props.tags && !post.props.tags.includes("newsletter") && !post.props.tags.includes("blog"))
  .sort((b, a) => DateTime.fromISO(a.props.date).toMillis() - DateTime.fromISO(b.props.date).toMillis());

  return {
    
    pageContext: {
      pageProps: {
        ...homeProps,
        blogPosts:homeBlogPosts,
        homePages
      },
    },
  };
};

export interface PageProps {
  title: string;
  blogAbout: string;
  socialAbout: string;
  aboutHeader: string;
  socialIcons: { name: string; url: string; icon: string }[];
  aboutDescription: string;
  blogPosts: Post[];
  homePages: Post[];
}

export interface Page {
  permalink: string;
  content: string;
  props: PageProps;
}
