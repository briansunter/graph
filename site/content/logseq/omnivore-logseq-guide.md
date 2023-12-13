---
tags:
- logseq
- productivity
- reading
date: 2022-10-26
coverimage: /assets/image_1662086881256_0.png
description: How to use the Omnivore read it later app
blogtitle: Omnivore Logseq Guide
title: omnivore-logseq-guide
categories:
lastMod: 2023-10-28
---
If you want to read content online much more efficiently and remember what you read, I highly recommend using a "Read it later" app, which allows you to save interesting links you find.

I like to browse the top stories on Reddit, HackerNews, or other news sites and save interesting articles, then read them all at once later, which is much more efficient. (This only works if you actually have a routine to read the links you save). You can read social media as RSS btw.

[Omnivore](https://omnivore.app/) is an open source "read it later" app.

It allows you to save link using their iOS app or Chrome extension. You can read the article in a simplified "reader view" (which I think makes most content look much nicer) and it allows you to highlight important parts of articles in the app.

After you save an article or highlight it, you can view those highlights in the app or online.

It is super streamlined unlike a lot of the other bloated read it later apps.

It is similar to [Pocket](https://getpocket.com/en/) or [Instapaper](https://www.instapaper.com/)

It also supports a few advanced features.

They provide nice filtering based on "labels" for you to organize your links. If you like logseq you'll probably like organizing your links with tags and queries.

They provide a hosted solution, but it is [open source so you can run it yourself](https://github.com/omnivore-app/omnivore) if you want to. Logseq is also open source. You can know that you can use both of these apps for free, forever, no matter what happens to these companies. I save a lot of links, so it would be nice to just never have to migrate or get locked behind a paywall ever for basic link saving and highlighting.

They have a nice, simple GraphQL library which you can build apps on top of like the [omnivore logeseq plugin](https://github.com/omnivore-app/logseq-omnivore) or [bulk import/export tools](https://github.com/davidohlin/instapaper-to-omnivore-import)

It allows you to generate emails so you can read [newsletters in omnivore](https://omnivore.app/help/newsletters) when you get them.

It has a really nice logseq plugin

# Omnivore Plugin


This is what it looks like in your graph

![image.png](/assets/image_1662086799530_0.png)

It makes a new page in your graph called `Omnivore`

Whenever you push the yellow omnivore button, it syncs this page with your omnivore links and highlights.

It shows a nice list of links, a short excerpt, and all your highlights nested underneath.

#  Plugin Setup Guide


First sign up for an omnivore account, just visit https://omnivore.app/

Remember your omnivore username

Generate an omnivore api key here. https://omnivore.app/settings/api

![image.png](/assets/image_1662086816611_0.png)

Get the `logseq-omnivore` [plugin](https://github.com/omnivore-app/logseq-omnivore) from the marketplace

Update the plugin settings with the values you got earlier

![image.png](/assets/image_1662086831539_0.png)

Click the yellow omnivore button on your logseq toolbar.

Now all of the articles you saved and your highlights from the app and chrome extension show up in your Logseq graph on a page called Omnivore.

# Omnivore app


## Web app


The web app is clean and straightforward.

![image.png](/assets/image_1662086844009_0.png)

The chrome extension is simple and fast as well. A browser extension is essential for a web clipper tool.

It has an awesome reader view for web articles

![image.png](/assets/image_1662086866434_0.png)

## iOS app


The iOS app is simple and excellent as well. It has a nice list view of your links.

![image.png](/assets/image_1662086881256_0.png)

It lets you quickly send a link to the share screen. It then lets you quickly open the reader view in omnivore, or dismiss the pop up and return to your original app.

![image.png](/assets/image_1662086894879_0.png)

It also lets you tag your links and search by tag.

![image.png](/assets/image_1662086908493_0.png)

My new workflow is to discover content from reddit, hackernews, twitter, and blogs in inoreader, then send it to omnivore for reading and highlighting. From there, the links and highlights automatically wind up in my logseq graph and I can integrate them into my notes

![image.png](/assets/image_1662086941972_0.png)

# Conclusion


Overall I couldn't be happier to have a nice simple open source read it later app that integrates with logseq. It's awesome that it supports the reader mode and highlights as well, which I use heavily. It has been great so far for optimizing my information diet.

Go to [Omnivore](https://omnivore.app/) to get started!
