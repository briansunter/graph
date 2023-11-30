---
description: I've remade my website using Logseq and the Hugo static site generator.
tags:
- logseq
- programming
date: 2022-08-19
coverimage: /assets/image_1661226490211_0.png
title: new website on logseq hugo
categories:
lastMod: 2023-09-27
---
![image.png](/assets/image_1661226490211_0.png)

I've remade my website using Logseq and the Hugo static site generator.

I write all my posts in Logseq and use the [Schrodinger plugin](https://github.com/sawhney17/logseq-schrodinger) to convert the Logseq pages into [Hugo](https://gohugo.io/)-compatible markdown files.

After I export my Logseq pages as Hugo markdown files, I use Hugo to convert them to HTML and upload them to AWS CloudFront, where I host my site.

Here is the link to my public graph https://github.com/briansunter/graph

## Motivation

I want to start posting my Logseq notes and blog posts online

I want to host these on my site, where they can stay up forever, instead of just on Twitter, Facebook, Reddit, etc. where they will eventually be paywalled or deleted.

I also want to make publishing on my site as easy as possible. Managing my notes as well as my public site in Logseq is very convenient and lets me quickly push new content.

I write everything in Logseq, export using the Hugo plugin, push it to GitHub, and my site is deployed in just a few minutes. It is very easy to publish new content.

## New Site - Motivations

When I first started my website a long time ago, I used WordPress, and since then I've moved to static site generators. I've used Hugo, Jekyll, Eleventy, and now Logseq + Hugo.

I've spent a lot of time hand tuning static site generators, but decided I wanted something more "hands off" and that worked out of the box.

I was using a highly customized eleventy static site, but it was a lot of maintenance and was slow to build my site. I wanted something fast and easy to use.

Hugo, along with the PaperMod theme does everything my old site did, including image optimization, but is mostly zero config and super fast. Plus, I enjoy the theme and layout of the plugin.

I was publishing an interactive graph using the Logseq built-in export feature, but I couldn't get it to work with SEO. Later on, I plan on publishing my full interactive graph again, but for now, I'm focusing on the static site.

## Considerations

### Zero Config

I'm tired of messing with build settings and optimizing images. I want to just write my posts and have them automatically optimized and published.

Hugo has a large community and many libraries that do everything I want out of the box

This includes image optimization, RSS feeds, and more.

### Fast to Build

My handmade setup with Eleventy was slow to publish.

Hugo is extremely fast

### Easy to Publish New Entries

I want to reduce the friction of publishing new notes as much as possible.

I'm already writing my notes in Logseq, so being able to clean up these notes and publish them within Logseq makes it effortless to make new posts.

I can write a new post in Logseq, export it as a Hugo markdown file, push to GitHub, and my site is deployed in just a few minutes.

### No Maintenance and Cheap

I want to host my site for less than a few dollars per month and not ever have to adjust it

I set up this site to deploy to AWS S3 and CloudFront, which is cheap and doesn't require any maintenance.

I also set up a GitHub action to automatically deploy my site whenever I push to GitHub.

### Will be Around Forever

I want to make sure every link to my site continues to work forever.

I plan to host the site under my name and maintain every link for as long as possible.

I'm using the Logseq static site plugin so I can customize the permalink.

I'm also using the Hugo static site generator, which is very popular and will be around for a long time.

### SEO

Being discoverable on Google is huge, and having a static site instead of a single-page app seems to work better.

SEO is part of the reason I'm using Hugo instead of Logseq's built-in export feature.

I get a surprising amount of traffic from Google searches, and I want to keep that up.

### Open Source

I want all the content, even the work in progress to be open source on GitHub.

I'm pushing the Logseq graph, the Hugo files, and the deployment tooling to public GitHub.

This way, others can clone my graph, see exactly how I'm using Logseq, and copy my deployment tooling to make a site like mine.

I'm also using the Hugo PaperMod theme, which is open source and free to use.

## How it Works

### Logseq

Logseq is a note taking app that lets you write in markdown and organize your notes in a graph. This is the core of my site.

I do all my writing, note taking, and task management in Logseq so being able to instantly publish my notes is a huge advantage. My main goal is making it as frictionless as possible to post new notes to my site. Taking notes in Logseq, and re-editing in Markdown for my earlier static site was far too time-consuming.

### Logseq Schrodinger (Hugo) Plugin

It is published using the Logseq Schrodinger Plugin which is now built into Logseq. This plugin takes my Logseq notes and converts them into Hugo-compatible markdown files.

Hugo is mainly configured by "front matter" which is YAML at the top of your markdown files, to set things like the title, tags, description, permalink, etc.

### Hugo

Hugo is a static site generator that takes markdown files and converts them to HTML. It is very fast and easy to use.

#### Papermod plugin

I'm using the Papermod theme, which is a very popular Hugo theme. It is free to use and open source.

The [Papermod Plugin](https://github.com/adityatelange/hugo-PaperMod) has many features like image optimization, google analytics, and social sharing. It includes the main features I need out of the box

I will admit I prefer to use Javascript instead of Go for customization, but the speed and size of the community make Hugo worth it.

### Deployment

#### Logseq Schrodinger Plugin

After I'm writing a post in Logseq, I push the export button to generate a folder of Hugo-compatible markdown files.

I check these files into git along with my public graph.

I also push the Logseq graph to GitHub so others can see my notes and clone my graph.

#### Github Actions

Whenever I push to GitHub, Github Actions automatically generates my Hugo site and deploys it to AWS.

I'm using the Hugo and AWS action to deploy my site to AWS S3 and CloudFront.

#### AWS CDK

I use the [Typescript AWS CDK](https://aws.amazon.com/cdk/) to configure the infrastructure for my site.

It allows me to use Typescript to specify the entire AWS setup for my site including

Route53 domain name

subdomain

s3

CloudFront

CloudFront function URL rewrite

deployments and cache invalidations

#### CloudFront

CloudFront is a CDN that serves my content from locations all over the world, so it is fast everywhere, even in Australia.

They have a generous free tier, so it doesn't cost anything unless you have massive traffic.

#### CloudFront URL Rewrite

It's really important to me to have "clean" links and I hate having a `/` at the end of my sites like `briansunter.com/foo/`

A CloudFront static site on S3 has these trailing slashes by default.

I use a CloudFront function to rewrite the URL so the trailing slash isn't needed

If you try to add a trailing slash, the function redirects you to the non-trailing slash version.

It's a small detail, but I hate when hosting providers force me to use the trailing slash, so I'm happy to use CloudFront functions to remove it.

## Conclusion

I'm continuing to build out posts on my new site while migrating my old posts.

I hope to fully move over to this site soon, and post a lot more often.

So far, I've been really happy with this setup and hope to build it out more in the future.

This is the first post I've written in Logseq and exported to Hugo, so I'm excited to see how it looks.

I hope this post is helpful to others who are looking to build a static site with Logseq and Hugo.
