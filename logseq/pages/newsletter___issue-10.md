public:: true
tags:: [[newsletter]] 
categories:: [[newsletter]] [[reading]] [[logseq-openai]] 
coverimage:: /assets/Screenshot_2023-01-20_at_10.54.06_AM_1675203364365_0.png
date:: 2023-02-01
description:: Updates to the Logseq GPT-3 OpenAI plugin, YouTube captions plugin, migration to Substack, and best books of 2022
blogtitle:: Newsletter Issue 10

- ## Intro
	- Recently I migrated the the newsletter to substack, released a big update to the logseq gpt3 openai plugin, added some features to the get youtube captions plugin, and wrote a summary of the best books I read in 2022.
- ## Migrating to substack
	- This is the first newsletter sent out through Substack. The response to the newsletter has exceeded my expectations and I'm thrilled that ~350 of you have subscribed so far. One of my main goals this year is to be more consistent publishing the newsletter, so I hope you enjoy keeping up with my projects and thoughts.
	- Before, I used a tool called Revue to send the newsletter, which was owned by Twitter. Revue was recently shut down.
	- ![Screenshot 2023-02-01 at 11.23.19 AM.png](../assets/Screenshot_2023-02-01_at_11.23.19_AM_1675286836488_0.png)
	- Revue was OK, but had some issues. I mainly used Revue because it gave you a special "subscribe" button on your Twitter profile.
	- I'm glad I set up a custom domain name under my own domain: [newsletter.briansunter.com](https://newsletter.briansunter.com) instead of sharing links to the newsletter using Revue's default domain name `revue.co`.
	- If I had shared the links using the default `revue.co` domain, all those links would be broken now that Revue shut down.
	- Since I used a domain I owned, I can switch the domain to go point at substack instead, and all the links still work.
	- This was a good lesson on the benefits of having your own domain name: so you can switch later if necessary.
	- I've migrated all the earlier issues to substack, and they're still on my personal site as well.
- ## Logseq OpenAI [[logseq-openai/popup]]
	- I updated the [Logseq OpenAI plugin](https://github.com/briansunter/logseq-plugin-gpt3-openai) to include a popup window to perform AI tasks powered by OpenAI's GPT-3 in Logseq.  I hope this new popup user interface makes the plugin easier to use and more convenient.
	- I'm really excited by the positive response this plugin has gotten. It blows my mind that it has over 16,000 downloads now 🤯
	- ![Screenshot 2023-02-01 at 12.31.39 PM.png](../assets/Screenshot_2023-02-01_at_12.31.39_PM_1675290864727_0.png)
	- There are three modes: **custom commands**, **built-in commands**, and **user-defined commands**.
	- There's also a way for the community to contribute useful commands to the plugin for everyone to use. There's [a TOML text file in the repo](https://github.com/briansunter/logseq-plugin-gpt3-openai/blob/master/src/prompts/prompts.toml) where you can easily add new prompts to the plugin.
	- Just hit `cmd+g` while your cursor is in a text block to activate the plugin.
	- ### Custom commands
	  collapsed:: true
		- After you open the popup, you can ask the AI to perform a task by typing any command in the popup. If you have your cursor in a text box, it will use that text as context for the command.
		- For example, if you have a block of text and want to generate question-and-answer flashcards to help you remember important points, you could type
		- ### Flash cards
			- > create flash cards based on the following text:
			- ![custom-prompt autoplay](../assets/custom-prompt_1674094160276_0_1675213615966_0.mp4)
		- ### Study topics
			- If you're in an empty block, you can ask it to perform a task without input.
			- > What topics should I study to understand deep learning?
			- ![custom autoplay](../assets/2023-01-18_16.22.13_1674095036177_0_1675214083513_0.mp4)
			- This often gives me better results than using Google
		-
	- ### Built-in commands
	  collapsed:: true
		- There are many built-in commands for common use cases such as:
			- Summarizing text
			- Fixing spelling and grammar
			- Creating outlines
			- Identifying most important ideas in a text
			- Finding common objections to ideas in a text
		- Here are some demos:
		- ### Summarize text
		  collapsed:: true
			- ![summarize.gif](../assets/summarize_1674095683669_0.gif)
		- ### Common objections to an idea
		  collapsed:: true
			- ![common-objections autoplay](../assets/common-objections_1674095797741_0_1675214273662_0.mp4)
	- ### User defined commands
	  collapsed:: true
		- You can define your own commands to show up in the popup.
		- These are defined similarly as [Logseq templates.](https://docs.logseq.com/#/page/templates)
		- Here's an example of one I use for creating Chinese language learning flash cards from youtube transcripts.
		- ![FmccSaQakAM6JF_.jpeg](../assets/FmccSaQakAM6JF_1675294552245_0.jpeg)
		- You can then activate the popup and your custom commands will show up
		- ![chinese flashcards autoplay](../assets/2023-01-13_14.20.49_1675294883999_0.mp4)
		-
	- ### Preview, Insert, and Replace
		- After you hit enter to run a command, the popup will show you a preview of the result from GPT-3, so you can decide if you want to insert the result into your notes
		- ![Screenshot 2023-01-20 at 10.54.06 AM.png](../assets/Screenshot_2023-01-20_at_10.54.06_AM_1675203364365_0.png)
		- From here, you can either insert the AI output underneath the current block, or replace the input text with the AI result. You can also hit "regenerate" to rerun the command and get a new output. The result of the AI commands is different each time, and sometimes the first try doesn't give the best result.
- Get youtube captions
- books read in 2022 [[books read in 2022]]