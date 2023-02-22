title:: I Am Endlessly Fascinated With Content Tagging Systems (highlights)
author:: [[Hillel]]
full-title:: "I Am Endlessly Fascinated With Content Tagging Systems"
category:: #articles
url:: https://twitter.com/hillelogram/status/1534301374166474752

- Highlights first synced by [[Readwise]] [[Feb 20th, 2023]]
	- A tag is a metadata label associated with content, primarily used for querying and grouping. The tag name is also the id: two tags with the same name are the same tag.
	  
	  Tags appear everywhere: #hashtags, wikipedia categories, blog post labels, AWS infra tags... ([View Highlight](https://read.readwise.io/read/01gfzef65fmkc4hr76cnpxj6gx))
	- The simplest relationship is tag aliases: if A is aliased to B, then querying A is identical to querying B. The only system I know that does that is the fanfiction site AO3, where teams of volunteers manually create aliases from, say, "snarry" to "Harry/Snape" ([View Highlight](https://read.readwise.io/read/01gfzefnsss7bpscdqqmq5f8tg))
	- With subtags, we can query "science" and get everything tagged "physics", "quantum physics", and "quantum computing".
	  
	  Usage questions:
	  
	  * Can things be tagged with root tags or just leaf tags?  
	  * How do users search just X, not its subtags? ([View Highlight](https://read.readwise.io/read/01gfzegwt3z0qn5q4ng7121gbg))
	- Notice that the more richness in structure we add, the more ambiguous our queries become. "Every article that shares a tag with article X that's not also in article Y" is unambiguous with simple tags, less so with a tag tree, even less so with a tag directed acyclic graph ([View Highlight](https://read.readwise.io/read/01gfzenfehdxv96tsn92qk9hjb))
	- One last type of tag structure: "key-value" tags, ie `priority: 1`. Then searching for `priority` will get you all content with a `priority` tag, while `priority: 1` gets you that specific subset. Lots of project management tooling has key-value tags, as does AWS ([View Highlight](https://read.readwise.io/read/01gfzep9adwq5a5n7qf6h38tvq))
	- Hypothetically you could have richer queries with key-value tags, like `start-date: BEFORE 2022-03-01`, but I haven't seen that available in any systems. You either search no values or a specific enumerated set. ([View Highlight](https://read.readwise.io/read/01gfzepyb1wrcjzfmj71tasx2m))