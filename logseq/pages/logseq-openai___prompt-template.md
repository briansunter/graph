public:: true
coverimage:: /assets/prompt-template_1668636545451_0.png
description:: Thoughts on prompt templates for the Logseq OpenAI Plugin
date:: 2022-11-16
aliases:: logseq-gpt-prompt-template
blogtitle:: Logseq GPT Prompt Templates
title:: logseq-openai/prompt-template

- ![prompt-template.png](../assets/prompt-template_1668636545451_0.png)
- See the [Logseq GPT-3 OpenAI plugin here.](https://github.com/briansunter/logseq-plugin-gpt3-openai)
- GPT-3 is a powerful machine-learning tool that can generate text. You give it natural language text, called a prompt, and it predicts what text should come after it.
- The prompt can be anything from a simple question to a complex command, and it can perform many different tasks, such as translation, summarization, and basic reasoning.
- ## Prompt Engineering
	- Asking AI to perform a task with natural language is simple and convenient. However, you need to phrase the prompt in very specific ways to get useful and predictable results.
	- For example, you can ask it to translate text using a prompt like this.
	- ```
	  Translate Spanish to English:
	  Yo vivo en Granada, una ciudad pequeña que tiene monumentos muy importantes como la Alhambra.
	  ```
	- Sometimes this will work and translate the sentence into English, but since GPT-3 predicts the next phrase, it will often just continue writing Spanish instead of translating.
	- We can make the prompt more reliable by giving it more context and trying to "constrain" the possible output.
	- Adding Prefixes like `Spanish:` and `English:` increases the reliability.
	- ```
	  Translate Spanish to English.
	  Spanish: Yo vivo en Granada, una ciudad pequeña que tiene monumentos muy importantes como la Alhambra.
	  English:
	  ```
	- GPT-3 is complex and unpredictable. People are constantly finding new best practices and "tricks" to improve accuracy and reliability.
	- For example, researchers have discovered that just adding the phrase "Let’s think step by step"  before each answer increases the accuracy on benchmarks like MultiArith from 17.7% to 78.7% and GSM8K from 10.4% to 40.7%
	- ```
	  Q: On average Joe throws 25 punches per
	  minute. A fight lasts 5 rounds of 3 minutes. How
	  many punches did he throw?
	  **A: Let's think step by step.**
	  ```
- ### Zero-shot, One-shot, Few-shot
	- You can also include examples of the output you're expecting in the prompt. This often (but not always) makes the output more predictable and accurate.
	- Prompts with examples are called one/few-shot. Prompts without solved examples are called "zero-shot."
	- For example, you can include an example of an English-to-French translation. This is a "one-shot" prompt.
	- ```
	  Translate English to French:
	  English: sea otter
	  French: loutre de mer
	  English: cheese
	  French:
	  ```
- ## GPT-3 Prompt Templates
	- GPT-3 needs to be prompted in very specific ways, and these often have to be discovered by trial and error. How can we share best practices and make GPT-3 easier to use? Prompt Templates
	- The existing Logseq template feature allows you to add text snippets to the / command.
	- You can define a template anywhere in logseq by adding the property `template:: template_name` underneath a heading.
	- Now you can insert the template text using the template name.
	- I want to make something similar for the GPT-3 plugin.
	- ![prompt-template.png](../assets/prompt-template_1668636545451_0.png)
	- If I wanted to translate from English to French, I could use a "prompt template" known to produce good output, and inject my phrase into it. The input variables are surrounded by `{{}}`
	- We can also include GPT-3 configuration options such as `temperature` and `maxTokens`.
	- ### English to French Translation Prompt Template
		- ```
		  temperature:: 0.8
		  maxTokens:: 60
		  Translate English to French:
		  English: sea otter
		  French: loutre de mer
		  English: {{ input }}
		  French:
		  ```
	- ### Summarize Text
		- ```
		  temperature:: 0.8
		  maxTokens:: 256
		  Summarize this for a second-grade student:
		  {{ input }}
		  ```
	- ### Grammar Correction
		- ```
		  temperature:: 0
		  maxTokens:: 60
		  Correct this to standard English:
		  {{ input }}
		  ```
	- ### GPT Modes
		- ### Edit in Place
			- Edit allows you to update text in place instead of completing it and inserting it in the block below.
			- ### Correct Grammar in Place
				- ```
				  temperature:: 0
				  maxTokens:: 60
				  mode:: edit
				  Correct this to standard English:
				  ```
		- ### Insert
			- The new [insert](https://beta.openai.com/docs/guides/completion/inserting-text) [capability](https://beta.openai.com/docs/guides/code/inserting-code) adds the contextually relevant text in the middle of existing content.
			- Allows you to specify where the text should be injected by writing `[[insert]]` in the prompt.
	- ### Additional GPT-3 Configuration Options
		- The templates will allow you to specify options on a per-template basis
		- #### Model
			- Allow users to specify the AI model to be used, such as `text-davinci-003` or `code-danci-002` for code tasks.
		- ### Stop sequences
			- The phrase that causes GPT-3 to stop generating more text
		- ### Frequency/Presence Penalty
			- Settings to prevent repetition in the generated text
		- ### Top-P
			- It affects randomness and variance, similar to temperature
- ## Future work
	- ### Modal Popup
		- I'm also planning on adding a feature where instead of writing the prompt in your notes, there will be a popup where you write the prompt and review the output before inserting it into your notes.
		- This feature is being developed in parallel with the template feature.
	- ### Chaining
		- You can accomplish much more by chaining the output from one prompt into the input of another prompt.
		- It would also be interesting to enrich the prompt source with calls to the internet.
	- ### Text Transformation
		- I'd also like to include some options to process the input or output with code or regex.
		- For example, you could split the output into multiple lines in logseq or extract highlighted terms from the input.