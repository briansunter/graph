---
type: spec
version: 0.0.1
tags:
- logseq
- social
title: logseq-social
categories:
date: 2022-08-15
lastMod: 2022-08-15
---
# Idea

  + `logseq-social` is a specification that allows logseq users to create a distributed social network from their self hosted public logseq graphs.

  + It allows of linking and discovery of different users' public graphs.

  + Users create a bio under a page called `[[logseq-social/profile]]`

  + I include a query makes a list of graphs you follow, for use in your bio, so you can help others discover cool graphs!

# Intro

  + One of my favorite features of the open source Logseq notetaking application is I can easily publish my notes as a simple index.html file and host them myself on many different types of hosting platforms.

    + It's really easy and free to set up your own personal site like this. I have a short guide below.

  + Even though I have a large graph, I can just tag a handful of notes that I want to be public by adding `public:: true` to the page.

  + I want a way to create a distributed social network with logseq, where I can discover other interesting graphs to follow.

    + Someday I want a plugin to search others public graphs.

# How to get set up #.ol

  + ##  [Start publishing your graph online according to the logseq docs](https://docs.logseq.com/#/page/publishing%20(desktop%20app%20only))

    + It's easy and free to host it on netlify, github pages, or AWS.

      + I highly reccomend using [Netlify](https://app.netlify.com/)

      + [They even have a service where you just drag the folder exported from logseq into the browser and your site is online instantly.](https://app.netlify.com/drop)

    + I highly recommend getting your own domain domain so you can migrate hosting providers later without breaking your links.

    + Dont forget to update your home page in settings -> config.edn

      + ` :default-home {:page "homepage" }`

      + I comment this out after exporting to make my local graph default to daily journal, instead of a home page.

  + ## Create a profile at `[[logseq-social/profile]]`

    + Create a profile for your bio

    + Create a page with this naming convention `[[logseq-social/profile]]`

      + For example, my profile is [[logseq-social/profile]]

    + Here is a [[logseq-social/profile-template]] for you to make your profile page

    + Refer to the properties in the [[logseq-social/spec]]

    + You also should create a block that has your follow properties in a code block so readers can easily copy it and follow you.

    + Create a block [[logseq-social/profile]] that has your `logseq-social` metadata properties in code block.

      + Refer to the properties in the [[logseq-social/spec]]

    + See my [[logseq-social/profile]] for an example.

    + The template the "followers" query to see other logseq graphs you're following. This will list all your followers.

```clojure
{{query (property type [[logseq-social/profile]])}}
```

    + [This is an example of my logseq profile]([[logseq-social/profile/bsunter]])

  + ## "Follow" other logseq users.

    + To "follow" another user, make a page in your graph for their profile, along with their `logseq-social` page-properties at the top under the page `[[logseq-social/profile/username]]`

    + By convention, graphs will put their share information at [[logseq-social/profle]] so look on that page in their graph to find their follow information.

    + After you make a page for them in your graph with the follow properties, they should show up on your followers list query.

    + When you're taking notes on content from your friends graph, you can refer to them in your notes like [[logseq-social/profile/qwxlea]]

    + Thanks to [[logseq-social/profile/qwxlea]] for being the first to set this up so I can follow them!

    + ## How to follow logseq on loseq example

      + This is a page embed for my [[logseq-social/profile/logseq]] follower page

      + I made this [[logseq-social/profile/logseq]] page with the `logseq-social` page properties and now they show up in the list of blogs I follow in my bio.

      + {{embed [[logseq-social/profile/logseq]] }}

  + ## Share your content

    + I personally tweet links to my public graph with screenshots as I work on it, along with a quick summary.

![Screen Shot 2022-06-12 at 7.53.24 PM.png](/assets/screen_shot_2022-06-12_at_7.53.24_pm_1655088807174_0.png)

# Inspiration and Rationale

  + ## [POSSE](https://indieweb.org/POSSE)

    + POSSE is an abbreviation for Publish (on your) Own Site, Syndicate Elsewhere

    + The practice of posting content on your own site first, then publishing copies or sharing links to third parties (like social media silos) with original post links to provide viewers a path to directly interacting with your content.

    + Instead of letting corporations own our content, why not host it ourself? That content is valuable and it's really easy to host your own site nowadays.

  + ## Blogroll / Link Ring

    + In the early days of the internet, before social media and search engines, bloggers used to share links to eachothers websites.

    + I think we could bring this back in the 21st century, especially now that we have better tools and it's easier and cheaper than ever to host your own site.

# Are you publishing your logseq knowledge graph?

  + [Tweet it and tag me on twitter!](https://twitter.com/Bsunter)

  + I will add you to my followers list!

# Metadata Spec

  + Use the [[logseq-social/profile-template]] to make your profile page at ``[[logeq-social/profile/yourname]]``

  + Add the [[logseq-social/spec]] to your `[[logseq-social/profile/yourname]]` page properties.

  + {{embed [[logseq-social/spec]]}}

  + Add a query to list your followers

    + `{{query (property type [[logseq-social/profile]])}}`

# My Profile

Check out my profile here [[logseq-social/profile]]
