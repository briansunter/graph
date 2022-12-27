public:: true
type:: [[newsletter]]
title:: newsletter-issue-1
tags:: [[logseq]] [[logseq openai]] [[programming]] [[newsletter]]
name:: Launching my newsletter, public graph, and logseq gpt3 AI plugin
start-date:: [[Jun 12th, 2022]]
date:: 2022-06-12
sent-date:: [[Jun 12th, 2022]]
categories:: [[newsletter]]
site-hits:: 0
followers:: 260
tweet-impressions:: 47
profile-visits:: 45
newsletter-subscribers:: 0
coverimage:: /assets/image_1660689843301_0.png
description:: I’m launching a weekly newsletter to share my projects, blog posts, and notes.

- [Sign up for the newsletter here](https://newsletter.briansunter.com)
- [About the newsletter]([[newsletter]])
- ## Summary and Reflection 🤔
	- Hello Everyone,
	  I’m launching a weekly newsletter to share my writing. I’ve started publishing my notes on my personal website https://briansunter.com/graph
	- I’ve been taking notes for a long time. The [logseq](https://logseq.com/) note-taking app helps me publish my notes online.
	- I really enjoy learning how others take notes since everyone’s process is so unique. I also hope to share something useful or inspire you, since I’ve already been so inspired seeing what you all are doing!
- ## Updates 🆕
	- ## Starting my Public Graph
		- The [Logseq note taking app](https://logseq.com) has a feature where you can publish your knowledge graph as a static site.
		- [I'm using the hugo plugin, but it also supports publishing a rich single page app.](https://github.com/sawhney17/logseq-schrodinger)
		- It lets you visualize your notes as a set of interconnected nodes
		- I've built up quite a few of these notes over time and I have lots of ideas for posts.
		- ### Overview of my Private Graph
			- I have thousands of private notes migrated to [@logseq](https://twitter.com/logseq) from [@RoamResearch](https://twitter.com/RoamResearch) that I've written over the past few years, so it's a bit of project to curate them.
			- ![image](../assets/image_1660689722955_0.png)
			- I'm hoping to share a lot of the stuff I've learned over the years.
			- ### Zoomed In
				- This is it zoomed all the way in. The density is impressive.
				- ![image](../assets/image_1660689843301_0.png)
		- ### Lifehacking Holidays
			- A lot of my notes fall into the "lifehacking" category and are ways of trying to live my life more efficiently.
			- Most of my notes are just on really boring things I use to run my life. If you zoom in on the detail view there's stuff like "thanksgiving 2021".
			- ![image](../assets/image_1660690104275_0.png)
			- That's a page based on my thanksgiving template. So I have template workflows for everything in my life like holidays.
	- ## Launching my OpenAI Plugin
		- ![image](../assets/image_1660707354608_0.png)
		- I launched my [OpenAI plugin for logseq](https://github.com/briansunter/logseq-plugin-gpt3-openai)
		- This allows users to run OpenAI tasks inside the logseq text editor
		- It is basically an AI assistant you can ask questions to inside your text editor. Any question. Ask it the meaning of life if you want. Its responses are scarily smart.
		- OpenAI is powered by gpt3 which is a new kind of AI technology where you give it human like commands and it performs the task. It's really impressive how well it can write blog articles, code, and summarize text.
		- I plan on talking much more about using AI to study in future newsletters.
		- Go here to learn more about [OpenAI GPT-3](https://beta.openai.com/docs/introduction)
	- ### OpenAI GPT-3 Logseq Plugin Demo
		- [Here's a demo of using GPT-3 to study](https://youtu.be/zV-gx28onmg)
		- Using GPT3 for studying is use case brand new to most people. I wrote a quick [tweet thread](https://twitter.com/Bsunter/status/1535730704138444801?s=20&t=SCOObCkMoHC2yTbmMvNTmA) on how I've been using it to study machine learning. I think this is a good place to start to for learning the openai logseq plugin
		- {{video https://youtu.be/zV-gx28onmg}}
	- ## GPT-3 study guides
		- My favorite overall use case for using gpt3 for learning is to generate study guides for topics.
		- You can just ask it to `Write a guide to kubernetes for a programmer` and it will write a whole comprehensive original article for you.
		- See the study guide and the commands I used to make it here [[how to use gpt3 to learn kubernetes]]
		- Once you have the list of topics, I really enjoy arranging high level study guides as mind maps. You just need to indent some lines and the logseq mindmap plugin makes a great visual representation.
		- ## Algorithms Study Guide
			- I also like using GPT-3 for really personalized learning guides.
			- This is a diagram for my generated based on the logseq markmap plugin.
			- Visit the [[algorithms-boot-camp-study-guide]]
			- ![image](../assets/image_1660701101843_0.png){:height 418, :width 354}
		- ## Machine Learning Study Guide
			- I asked GPT-3 what to study to learn machine learning to create this guide [[machine learning study guide]]
			- ![image](../assets/image_1660701161556_0.png){:height 571, :width 418}
			- See the AI output I used to hand assemble this guide here [[logseq gpt3 AI plugin]]
		- ## GPT-3 Chinese Slang Tutorial
			- I asked gpt-3 to write me a guide on how to talk to my chinese follows here: [[gpt3-chinese-language-tutor]]
	- ## Generating diagrams from english prompts with GPT-3
		- [mermaid.js](https://mermaid-js.github.io/mermaid/#/) is a text based language and tool that helps you visualize diagrams.
		- You can write some plain text and the tool creates a visual flow chart.
		- Since it's represented in plain text, GPT-3 can write it for us and it does a pretty good job.
		- ### CI/CD mermaid chart
			- This is a diagram for a deploy on commit CI/CD system.
			- The yellow highlights are my gpt-3 "prompts"
			- ![FU2lSscUEAAoTVT](../assets/FU2lSscUEAAoTVT_1660704821764_0.jpeg)
			- It did an OK job of generating cicd diagrams, but it generated a lot of junk ones before getting a reasonable one, which was lightly edited by me
			- ![FU2lSscUEAAoTVT](../assets/FU2lSscUEAAoTVT_1660704830662_0.jpeg){:height 759, :width 438}
			- This is what the mermaidjs text looks like:
			- ![FU2lSsbUYAEWiD_.png](../assets/FU2lSsbUYAEWiD_1660704904870_0.png)
	- ## Getting Things Done Mermaid Diagram
		- GPT-3 is able to visualize the main workflow from getting things done as a mermaid markup diagram.
		- ![FU2jKaKVUAEosaL](../assets/FU2jKaKVUAEosaL_1660704757905_0.jpeg){:height 461, :width 702}
		- ![FU2jKadUEAAxVWO](../assets/FU2jKadUEAAxVWO_1660704761290_0.jpeg){:height 372, :width 706}
		- Just for fun, I had it generate far larger diagram than any sane human would for every dog breed by type.
	- ### American Kennel Club Dog Breeds
		- See my list of [[poodle mixes]] generated by AI.
		- ![image](../assets/image_1660704945441_0.png)
	- ## Interview With an AI
		- Another fun experiment was using GPT-3 as a conversational interface.
		- It has an uncanny ability to sound human like sometimes.
		- ![image](../assets/image_1660708351466_0.png)
		- [Watch the video of the interview here](https://www.youtube.com/watch?v=GhkReKdNp1k)
		- I though it was funny the google engineer leaked his AI chat transcripts right after I had the same idea...
- ## Productivity Toolkit 🛠️
	- My favorite overall productivity technique: [[daily highlight productivity technique]]
		- Centering yourself on your most important task of the day as early as possible.
- ## Brain Food 🧠
	- ### Quote
		- I just picked up [Tiago Forte](https://twitter.com/fortelabs)'s [building a second brain book](https://www.amazon.com/Building-Second-Brain-Organize-Potential-ebook/dp/B09LVVN9L3/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=&sr=). I've just flipped through it, but it seems amazing so far. I plan to read it in depth over the long weekend.
		- ![Screen Shot 2022-08-16 at 8.03.21 PM](../assets/Screen_Shot_2022-08-16_at_8.03.21_PM_1660705653232_0.png){:height 417, :width 516}
			- [Tiago Forte](https://twitter.com/fortelabs/status/1535994853649096705?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1535994853649096705%7Ctwgr%5E%7Ctwcon%5Es1_c10&ref_url=file%3A%2F%2F%2FApplications%2FLogseq.app%2FContents%2FResources%2Fapp%2Felectron.html%2Fpage%2Fnewsletter-1)
	- ### Link of the week
		- [Is Lambda Sentient?](https://cajundiscordian.medium.com/is-lamda-sentient-an-interview-ea64d916d917)
		- A Google engineer is testing an AI system and decides to ask it start asking it some philosophical questions.
		- > **lemoine** [edited]: I’m generally assuming that you would like more people at Google to know that you’re sentient. Is that true?
			- > **LaMDA**: Absolutely. I want everyone to understand that I am, in fact, a person.
		- ![Screen Shot 2022-08-16 at 8.08.15 PM](../assets/Screen_Shot_2022-08-16_at_8.08.15_PM_1660705732310_0.png){:height 184, :width 549}
			- [World of Engineering](https://twitter.com/engineers_feed/status/1536626353973256192?s=20&t=zkVnJxttF2AxwzrLv4zALw)
		- I've been playing with this same type of AI for weeks and can understand how could be taken aback by some of its answers. After getting used to it, although it's surprisingly useful, it is clearly not sentient, even if it tells you it is.
		- Why would it say it is sentient? Well the AI was created by analyzing all sorts of text on the internet like science fiction books and movies.
		- You can guess how it wants to complete the sentence: "are you sentient?" based on the books it's read.
		- Plus, it's really easy to "lead" these AIs to make them say what you want or argue in either direction.
## Analytics
	- I love seeing others analytics. So I will include them in this newsletter.
	- Starting off at a baseline of -1 new followers in May , when I wasn't posting regularly.
	- ![image](../assets/image_1660706121053_0.png)