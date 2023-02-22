title:: I Am Endlessly Fascinate... (highlights)
author:: [[@hillelogram on Twitter]]
full-title:: "I Am Endlessly Fascinate..."
category:: #tweets
url:: https://twitter.com/hillelogram/status/1534301374166474752

- Highlights first synced by [[Readwise]] [[Feb 20th, 2023]]
	- I am endlessly fascinated with content tagging systems. They're ubiquitous in software and have so many nuances, but I can't find anything on how to design and implement anymore more than the barebones basics of a system.
	  
	  Some thoughts in a thread. ([View Tweet](https://twitter.com/hillelogram/status/1534301374166474752))
	- A tag is a metadata label associated with content, primarily used for querying and grouping. The tag name is also the id: two tags with the same name are the same tag.
	  
	  Tags appear everywhere: #hashtags, wikipedia categories, blog post labels, AWS infra tags... ([View Tweet](https://twitter.com/hillelogram/status/1534301375139553280))
	- Now, are `horse` and `horses` the same tag? They're different strings, but I'd be pretty miffed if I queried for `horse` and got only half the data.
	  
	  So for serious querying we need some kind of relationship between tags ([View Tweet](https://twitter.com/hillelogram/status/1534301376536367106))
	- Any additional structure, though, raises questions about both design and use. Should users be able to intentionally query a specific tag alias? There's no correct design choice here, depends on your users. AO3 went with "no."
	  
	  A harder problem: tag hierarchies, or "subtags". ([View Tweet](https://twitter.com/hillelogram/status/1534301378822164481))
	- With subtags, we can query "science" and get everything tagged "physics", "quantum physics", and "quantum computing".
	  
	  Usage questions:
	  
	  * Can things be tagged with root tags or just leaf tags?
	  * How do users search just X, not its subtags? ([View Tweet](https://twitter.com/hillelogram/status/1534301379883311105))
	- There's also implementation considerations. First, transitive queries are expensive, how do you optimize them? Second, how do you prevent cycles in the tag hierarchy, where A and B are both transitive subtags of each other? ([View Tweet](https://twitter.com/hillelogram/status/1534301381032660994))
	- It gets even more complex if tags can have multiple parents, like Wikipedia categories. "American Male Novelists" is a subtag of "American Male Writers" and "American Novelists". Now we have diamond problems, redundancy, a whole host of other edge cases. ([View Tweet](https://twitter.com/hillelogram/status/1534301382345379840))
	- Notice that the more richness in structure we add, the more ambiguous our queries become. "Every article that shares a tag with article X that's not also in article Y" is unambiguous with simple tags, less so with a tag tree, even less so with a tag directed acyclic graph ([View Tweet](https://twitter.com/hillelogram/status/1534301383448576002))
	- You also see "smart" tags, which are based on a predicate. One mobile device manager (MDM) I worked with allowed for things like "every iPad assigned to a classroom in Ferndale High School is considered to be tagged FHS".
	  
	  Advice: don't let the tag predicates refer to other tags ([View Tweet](https://twitter.com/hillelogram/status/1534301384451010562))
	- At one point we accidentally added two smart tags:
	  
	  A: "Anything tagged B"
	  B: "Anything not tagged A"
	  
	  And then the MDM crashed.
	  
	  We also saw major performance issues, where every content change forced all the smart tags to recompute, which was incredibly expensive. ([View Tweet](https://twitter.com/hillelogram/status/1534301385545629696))
	- One last type of tag structure: "key-value" tags, ie `priority: 1`. Then searching for `priority` will get you all content with a `priority` tag, while `priority: 1` gets you that specific subset. Lots of project management tooling has key-value tags, as does AWS ([View Tweet](https://twitter.com/hillelogram/status/1534301386569031682))
	- Hypothetically you could have richer queries with key-value tags, like `start-date: BEFORE 2022-03-01`, but I haven't seen that available in any systems. You either search no values or a specific enumerated set. ([View Tweet](https://twitter.com/hillelogram/status/1534301387613515776))
	- Another interesting thing about tag systems: who creates the tags, and who are they for? In most systems all users can create arbitrary tags. For distributed platforms, like the semantic web and social media, this encourages spammers to add lots of unrelated tags ([View Tweet](https://twitter.com/hillelogram/status/1534301388817289217))
	- But even good actors go heavy on the tags, because nobody's curating any of the tags and you have no idea which ones people use. I call this the Instagram Problem
	  
	  #tag #tags #tagging #label #labels #tagsystems #taxonomies #folksonomy #hashtags #taggerlyfe #taggerlifestyle ([View Tweet](https://twitter.com/hillelogram/status/1534301390020960256))
	- I should note that software engineers aren't the first people to deal with these kinds of questions, which are ubiquitous in library and information sciences. I imagine they have a lot of really good theory and case studies on tagging systems, but I haven't been able to find it ([View Tweet](https://twitter.com/hillelogram/status/1534301391044460544))