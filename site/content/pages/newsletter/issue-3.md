---
followers: 529
aliases: "/pages/newsletter/issue/3"
sent-date:
- Jun 26th, 2022
tags:
- logseq
- newsletter
blogtitle: Newsletter Issue 3
categories:
- newsletter
newsletter-subscribers: 61
name: Newsletter 3
title: newsletter/issue-3
type:
- newsletter
date: 2022-06-26
coverimage: /assets/get-youtube-captions_1672134947975_0.jpg
start-date:
- Jun 23rd, 2022
description: This week, I wrote a few guides. I released a new plugin to download captions from YouTube directly into your notes to help you study videos. I also include some productivity tips and fun artwork created by OpenAI’s DALL-E image generation technology.
lastMod: 2023-01-06
---
![get-youtube-captions.jpg](/assets/get-youtube-captions_1672134947975_0.jpg)

# Summary and Reflection 🤔

This week I wrote a few [guides](https://briansunter.com/graph/). I released a [new plugin](https://github.com/briansunter/logseq-get-youtube-captions) to download captions from YouTube directly into your notes to help you study videos. I also include some productivity tips and fun artwork created by OpenAI’s DALL-E image generation technology.

# Updates 🆕

## [[get-youtube-subtitles]]

My [get-youtube-captions plugin](https://github.com/briansunter/logseq-get-youtube-captions) launched in the Logseq marketplace. This tool can pull the captions from a YouTube video into your notes. Just search for “get-youtube-captions” in the Logseq marketplace to install it.

There is a lot of good content on YouTube, but I need help remembering. This plugin helps you study videos and works well for podcasts on YouTube.

The plugin inserts all spoken words from the video as text directly underneath the video link in your notes.

{{< tweet user="Bsunter" id="1537107686973616128" >}}

Feeding the captions text into my [[logseq openai]] plugin works incredibly well to summarize the video and clean up the wording of the captions. I use it to get a video summary before watching it too.

{{< tweet user="Bsunter" id="1537115206412664833" >}}

{{< tweet user="Bsunter" id="1537117777038757889" >}}

## [omnivore-logseq-guide]({{< sref "/pages/omnivore-logseq-guide" >}})

If you read a lot of content online, you need a “read it later app” to save interesting links, then read and highlight everything all at once. Keeping the article for later is much more efficient than reading a link as soon as you find it.

I recently discovered a terrific “Read it Later” app with a built-in Reader Mode and highlighter called [Omnivore](https://omnivore.app).

The [Omnivore web app and backend are open-source](https://github.com/omnivore-app/logseq-omnivore), so you know you can use it free forever, just like Logseq. Omnivore provides a free hosted option too.

This is a screenshot in the Omnivore reader view with my highlights:

{{< tweet user="Bsunter" id="1539118080944656386" >}}

The highlighter in reader mode is essential.

![image.png](/assets/image_1662086941972_0.png)

## [[logseq-social]]

Logseq social was a quick idea I had one night when setting up the about me page on my public graph.

I wanted to make it easier for users to learn about me and showcase other cool graphs on my profile. I also wanted to discover new ones through others' profiles. I want to create a modern "link ring" or "blog roll."

My thought process went like this:

I need to set up an about me page for my public graph, so people know who I am

Instead of choosing a random page name, I make a page at a known location in my graph called `[logseq-social/profile]({{< sref "/pages/logseq-social/profile" >}})`

Instead of just writing plain text, I use logseq properties to add a little bit of structure. This means I add properties like

```
logseq-social/name:: bsunter 
logseq-social/public-graph:: https://briansunter.com/graph
```

This allows me to have a nice about me profile page and display a list of interesting graphs for others to explore. It also helps my graph get discovered by making my profile easily shareable by others on their profiles.

In the future, it would be cool to search others' graphs and have a plugin to make the social features easier. Lots of interesting features could be built on this simple idea.

I'm excited by the people who set this up already!
{{< tweet user="Bsunter" id="1539677453076922368" >}}

## [logseq-getting-started]({{< sref "/pages/logseq-getting-started" >}})

Logseq is still in beta, so there aren't many "getting started" guides, especially for nontechnical users.

I [wrote a quick guide]({{< sref "/pages/logseq-getting-started" >}}) on how you can get started with logseq and share your notes online in just 30 minutes.

I go over the bare minimum to install logseq and make a public website like mine with a hosting company called Netlify. This will help anyone reading this newsletter who hasn't tried logseq yet or wants to follow along with some of my note taking.

All you need to do is download logseq from github and upload your site to Netlify. [I go over it in detail in this guide.]([logseq-getting-started]({{< sref "/pages/logseq-getting-started" >}})) I highly recommend buying your own domain to go along with it.

# Productivity Toolkit 🛠️

I highly recommend [Tiago Forte’s book Building a Second Brain](https://www.amazon.com/Building-Second-Brain-Organize-Potential-ebook/dp/B09LVVN9L3) as an introduction to the whole note-taking and “second brain” movement.

It’s notable because it’s both a productivity book and a book on personal knowledge management. It shows how you can organize your knowledge to do/produce valuable things. I read so much stuff and forget it; the stuff I read doesn’t always lead to a beneficial outcome in my life.

This book expresses a lot of my favorite ideas from my favorite books like [Getting Things Done](https://www.amazon.com/Getting-Things-Done-Stress-Free-Productivity/dp/0142000280/), [How to Take Smart Notes](https://www.amazon.com/How-Take-Smart-Notes-Nonfiction/dp/B09HSSFCPR).

He explains these abstract “workflows for your life” in a tool-agnostic way with good terminology.

The main workflow is a four-step process called [CODE](https://www.keepproductive.com/blog/how-to-build-a-second-brain) which he goes over in detail in his book.

**C**- Capture

**O**- Organize

**D**- Distill

**E**- Express

[Check out this video for an excellent summary](https://www.youtube.com/watch?v=K-ssUVyfn5g)

{{< youtube K-ssUVyfn5g >}}

# Brain Food 🧠

## Quote

When starting notetaking, the biggest question is how to organize your notes and what to turn into backlinks.

This is a quote from one of my favorite books  [How to Take Smart Notes](https://www.amazon.com/How-Take-Smart-Notes-Nonfiction/dp/B09HSSFCPR) by Dr. Sönke Ahrens

> The archivist asks which keyword is the most fitting. The writer asks under which circumstances will I want to stumble upon this note again, even if I forget it?

Are you a writer or just an archivist?

When taking notes, we should always think in the back of our minds about how we’ll use the note in the future. In particular, what situation or context will we be in where we need the note?

When making a backlink, think more about how you’ll use the note and how the new note relates to your existing notes than trying to “categorize” the note perfectly.



## Link of the week

Have you seen [DALL-E](https://openai.com/blog/dall-e/) by OpenAI? It's an AI that can create an image of anything you ask and generate a completely original picture. It's a website with a text box. You type the scene you want to see in the box, and the AI generates an image. The same company makes it as gpt3.

Only a few people have access, but it will be more widely available soon.

Soon, you will see stuff like DALL-E and GPT-3 everywhere. All entertainment content will use some level of AI generation soon.

One of the potentials for the "multiverse" is to generate tons and tons of content like this using AI.

{{< tweet user="Znegil" id="1539715979713847298" >}}

It can generate brand new original, realistic faces

{{< tweet user="Merzmensch" id="1539366833920286722" >}}

You'll be seeing this in every product soon.

{{< tweet user="IHaveFunWithAi" id="1537503259044233222" >}}

{{< tweet user="EndlessCofStars" id="1539780804192002048" >}}

Most of the use cases I've seen for DALL-e are making artwork, and it's even better at this than the photorealistic stuff.

{{< tweet user="tunafizzle" id="1538689602583764996" >}}

{{< tweet user="IHaveFunWithAi" id="1537882832697061377" >}}

{{< tweet user="FelurianFelicis" id="1539649183342546944" >}}

{{< tweet user="codexeditor" id="1539452993397211136" >}}

However, my favorite ones by far are the crazy funny creative ones

{{< tweet user="Dalle2Pics" id="1536423975605178369" >}}

{{< tweet user="Dalle2Pics" id="1539380193445519360" >}}

{{< tweet user="Dalle2Pics" id="1539137896246038530" >}}

{{< tweet user="Dalle2Pics" id="1537479108376072192" >}}

{{< tweet user="Dalle2Pics" id="1538629689685725184" >}}

{{< tweet user="Dalle2Pics" id="1539005769017958404" >}}

Learn more about DALL-E from this video.

{{< youtube SVcsDDABEkM >}}

# Analytics 📈

Really happy that the openai plugin just broke 100 stars on github!

On top of that, I've gained around 30 newsletters to a total of 60 in about two weeks. I also gained about 220 followers. It feels like pretty good progress considering I had -1 followers last month!

# Outro

I hope you enjoyed the newsletter! Next week I plan to talk more in-depth about using AI for notetaking using the latest next-generation database, AI, and NLP(Natural Language Processing) technology.

Check out the [newsletter-roadmap]({{< sref "/pages/newsletter-roadmap" >}}) to see what I have in mind for future issues. Let me know on [Twitter @bsunter](https://twitter.com)
