title:: An SPA Alternative | Hacker News (highlights)
author:: [[news.ycombinator.com]]
full-title:: "An SPA Alternative | Hacker News"
category:: #articles
url:: https://news.ycombinator.com/item?id=32148253

- Highlights first synced by [[Readwise]] [[Feb 20th, 2023]]
	- For me this feels like finally jumping back to the good timeline.
	  From the user point of view, I think there are two main types of experiences on the Web:
	  a ) Interactive documents. Basically web 1.0 but today we want fancier transitions and interactions. This can be provided by htmx and should always have been developed declaratively. It should ideally be provided by the browser and htmx shouldn't need to exist. Examples of this are Gmail and most social networks and forums including this one.
	  b) Desktop apps-but-I-don't-want-to-have-to-install-them. This would be things like Google Docs, Photopea and most real-time games. To deliver this, right now we have a browser that has become almost an OS inside an OS, to the point only Google can keep up with the complexity. On top of that, we pretend apps are documents and for all the imperative code we need we use a scripting language that was not meant for that, and we need a really complex VM just to keep it more or less performant. For this use case I think at some point we should move all the way into just delivering apps, if not native apps, something like wasm, where the browser tab would just be a vm player.
		- **Tags**: #[[hackernews]]