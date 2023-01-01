---
title: cooklang
tags:
- cooking
- programming
description: Cooklang is like markdown for recipes. It lets you write recipes in a human-readable format that a computer can parse to get the ingredient list, steps, etc.
url: "/blog/cooklang"
date: 2022-09-21
categories:
lastMod: 2022-12-30
---
Cooklang is like markdown for recipes. It lets you write recipes in a human-readable format that a computer can parse to get the ingredient list, steps, etc.

Recipe sites have gotten so bloated that you need to read someone's entire life story to get the ingredients and steps. I'm a big fan of storing information in plain text in git, as well as [cooking](https://briansunter.com/notes/cooking/), so I was happy to discover [CookLang](https://cooklang.org/).

I don't want to write my recipes in completely unstructured text because I can't do useful things like generate shopping lists, convert units, get required cookware, etc. I also don't want to write them in a highly structured format like JSON because it would be too difficult to read and maintain.

I like cooklang because you can read it like a recipe. I also like that you can list the ingredients throughout the steps, and it automatically builds an ingredients list. You don't have to maintain a dedicated ingredients list, and it's easier to update.

## Cooklang Recipe

Below is an example of a Cooklang recipe:

``` md
>>title: Sous Vide Steak
>>description: A simple, consistent way to cook great steak
>>source: https://www.seriouseats.com/food-lab-complete-guide-to-sous-vide-steak
Preheat a sous vide cooker to the desired final temperature.

Season @steaks{450%g} generously with @salt and @pepper

Place in @sous vide bags{} along with @thyme{4%sprigs}, @rosemary{4%sprigs}, @garlic{4%cloves}, and @shallots{2%thinly sliced} and distribute evenly. 

Seal bags and place in a water bath for desired time according to charts.

Turn on your vents and open your windows. Add one tablespoon of ghee, vegetable, 
canola, or rice bran oil to a heavy #cast iron{} or stainless steel skillet 
and preheat the skillet until it reaches 450 degrees.

Gently lay steak in the skillet, using your fingers or a set of tongs. 

Add @butter{30%g} (2 tablespoons).

After 15 to ~{30%seconds}, flip steak so that the second side comes into contact with the pan.
Repeat, flipping steak every ~{30%seconds} until it has developed a nice brown sear, about ~{1.5%minutes} total.

Serve steak immediately
```

## Cooklang syntax

Although the text is human readable, this is what the special syntax means.

### Ingredients

`@ingredient{quantity%unit}`  for example  `@butter{30%g}`

You can specify simple ingredients using  `@` , for example,  `@salt`

Ingredients with spaces can use curly braces  `@ground pepper{}`

### Time

You can specify time using  `~{quantity%units}`  like  `~{30%seconds}`

### Metadata

You can add metadata using the  `>>key: value`  syntax.

`>>source: https://www.seriouseats.com/food-lab-complete-guide-to-sous-vide-steak`

### Cookware

You can specify cookware needed with  `#cookware{}`  like  `#potato masher{}`.

### Conclusion

Overall I'm delighted with cooklang. It was pretty easy to integrate with my static site and the [Obsidian](https://obsidian.md/) cooklang plugin works well. I hope to collect my favorite recipes and continue to tune them over time.

See [here for my complete list of recipes](https://briansunter.com/recipes/) categories by tag.
