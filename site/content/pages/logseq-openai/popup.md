---
tags:
- gpt3
- logseq-openai
- ai
- productivity
categories:
- programming
coverimage: /assets/summarize_1674095683669_0.gif
date: 2023-01-31
description: I updated the Logseq GPT-3 OpenAI plugin to have a popup UI and support user-defined commands.
blogtitle: Logseq GPT-3 OpenAI Popup
title: logseq-openai/popup
lastMod: 2023-09-27
---
I updated the [Logseq OpenAI plugin](https://github.com/briansunter/logseq-plugin-gpt3-openai) to include a popup window to perform AI tasks powered by OpenAI's GPT-3 in Logseq.

There are three modes: **custom commands**, **built-in commands**, and **user-defined commands**.

There's also a way for the community to contribute useful commands to the plugin for everyone to use.

# Background

[OpenAI's GPT-3](https://openai.com/api/) is an AI tool that allows you to analyze and generate text. It can perform many tasks, such as answering questions about a topic, writing blog posts, summarizing text, and more.

I've found various interesting use cases in my notetaking workflow, and it's been a useful "swiss army knife" for notetaking and text manipulation.

The original version of this plugin was pretty basic. In the previous version, you would write a GPT-3 "prompt" inside a text block along with the input text, generating a response and inserting it underneath your text. I hope this new popup is easier to use and more convenient.

There have been a few "AI writer" integrations in existing tools like Notion and many startups built around OpenAI GPT-3.

These tools are nice and have good user interfaces but have some limitations for personal notetaking use cases and for power users. I wanted something that was pay-as-you-go instead of subscription-based, allowed a lot of customizability, and allowed users to share prompts with each other.

The plugin is free and open source but uses OpenAI's API, which does charge per API request; however, using their API directly with your key is much cheaper than any commercial option.

# Getting started

Go to the logseq plugin marketplace and search for "openai" or update the plugin to get the latest version.

![Screenshot 2023-01-31 at 1.47.24 PM.png](/assets/Screenshot_2023-01-31_at_1.47.24_PM_1675208862852_0.png)

Sign up for an [OpenAI API key](https://platform.openai.com/account/api-keys) if you don't already have one, and add it in the plugin settings.

Press `CMD+g` to open the GPT-3 popup.

If you have your cursor inside a block, the popup will use the text in the block as input to the command.

If the block is empty, it will run the command without input.

For now, the input text from the block is appended after the command prompt you type in the popup.

If you are on a page and don't have a block selected, the plugin will append the result in a block at the bottom of the page and won't use any text as input.

# Custom commands

You can open the popup and type in any task you want to perform.

For example, if you have a block of text and want to generate question-and-answer flashcards to help you remember important points, you could type

> create flash cards based on the following text:

![custom-prompt autoplay](/assets/custom-prompt_1674094160276_0_1675213615966_0.mp4)

If you're in an empty block, you can ask it to perform a task without input.

> What topics should I study to understand deep learning?

![custom autoplay](/assets/2023-01-18_16.22.13_1674095036177_0_1675214083513_0.mp4)

## Built-in commands

There are many built-in commands for common use cases

![built in commands autoplay](/assets/built-in-prompt-templates_1674096790451_0_1675214113992_0.mp4)

Some of the built-in prompts include:

Summarize Text

Fix Grammar

Create Outline

Extract Keywords

Write introduction

Find Keywords

Ask Questions

Find common objections to an idea

Most important ideas

Define word

Find synonyms

Find antonyms

Create markdown table from text

Translate to other languages

Here are some demos of the built-in commands:

### Summarize text

![summarize.gif](/assets/summarize_1674095683669_0.gif)

### Create outline of text

![outline autoplay](/assets/outline2_1674095716959_0_1675214186883_0.mp4)

### Most important ideas in a text

![important-ideas autoplay](/assets/important-ideas_1674095953444_0_1675214231308_0.mp4)

### Common objections to an idea

![common-objections autoplay](/assets/common-objections_1674095797741_0_1675214273662_0.mp4)

## User-Defined commands

You can define your own commands to show up in the popup.

These are defined similarly as [Logseq templates.](https://docs.logseq.com/#/page/templates)

### How to create a user-defined command

Create a block with a property `prompt-template:: Template Name`

Indent a block underneath the prompt template block that contains a code block of type `prompt` (triple backticks followed by the word `prompt`)

These can be written anywhere in your notes and they'll be detected in the popup (like logseq templates)

### Language flash cards

Here's an example of making language learning flashcards from a YouTube transcript.

![FmccSaQakAM6JF_.jpeg](/assets/FmccSaQakAM6JF_1675294552245_0.jpeg)

![chinese flashcards autoplay](/assets/2023-01-13_14.20.49_1675294883999_0.mp4)

### Student teacher dialog example

This is an example of defining a custom prompt to rewrite a piece of text as a dialog between a student and teacher.

![Screenshot 2023-01-31 at 1.55.21 PM.png](/assets/Screenshot_2023-01-31_at_1.55.21_PM_1675209353980_0.png)

{{< logseq/orgSRC >}}- # Student Teacher Dialog
  prompt-template:: Student Teacher Dialog
  -  ```prompt
     Rewrite the following text as a dialog between a teacher and a student:
     ```
{{< / logseq/orgSRC >}}

![user-prompt autoplay](/assets/user-prompt_1675204065803_0.mp4)

## Preview

After you hit enter to run a command, the popup will show you a preview of the result from GPT-3, so you can decide if you want to insert the result into your notes

![Screenshot 2023-01-20 at 10.54.06 AM.png](/assets/Screenshot_2023-01-20_at_10.54.06_AM_1675203364365_0.png)

## Insert and Replace

After you run the command, you can either insert the GPT-3 result underneath the current block or replace the current block with the GPT-3 result.

The replace feature is helpful when using the plugin to improve the tone of existing writing, fix grammar/spelling, and translate text into different languages.

### Replace example

![replace translate autoplay](/assets/video_1675205191234_0.mp4)

## Regenerate

Sometimes the first try doesn't generate optimal results, so you can click "Regenerate" to re-run the prompt until you get something good.

![regenerate outline autoplay](/assets/video_1675205447669_0.mp4)

## Share Prompts

Do you have a prompt that the community would find useful? Contribute it to the [built-in prompts list](https://github.com/briansunter/logseq-plugin-gpt3-openai/blob/master/src/prompts/prompts.toml).

There's a TOML text file in the repo where you can easily add new prompts.

Go [here](https://github.com/briansunter/logseq-plugin-gpt3-openai/blob/master/src/prompts/prompts.toml) to see the prompt file in the repo

![prompt template-repo](/assets/prompt-template-repo_1675205592451_0.png)

## Future work

I have several enhancements in mind to add to the plugin.

The next features I'm planning are to add better support for sending multiple blocks as the command input.

I also want to add features that let you transform the input and output—for example, removing markdown from the input text and splitting the output text into multiple blocks.

Eventually, I'd like to support sourcing blocks throughout your notes using embeddings, so you can leverage the knowledge in your notes in the commands.

I have a [Github Project](https://github.com/users/briansunter/projects/1/views/1) and [list of issues](https://github.com/briansunter/logseq-plugin-gpt3-openai/issues) to track ideas for features. Feel free to open an issue or contribute if you have an idea or find a bug!

![Screenshot 2023-01-31 at 1.17.09 PM.png](/assets/Screenshot_2023-01-31_at_1.17.09_PM_1675207870462_0.png)
