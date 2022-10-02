---
title: AI Powered Notetaking with the GPT-3 Logseq plugin
date: 2022-06-04
url: /blog/gtp3-openai-logseq-notetaking
socialimage: /assets/image_1661149276371_0.png
categories:
- programming
- logseq
tags:
- ai
- programming
- gpt3
- notetaking
- logseq
description: I've started using GPT-3 to create text summaries, outlines and perform many other AI-powered tasks directly within the Logseq notetaking app using a new plugin I developed.
lastMod: 2022-08-21
---
![image.png](/assets/image_1661149276371_0.png)

### [Link to the `logseq-plugin-gpt3-openai` project on GitHub](https://github.com/briansunter/logseq-plugin-gpt3-openai)

## What is Logseq and GPT-3?

[Logseq](https://logseq.com/) is an open-source bullet point notetaking app. I recently wrote an AI text generation plugin for it powered by the [OpenAI company](https://openai.com/)'s GPT-3 API.
GPT-3 is a machine learning model that can generate human-like text from a given prompt. You type a command as you would to a human and run the Logseq  `gpt3` command, and it then inserts a response underneath.

Let's use the plugin to ask `What is OpenAI GPT3?`.

## How to get started

Here are the steps on how to get started with the plugin.

Even if you aren't interested in all the features of Logseq, it is an excellent playground for GPT-3 since it saves the responses to a local file where it won't be lost.

[Download Logseq (pick Assets -> logseq-.dmg for mac)](https://github.com/logseq/logseq/releases)

[Sign up for API key on OpenAI](https://openai.com/api/)

Search the Logseq plugin marketplace for `openai`

Install the plugin and add your API key to the plugin settings page.

Write a gpt-3 command in a block and type `/gpt3` or right click on the block menu and select `gpt-3`

Visit the [OpenAI Examples Page](https://beta.openai.com/examples/) to understand what types of questions you can ask.

## Text Summarization

The original motivation for the project was text summarization. After reading an article, I wanted to turn the paper into a summary to look back on for my notes. GPT-3 does an incredible job of turning long text into a few-sentence summary. Keeping these short summaries in my notes helps me remember what I read. GPT-3 often does a better job summarizing text than I could do by hand.

## Text Generation

The most impressive feature of GPT-3 is the text generation. You can ask it to write many different kinds of things, and sometimes its answers are a bit off or unpredictable, but it's usually a good starting point for you to edit down yourself. It generates a surprisingly good workout routine.

## Code Explanation

GPT-3 can do a decent job of explaining code in human-readable English. It's a hit or miss, and sometimes it's overly robotic, but occasionally it writes an excellent explanation and shows an impressively high-level understanding of the algorithm. The plugin uses the same technology as [Github Copilot](https://copilot.github.com/). In addition to explaining code, it can write code to do a given task or translate code into different programming languages.

### Max Profit Leetcode Question Explanation

### Bubble Sort Algorithm Explanation

## Create tables of data

You can ask it to create tables of data from scratch. If you want to watch the top-rated IMDb movies of all time, you can request the AI to make you a table with the movie title, rating, and IMDb link.

## Create Study Plan

If you want to learn a new topic, the AI can create a study plan for you to get an overview of the field.

## Conclusion

I've found the gpt-3 plugin extremely useful for text summarization. If you give it a text block, it can reliably create a beautiful summary.

I also use it to brainstorm new ideas and first rough drafts, and it helps me get rid of writer's block when writing something new.

The text-generation features are fun to play with but must be supervised, edited, and re-asked. If you generate text from scratch, you need to oversee it, and occasionally it creates something plausible-sounding but is a bit off. I believe in the future, more and more of the content we'll see will be written by AI and edited to a lesser extent by humans.

Overall, I enjoy incorporating GPT-3 into my notetaking workflow and keep finding new uses for it. I plan to release more updates to my plugin, and look forward to gpt-3 improving over time. If you found this plugin useful, I would love to hear from you!

[Link to the `logseq-plugin-gpt3-openai` project on GitHub](https://github.com/briansunter/logseq-plugin-gpt3-openai)
