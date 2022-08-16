---
tags:
- blog
date: 2022-08-15
title: logseq-projects
categories:
lastMod: 2022-08-15
---
Introduction

  + Hook

    + How can we organize complex tasks that involve multiple steps over multiple days in Logseq?

    + I've been using logseq as a "life operating system", where I define what I want to work on, then execute on my tasks in priority order based on what logseq tells me to do. Logseq allows you to create powerful automations to program your life with its queries and task management features.

  + Background

    + I use projects in logseq to manage almost everything I work on. I make a project for any task that takes longer than a day.

    + I have projects across a wide range of categories like fitness, programming, cooking, etc.

    + For example, my newsletter is a project, and so is my current weighlifting routine.

  + Thesis

    + In this guide, I'll share some of my thinking around projects, what I track, and how I manage everything in Logseq, but the concepts translate to other tools.

Body

# Project Intro

  + ## What is a project?

    + Logseq has a [task management system]({{< ref "logseq-tasks" >}}) that includes a checkbox you can put anywhere in your notes. This functions like the traditional "todo list app" you're used to.

    + Sometimes, I just need to remember to do a simple task, like picking up something on the way home.

    + Other times, I'll want to work on something more ambitious, usually taking between two weeks and 3 months to finish.

    + An example of this would be "gain 100 newsletter subscribers"

    + Your project has a "goal", a long term timeline, and many different tasks that you need to do consistently.

  + ## Why projects?

    + Progress on developing your mental models starts with writing them down in detail, especially with life workflows.

    + Writing down your processes gets them out of your head, where you can look at them and improve them.

    + Writing down and reflecting on your progress forces you to be honest if you're making progress.

    + Working on multiple projects and balancing the time you work on them can be complicated. Sometimes I procrastinate on one project to avoid another.

    + Logseq helps you create a priotized "work feed" of all your active projects, so you can make sure none of them stall.

  + ## High level values and initiatives

    + Before starting tasks and take notes, I think it's worth to do some thinking about what your high level values and prioties are, and writing them down.

    + I try to attach each project to one of these high level goals.

    + I do a detailed version of this as a part of my yearly planning, by you can start with a simple list of what you currently want

    + Here are a few examples

      + lose weight

      + gain muscle

      + Getting better at programming

      + Improve Professional Network

      + Make more Friends

      + Travel More

    + You may have completely different goals than me and your values may change over time.

# My Current Project Template

  + This is the template I use to generate projects in logseq.

  + I'll explain everything in the next section.

  + ## Project Properties

```
type:: [[project]]
tags:: [[project]]
status:: [[DOING]] 
name:: 
start-date:: 
milestone-date:: 
desired-end-date:: 
metrics::
```

# Tour of my project-template

  + ## Summary

    + Each project has at least a 1 sentence summary of what it is and why it's important

    + This is useful for thinking about the project, and refreshing your memory if you return to it years later.

  + ## Status

    + Each project has a number of states

      + ### Unplanned

        + If there's no state, the project is considered unplanned or in draft.

      + ### todo

        + After I've decided the project is defined and worthwhile. I mark the status as todo

      + ### NEXT

        + NEXT means this will be the project I work on next, after I finish one of my current projects

        + This helps me prepare for upcoming projects

      + ### DOING


        + This is a project I'm currently working on

        + I work on each active project every few days

      + ### REVIEW

        + This means I've finished work on the project, and now am reflecting on the results.

        + I plan to add a more extensive project review step, but for now I just spend some time reflecting on what the outcome was, what could have been improved, what I learned, what I'll do better next time, etx.

  + ## Deadlines

    + I usually don't take deadlines too seriously, but I almost always make projects timebound.

    + I build in both a milestone checkin date half way through and a deadline

    + Usually my projects last around 3 months

    + ### Start

      + The date I started working on the project

    + ### Milestone

      + Half way between the start and end date of the project

      + I use this half way point to reflect on my progress

    + ### End

      + The intended end date of the project

      + I adjust this if needed during the half way milestone

  + ## Metrics

    + If possible, I like to attach metrics to projects.

    + If I'm doing a fitness project, I might take note of my lifting numbers and bodyweight

    + exercise

```
exercise/leg-press/weight:: 200
newsletter/subscribers:: 210
```

  + ## References

    + In this section, I capture any references or learning materials I may need

    + When I find a relevent resource, I save it in my daily notes and tag it with the project. If the reference is especially good I move it from my daily notes into this section when going through linked referenced.

  + ## Related long term goals

    + Each task is attached to a very high level long term goal

    + I plan most of these as a part of my yearly planning.

    + Example include: lose weight, get better at programming, improve social life, etc.

  + ## Desired output

    + What do I want the result of this project to be? What would I be doing afterward?

    + For example, for my weighlifting routine, I could say I want to squat 225 pounds. Or that I would feel healthier and fit into my old clothes.

  + ## Tasks

    + These are one time tasks I need to accomplish

    + I usually add a lot of these before starting the project, but I continue to add more if needed.

    + If I think of a necessary task for a project, I write it in my daily notes and tag the project, then pull it into this section later.

  + ## Habits

    + The main area of focus in my projects are on the habits.

    + Many goals are accomplished by doing the same thing day after day.

    + Logseq lets you schedule tasks that repeat daily, weekly, monthly, or whatever cadence you want.

    + Some tasks I work on every day, but some I only work on every 3 days.

    + See my [logseq-tasks]({{< ref "logseq-tasks" >}}) guide for more details

# Conclusion

  + I hope you enjoyed this guide to my logseq project template. Next week I'll walk through an example of one of my projects for the newsletter [[100-newsletter-subscribers]]

  + I'll also will write about using queries to organize projects.

  + If you're working on something beyond simple todos, I highly recommend creating a structured process and project template around it. Feel free to use mine as a starting point.

{{embed [website-outro]({{< ref "website-outro" >}})}}
