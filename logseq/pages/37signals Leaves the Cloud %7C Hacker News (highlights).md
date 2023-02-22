title:: 37signals Leaves the Cloud | Hacker News (highlights)
author:: [[news.ycombinator.com]]
full-title:: "37signals Leaves the Cloud | Hacker News"
category:: #articles
url:: https://news.ycombinator.com/item?id=33260061

- Highlights first synced by [[Readwise]] [[Feb 20th, 2023]]
	- So their AWS bill is $500k/year.
	  Hire one person to buy, configure, manage hardware is what? $250k/year? And is this self-hosting more reliable than AWS? For an email service, you'd think that you want the most reliable host.
	  Weird.
	- A company which has a total AWS bill of $500k/yr is a very small one (the article says 500K is just the RDS/ES bill, so total is surely much higher for them).
	  Our (tiny startup) AWS bill is ~200K/yr and the amount of compute and storage we do could very easily be handled by one single physical server.
	- Yeah... I don't agree at all with their conclusions about running your own stuff "not that complicated".
	  Sure, it is not "that complicated" for basic stuff, simple sites, hobby projects or overall quick'n dirty solutions because you're under a budget, as with everything.
	  Doing infrastructure properly, with SLAs and a very high level of availability and redundancy (both in systems, and in people with the know-how) is incredibly complicated in my opinion.
	  I bet what they're going to save on the the Cloud provider is going to be spent (and probably even more) in salaries, if they keep the same levels of service.
	  Specially true considering they pay pretty good salaries.