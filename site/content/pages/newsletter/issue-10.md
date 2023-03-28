---
tags:
- newsletter
- reading
- logseq-openai
categories:
- newsletter
coverimage: /assets/Screenshot_2023-02-02_at_1.42.14_PM_1675381393942_0.png
date: 2023-02-01
description: Logseq GPT-3 OpenAI popup, YouTube captions plugin updates, and migrating to Substack
blogtitle: Newsletter Issue 10
url: /newsletter/issue-10
title: newsletter/issue-10
lastMod: 2023-03-28
---
# Intro

I migrated the newsletter to [Substack](https://newsletter.briansunter.com), released a big update to the [Logseq GPT-3 OpenAI plugin](https://github.com/briansunter/logseq-plugin-gpt3-openai), and added some features to the [Logseq YouTube captions plugin](https://github.com/briansunter/logseq-get-youtube-captions).

# Migrating to substack

This is the first newsletter sent out through [Substack](https://newsletter.briansunter.com). The response to the newsletter has exceeded my expectations, and I'm thrilled that over 300 of you have subscribed so far. One of my goals this year is to be more consistent in publishing the newsletter, so I hope you enjoy keeping up with my projects and thoughts.

Before, I used a tool called Revue to send the newsletter, which Twitter owned. Revue was recently shut down.

![Screenshot 2023-02-01 at 11.23.19 AM.png](/assets/Screenshot_2023-02-01_at_11.23.19_AM_1675286836488_0.png)

Revue was decent but had some issues. I used it because it was free, and it gave you a special "subscribe" button on your Twitter profile.

I'm glad I set up a custom domain name: [newsletter.briansunter.com](https://newsletter.briansunter.com) instead of sharing links to the newsletter using Revue's default domain name, `revue.co`.

If I had shared the links using the default `revue.co` domain, all those links would have been broken now that Revue shut down. Since I used my `briansunter.com` domain, the links I shared earlier still work and now direct to Substack.

This was a good lesson on the benefits of owning your domain name and subscribers: you can switch platforms later if necessary. I don't like my content being locked into a domain I don't control, like  [twitter.com/bsunter](https://twitter.com/bsunter), `bsunter.substack.com`, `bsunter.medium.com`, etc. There's always a chance services like these will degrade, become unfashionable, or be shut down, but I've been using [briansunter.com](https://briansunter.com) since 2010 for 13 years now.

Another benefit of the personal newsletter format is the ability to migrate your followers. If you want to move away from social networks like Twitter or YouTube, then you lose the entire audience you built there. Since I can export the newsletter's subscriber list, it was relatively straightforward to migrate you all to Substack.

I hope the combination of sharing content under my domain and the newsletter format will avoid rug pulls from corporations and help build an audience long-term.

You can read all the newsletter issues [on my site](https://briansunter.com/newsletter), on [my Substack](https://newsletter.briansunter.com), or receive updates via [RSS](https://briansunter.com/index.xml).

# Logseq GPT-3 OpenAI plugin updates

I updated the [Logseq GPT-3 OpenAI plugin](https://github.com/briansunter/logseq-plugin-gpt3-openai) to include a popup window to perform AI tasks powered by OpenAI's GPT-3 in Logseq.  I hope this new popup user interface makes the plugin easier and more convenient.

I'm excited by the positive response this plugin has gotten. It blows my mind that it has over 16,000 downloads now 🤯

![Screenshot 2023-02-01 at 12.31.39 PM.png](/assets/Screenshot_2023-02-01_at_12.31.39_PM_1675290864727_0.png)

There are three new modes: **custom commands**, **built-in commands**, and **user-defined commands**.

There's also a way for the community to contribute useful commands to the plugin for everyone to use. There's [a TOML text file in the repo](https://github.com/briansunter/logseq-plugin-gpt3-openai/blob/master/src/prompts/prompts.toml) where you can easily add new prompts to the plugin.

Just hit `cmd+g` while your cursor is in a text block to activate the plugin.

## Custom commands

After you open the popup, you can ask the AI to perform a task by typing any command in the popup. If your cursor is in a text box, it will use that text as context for the command.

### Flash cards

For example, if you have a block of text and want to generate question-and-answer flashcards to help you remember important points, you could type

> create flash cards based on the following text:

![custom-prompt autoplay](/assets/custom-prompt_1674094160276_0_1675213615966_0.mp4)

### Study topics

If your cursor is in an empty block, you can ask it to perform a task without input.

> What topics should I study to understand deep learning?

![custom autoplay](/assets/2023-01-18_16.22.13_1674095036177_0_1675214083513_0.mp4)

This often gives me better, more direct results than searching on Google

## Built-in commands

There are many built-in commands for common use cases such as:

Summarizing text

Fixing spelling and grammar

Creating outlines

Identifying most important ideas in a text

Finding common objections to ideas in a text

Here are some demos:

### Summarize text

![summarize.gif](/assets/summarize_1674095683669_0.gif)

### Common objections to an idea

![common-objections autoplay](/assets/common-objections_1674095797741_0_1675214273662_0.mp4)

## User-defined commands

You can define your own commands to show up in the popup.

These are defined similarly as [Logseq templates.](https://docs.logseq.com/#/page/templates)

Here's an example of a command I use for creating Chinese language learning flashcards from YouTube video captions.

![FmccSaQakAM6JF_.jpeg](/assets/FmccSaQakAM6JF_1675294552245_0.jpeg)

You can then activate the popup and your custom commands will show up

![chinese flashcards autoplay](/assets/2023-01-13_14.20.49_1675294883999_0.mp4)



## Preview, Insert, and Replace

After you hit enter to run a command, the popup will show you a preview of the result from GPT-3, so you can decide if you want to insert the result into your notes.

![Screenshot 2023-02-02 at 1.42.14 PM.png](/assets/Screenshot_2023-02-02_at_1.42.14_PM_1675381393942_0.png)

From here, you can either insert the AI output underneath the current block, or replace the input text with the AI result.

You can also hit "regenerate" to rerun the command and get a new output. The result of the AI commands differs each time, and sometimes the first try doesn't give the best result.

I wrote a [full blog post on the plugin here]({{< sref "/pages/logseq-openai/popup" >}}) if you want to learn more

# Logseq YouTube captions plugin updates

The  [Logseq YouTube captions plugin](https://github.com/briansunter/logseq-get-youtube-captions) lets you download the captions from a YouTube video directly into your notes.

I released a small update that breaks up the text into multiple blocks and inserts a timestamp into each block so you can jump to that point in the video.

![get youtube captions autoplay](/assets/2023-01-19_19.38.12-1080_1675382901079_0.mp4)

This plugin works really well when combined with the  [Logseq GPT-3 OpenAI plugin](https://github.com/briansunter/logseq-plugin-gpt3-openai).

For example, you can download the captions and use the GPT-3 plugin to summarize the video

Another good use case is using the GPT-3 plugin to clean up the grammar and format the captions, making them easier to read.

YouTube automatically generates captions from the voice in the video, which are often messy and don't have punctuation. The GPT-3 plugin can make the captions from these videos much nicer.

For interview style podcasts, you can use the GPT-3 plugin to add which speaker is talking in the captions.

> This is a dialog where lex interviews andrej. Rewrite the following dialog to add which speaker is talking:

![dialog.png](/assets/dialog_1675384470274_0.png)

I've also been using YouTube for language learning and studying Chinese. Understanding native content in a foreign language is extremely challenging, so before I watch the video, I often download the video captions and run some GPT-3 commands. I can get a summary of the video in English, identify important phrases, extract uncommon words, and create flashcards based on the video. Then, when I watch the video, I understand much more.

There is so much good educational content on YouTube, and taking notes on videos is one of my favorite use cases for Logseq.
