---
title: omnivore-logseq-guide
tags:
categories:
date: 2022-08-15
lastMod: 2022-08-15
---
If you want to read content online much more efficiently and remember what you read, I highly recommend using a "Read it later" app, which allows you to save interesting links you find.

I like to browse the top stories on Reddit, HackerNews, or other news sites and save interesting articles, then read them all at once later, which is much more efficient. (This only works if you actually have a routine to read the links you save). You can read social media as RSS btw.

[Omnivore](https://omnivore.app/) is an open source "read it later" app.

It allows you to save link using their iOS app or Chrome extension. You can read the article in a simplified "reader view" (which I think makes most content look much nicer) and it allows you to highlight important parts of articles in the app.

After you save an article or highlight it, you can view those highlights in the app or online.

It is super streamlined unlike a lot of the other bloated read it later apps.

It is similar to [Pocket](https://getpocket.com/en/) or [Instapaper](https://www.instapaper.com/)

It also supports a few advanced features.

  + They provide nice filtering based on "labels" for you to organize your links. If you like logseq you'll probably like organizing your links with tags and queries.

  + They provide a hosted solution, but it is [open source so you can run it yourself](https://github.com/omnivore-app/omnivore) if you want to. Logseq is also open source. You can know that you can use both of these apps for free, forever, no matter what happens to these companies. I save a lot of links, so it would be nice to just never have to migrate or get locked behind a paywall ever for basic link saving and highlighting.

  + They have a nice, simple GraphQL library which you can build apps on top of like the [omnivore logeseq plugin](https://github.com/omnivore-app/logseq-omnivore) or [bulk import/export tools](https://github.com/davidohlin/instapaper-to-omnivore-import)

  + It allows you to generate emails so you can read [newsletters in omnivore](https://omnivore.app/help/newsletters) when you get them.

  + It has a really nice logseq plugin

# Omnivore Plugin

  + This is what it looks like in your graph

![Screen Shot 2022-06-20 at 10.20.34 PM.png](/assets/screen_shot_2022-06-20_at_10.20.34_pm_1655788874894_0.png)

  + It makes a new page in your graph called `Omnivore`

  + Whenever you push the yellow omnivore button, it syncs this page with your omnivore links and highlights.

  + It shows a nice list of links, a short excerpt, and all your highlights nested underneath.

#  Plugin Setup Guide

  + First sign up for an omnivore account, just visit https://omnivore.app/

  + Remember your omnivore username

  + Generate an omnivore api key here. https://omnivore.app/settings/api

![Screen Shot 2022-06-23 at 6.23.56 PM.png](/assets/screen_shot_2022-06-23_at_6.23.56_pm_1656033918928_0.png)

  + Get the `logseq-omnivore` [plugin](https://github.com/omnivore-app/logseq-omnivore) from the marketplace

  + Update the plugin settings with the values you got earlier

![settings.gif](/assets/settings_1656034430430_0.gif)

  + Click the yellow omnivore button on your logseq toolbar.

Now all of the articles you saved and your highlights from the app and chrome extension show up in your Logseq graph on a page called Omnivore.

# Omnivore app

  + ## Web app

    + The web app is clean and straightforward.

![Screen Shot 2022-06-20 at 9.53.06 PM.png](/assets/screen_shot_2022-06-20_at_9.53.06_pm_1655787919295_0.png)

    + The chrome extension is simple and fast as well. A browser extension is essential for a web clipper tool.

![Screen Shot 2022-06-20 at 9.56.19 PM.png](/assets/screen_shot_2022-06-20_at_9.56.19_pm_1655787966057_0.png)

  + It has an awesome reader view for web articles

![Screen Shot 2022-06-20 at 9.57.52 PM.png](/assets/screen_shot_2022-06-20_at_9.57.52_pm_1655788501456_0.png)

  + ## iOS app

    + The iOS app is simple and excellent as well. It has a nice list view of your links.

![2022-06-20-22-10-54.jpeg](/assets/2022-06-20-22-10-54.jpeg)

    + It lets you quickly send a link to the share screen. It then lets you quickly open the reader view in omnivore, or dismiss the pop up and return to your original app.

![2022-06-20-22-11-04.jpeg](/assets/2022-06-20-22-11-04.jpeg)

    + It also lets you tag your links and search by tag.

![2022-06-20-22-11-42.jpeg](/assets/2022-06-20-22-11-42.jpeg)

    + My new workflow is to discover content from reddit, hackernews, twitter, and blogs in inoreader, then send it to omnivore for reading and highlighting. From there, the links and highlights automatically wind up in my logseq graph and I can integrate them into my notes

![2022-06-20-22-12-00.jpeg](/assets/2022-06-20-22-12-00.jpeg)

# Conclusion

  + Overall I couldn't be happier to have a nice simple open source read it later app that integrates with logseq. It's awesome that it supports the reader mode and highlights as well, which I use heavily. It has been great so far for optimizing my information diet.

  + Go to [Omnivore](https://omnivore.app/) to get started!

{{embed [website-outro]({{< ref "website-outro" >}})}}
