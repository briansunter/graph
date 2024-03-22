---
title: logseq-getting-started
slug: logseq-getting-started
tags:
  - logseq
  - productivity
  - notetaking
  - blog
categories: productivity
date: 2022-10-04
blogtitle: Logseq Getting Started
description: How to get started with Logseq and publish your notes online in 30 minutes.
coverimage: ../../assets/image_1662087082755_0.png
---

How to get started with Logseq and publish your notes online in 30 minutes.

[Logseq](https://logseq.com/) is a great free open source notetaking tool which makes it easy for you to share your notes online like this one. I'll show you how to quickly get set up.

Here's the high level process we will go over

Download Logseq

Start taking notes in your daily notes

Start making pages by surrounding important words with backlinks (surrounded with double square braces like this `[[backlink]]`)

Make a few of your pages public

Share your pages with the world

In this guide, I'll the hosting company [Netlify](https://netlify.com/) as an example because it is good and easy to get started.

If you are unsure, I recommend starting with Netlify. Logseq generates a site that is compatible with many different hosting providers so it's easy to switch , especially if you get your own domain name.

I recommend getting something basic up online right away, then researching other options  on.

## Download Logseq


Logseq is still in "beta" so you need to [download it here from the github releases page](https://github.com/logseq/logseq/releases)

Find the release tagged with "Latest" (not "Pre-release")

select darwin-arm for m1 mac, darwin-x64 for intel mac, or windows

![ ](/assets/image_1662087068660_0.png)

## Set up Logseq


After downloading and installing logseq you will see this page

![ ](/assets/image_1662087082755_0.png)

Make a folder called `Logseq` in iCloud Drive, then make a folder for your graph inside of it named something like `notes` iCloud Drive allows notes will be available in the mobile app

![ ](/assets/image_1662087093541_0.png)

## Start writing in daily notes


 you will see an empty page with todays date. This is called your "daily notes". It's usually my starting place for ideas. I just type some thoughts and start creating `[[backlinks]]` for important concepts, so I can find my notes  on when  research or writing.

Take a little bit of time to experiment writing, making backlinks, clicking the backlinks, etc.

{{< tweet user="Conaw" id="1315078546763603968" >}}

## Make your public homepage


 let's create a home for you on the internet.

Create a "homepage" for yourself by typing `[[homepage]]` then clicking on it. This will create the page and navigate you to it.

Type some text here about you and your interests.

 make it public by clicking the three dots in the upper right hand corner and selecting "Make it public for publishing"

![ ](/assets/image_1662087105153_0.png)

Only the pages you select to make public will be published.

This way ou can have most of your graph private, with just a few pages public.

Every time you want a page to be public, select this option on the page so it will appear on your site.

## Export your public graph


### Set your homepage


Logseq has a notion of a "home page"

For private notetaking, I like my daily notes to be my default page.

For my published site, I want to have a dedicated homepage like the one we just made

To do this, we'll change the `:default-home` in the Logseq settings to our public homepage in the settings before we export

Click the three dots in the upper right hand corner, then select settings.

Select edit config.edn

![ ](/assets/image_1662087114284_0.png)

 we'll add a line to the config file with the page we want to be our homepage

![ ](/assets/image_1662087124359_0.png)

This is a little inconvenient to do each time you publish, but besides this the experience is pretty good. I expect some of these publishing features will be built out more in the future.

When you are ready to publish your select, select the three dots in the upper right hand corner, select "export graph" and then "export public pages"

![ ](/assets/image_1662087133034_0.png)

Pick a folder for the output where you'll remember it

Then after exporting we'll comment it out with two semicolons `;;`, so our private journal goes back to using the daily notes page as the default page.

![ ](/assets/image_1662087142333_0.png)

## Publish your public graph online


There are tons of good options, but I recommend netlify which is good and free. You can switch to something else .

[Sign up for netlify here.](https://app.netlify.com/signup)

After signing in, go to [netlify drop](https://app.netlify.com/drop).

![ ](/assets/image_1662087153089_0.png)

Click the folder icon and select the folder where you exported your public graph to.

In a few minutes you should be online!

To update your site next time you export your public graph, click on the "Deploys" tab

Click the box at the bottom to upload a new version of your site.

![ ](/assets/image_1662087164166_0.png)

## Next Steps


### Set up Custom Domain


I highly suggest setting up a custom domain like yourname.com.

You want the links you share to work forever, and if you own your own domain, you can switch away from netlify , whereas you can't if all your links have netlify.app in the domain.

I think it's easiest to buy it through netlify. They will set everything up so the domain points to your website and just works. It costs 11.99 a year to own your own domain. You can transfer the domain name you buy to somewhere else , or set up an existing domain name you already own if you k how.

![ ](/assets/image_1662087175738_0.png)

![ ](/assets/image_1662087184888_0.png)

## Conclusion


There are a ton of ways to host your public graph, but I think just uploading it to netlify drop is the easiest and best way for non technical users to get their site online.

I find people get to paralyzed with options, so just get your site up  on netlify, then figure out the perfect solution . You can always migrate providers if you get the domain name.

[Let me k if you found this guide useful on twitter](https://twitter.com/Bsunter),  especially if you set up your own public graph!

 go to the docs and learn more about logseq

