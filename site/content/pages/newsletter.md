---
tags:
- 100 newsletter subscribers
- newsletter template
title: newsletter
categories:
date: 2022-08-15
lastMod: 2022-08-15
---
# Welcome to the Newsletter of Brian Sunter 🧠

  + > A software engineer's approach to learning, productivity, coding, and health. 
I use the best tools available to be more productive and share what I learn.

  + #  [Sign up for the email newsletter here](https://www.getrevue.co/profile/bsunter/issues/weekly-newsletter-of-brian-sunter-issue-1-1220479)

    + The current page you are on is the permanent home of my newsletter

    + Here you can find information about this newsletter and how I make it

    + See here for how this newsletter is being made [100 newsletter subscribers]({{< ref "100 newsletter subscribers" >}})

    + I write the newsletter in logseq and share my work in progress so others can see my process. I write it and host it on this page, as well as send it out as an email through a mailing list service called revue

    + Go here to sign up for the email mailing list

# Public [newsletter-roadmap]({{< ref "newsletter-roadmap" >}})

  + I'm trying to keep an up to date roadmap of what I plan to write about in the future [here]({{< ref "newsletter-roadmap" >}})

  + This helps keep my writing organized and lets you weigh in on what you would like to read about in the future.

# Issues

{{query (and (not (page [newsletter template]({{< ref "newsletter template" >}}) )) (property type [newsletter]({{< ref "newsletter" >}})))}}
query-table:: true
query-properties:: [:title :revue-link :sent-date]
query-sort-by:: title
query-sort-desc:: true
