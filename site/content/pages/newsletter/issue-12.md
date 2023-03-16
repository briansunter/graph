---
tags:
- newsletter
- logseq
- logseq-openai
- AI
categories:
- newsletter
coverimage: /assets/Screenshot_2023-03-14_at_3.01.45_PM_1678842139677_0.png
date: 2023-03-15
description: Adding GPT-4 and ChatGPT to my Logseq OpenAI plugin, and looking at the best new features of GPT-4
blogtitle: GPT-4 and ChatGPT in the Logseq Plugin
title: newsletter/issue-12
lastMod: 2023-03-15
---
# GPT-4 Announcement

OpenAI just released an even new model GPT-4, which I recently integrated into my Logeq OpenAI plugin (You do need a GPT-4 private beta key to use it until it's released publicly)

I've been testing GPT-4, and the results are really impressive. It gives much more nuanced and detailed answers than earlier models.

In my tests, it's capable of more complex tasks that weren't possible before.

A notable improvement is the new GPT-4 model has a much greater "context length," which was a massive limitation of earlier models.

The "context length" controls how much text input and instructions the model can understand, as well as how much text it can generate.

Before, you were limited to around 6 pages of input and output text in total. Now, you can generate and analyze a total of 50 pages of text.

This opens up so many new possibilities, such as feeding entire research papers or legal cases in and answering questions about it, or generating a 50 page film screenplay.

Not only is the model "smarter" in general, but feeding in a ton of additional context and instructions makes it much, much more capable.

# OpenAI GPT-4 Demo

In OpenAI's examples, they show it taking a number of human standardized tests like the AP Chemistry test and Bar Exam (that lawyers need to pass to practice law)

GPT-4 passes the bar exam with a score around the top 10% of test takers; in contrast, GPT-3.5 (ChatGPT), which was released ~3 months ago, had a score in the bottom 10%.

![Screenshot 2023-03-14 at 3.01.45 PM.png](/assets/Screenshot_2023-03-14_at_3.01.45_PM_1678842139677_0.png)

Another notable feature is that GPT-4 is "multimodal", meaning it can understand images as well as text.

In one of their demos, they drew a napkin sketch of a website, and GPT-4 turned it into a working website

> Write brief HTML/JS to turn this mock-up into a colorful website, where the jokes are replaced by two real jokes

Hand drawn image he uploaded from his notebook

It's for a joke website, where it shows a joke, and you push a button to reveal the punchline.

![image.png](/assets/image_1678951021142_0.png)

GPT-4 was able to completely code this website, including the content, styling, and code to reveal the punchline when you push the button.

![image.png](/assets/image_1678951039164_0.png)

Watch the full demo here:

{{< youtube outcGtbnMuQ >}}

# GPT-4 in the Logseq OpenAI plugin

Generating plans and systems with GPT-4 and Logseq

When testing the new API, I found GPT-4 was able to certain complex tasks that ChatGPT was not able to accomplish at all. Here's one concrete example:

One of my favorite features in logseq is the repeating checkbox tasks. You can create a checkbox that repeats at specified intervals using Logseq-specific markdown syntax.

Here's an example of a task reminding you to tweet and the format in plain text.

![Screenshot 2023-03-15 at 8.55.45 PM.png](/assets/Screenshot_2023-03-15_at_8.55.45_PM_1678949821181_0.png)

When you write text in the format above, a checkbox appears in your notes. When you click the checkbox, it reappears a day later. You can specify these tasks to be at any interval: weekly, bimonthly, yearly, etc

![Screenshot 2023-03-15 at 8.57.22 PM.png](/assets/Screenshot_2023-03-15_at_8.57.22_PM_1678949891765_0.png)

With GPT-4, you can give it one example of the Logseq task syntax, along with a  command like "Create a plan for me to gain followers on Twitter using Logseq repeating tasks" and it will generate a detailed plan of what tasks you need to do and how frequently you need to do them.

![image.png](/assets/image_1678950313589_0.png)

In this example, to gain Twitter followers, the AI suggests you tweet daily, reply to others daily, check your metrics weekly, share others' content every other day, etc.

So to gain followers, you just need to execute the plan that the AI gave you, doing the task, checking the box, and doing it again when the task repeats itself at the interval the AI chose.

When I gave the same task to ChatGPT, released just 6 months ago, it couldn't do it.

I'm really fascinated by the idea of AI generating plans for humans to follow and acting as their personal assistant, and I want to explore this idea more in the future.

In another example, I asked it to write me a college-style curriculum to learn AI in a year, and it did a beautiful job. My main use case for AI is using it to self-study various subjects, and I'm really excited about the possibilities AI opens up for self-directed learners.

# ChatGPT API in the Logseq Plugin

OpenAI also recently released its ChatGPT API.

I upgraded the Logseq OpenAI plugin to support this as well.

The most notable thing about the ChatGPT API is its price. OpenAI has stated that it is 90% cheaper than other models, such as GPT-4 or GPT-3.

Before, I was spending around \$7 a month with moderate usage of GPT-3 for notetaking, but now I'm spending less than 1\$ per month using ChatGPT.

Overall, the answers are a bit better, and users of the Logseq OpenAI GPT-3 plugin can expect to spend 90% less while still receiving quality results.

# Should I use GPT-4 or ChatGPT

GPT-4 is much more expensive than ChatGPT

OpenAI bills in terms of price per 1000 "tokens", where 1000 tokens are about 750 words

These calculations will be in words to make it easier to understand

For reference, there are around 300 words per page in a paperback book

### GPT-4 Price

Input to GPT-4 costs $0.03 per 750 words

Generating text with GPT-4 costs $0.06 per 750 words

Average of $0.045 per 750 words, assuming roughly equal inputs and outputs

### ChatGPT Price

Input and generation both cost $0.002 per 750 words

### GPT-3 (old)

Input and generation both cost $0.02 per 750 words

Here's a breakdown of how much my moderate personal notetaking usage would cost per month, assuming I analyze and generate an equal amount of text.

## Total cost for my usage

According to the OpenAI dashboard, I use around 300k words per month

GPT-4 would cost me **$18 per month**

ChatGPT would cost me **$0.8 per month**

GPT-3 would cost me **$8 per month**

## Conclusion

GPT-4 is **~22x** more expensive that ChatGPT for my personal notetaking purposes

If you generate much more text than you analyze, it's potentially **29x** more expensive

If ChatGPT works for your use case, I would definitely try to make it work since it's so much less expensive.

For summarizing short text or translations, ChatGPT works really well.

For analyzing or generating long text, you may need GPT-4

For very nuanced answers or complex instructions, GPT-4 is much better than the other models
