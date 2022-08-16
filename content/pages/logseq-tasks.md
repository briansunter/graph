---
tags:
- newsletter
- productivity
- logseq
title: logseq-tasks
categories:
date: 2022-08-15
lastMod: 2022-08-15
---
# Intro

  + One of my favorite features of logseq and other note-taking apps is that I can mix tasks with notes, and there are many tools to work with tasks.

  + I'll go over some of my favorite features, like recurring scheduled tasks and queries.

  + [See the logseq docs here for more information on the topic.](https://docs.logseq.com/#/page/tasks%20%26%20todos)

  + Most applications treat notes and tasks as separate entities, but that has never suited my workflow. Typically I'm taking notes in a meeting or while reading something, and I'm often writing TODOs related to those notes. Having my TODOs linked to my notes gives me a lot of additional context when I go back to work on them.

    + Having your TODOs intermingled with your notes can make finding them more difficult, but I use Logseq's querying capabilities to organize them.

    + Logseq lets you put a simple TODO checkmark in your notes and enables you to do much more.

# The checkbox

  + Logseq allows you to put simple checkboxes anywhere in your notes. Logseq stores these checkboxes as plain text behind the scenes.

    + By default, the Checkbox says NOW/LATER when you click it, but you can change this to TODO/DOING, which I do

  + This is an example check box


  + You can click the check mark to mark it as done

  + Behind the scenes, the checkbox is just a line of text in a file that looks like `- TODO `example checkbox`. I like having everything stored as plain text and not in a database or something.

  + You can hit CMD+Enter on the keyboard to turn a task into a TODO or change the TODO state.

# Task Time Tracking

  + You can track exactly how long you work on a particular task and what days you worked on the task.

  + I find this extremely useful because I often have trouble estimating and looking back on how much time things take to accomplish. Writing down my tasks helps me be honest about my time use.

  + To start time tracking, click the `TODO` text instead of the box. The checkbox will change to `DOING`, which indicates you're working on it now. Click it again when you've finished working and it will change back to `TODO`.

  + When you work on it again, click the `TODO` icon again, then again when you're done.

  + It remembers what days, times, and for how long you worked on a task each time. It shows the total time you worked on a task on the right side of the TODO block. This feature powers the "Logbook", which keeps track of the time you've worked on a task.

![Screen Shot 2022-06-24 at 7.44.12 AM.png](/assets/screen_shot_2022-06-24_at_7.44.12_am_1656081911208_0.png)

  + This "Logbook" is also stored in plain text along with your notes.

# Scheduled Tasks and Deadlines

  + The other feature I use heavily is scheduled tasks. There are also deadlines, which are similar, but I use those much less often.

  + You can attach a date to a task for when it's "scheduled" to be work on or when it's "deadline" or due date is.

  + Using this date, you can write queries to have the task show up at the right time.

  + When on a TODO block, type `/scheduled` to pull up the date picker, so you can choose a date to schedule the task.

![Screen Shot 2022-06-24 at 8.05.43 AM.png](/assets/screen_shot_2022-06-24_at_8.05.43_am_1656083171502_0.png)

  + Once again, the due date is stored as plain text.

  + The process for setting up `Deadlines` is similar

  + I'll show you how to write queries, so these show up where they're due.

# Repeating Tasks

  + Another essential feature is "repeating tasks." Many things in my life repeat every day, week, or month.

  + Logseq recurring tasks let you create tasks that will be marked done, then appear again when they're due.

  + You can customize tasks to repeat at any cadence, hourly, weekly, monthly, or yearly.

  + For example, I set my journaling task to repeat daily, and my haircut task repeat every two weeks.

  + When you bring up the `/scheduled` date picker command. It allows you to select "add repeater" , where you can pick how often you'd like the task to repeat.

![Screen Shot 2022-06-24 at 8.45.17 AM.png](/assets/screen_shot_2022-06-24_at_8.45.17_am_1656085536757_0.png)

# Querying tasks

  + Having your tasks mixed with your notes is convenient, but combining them can make manual organization difficult. However, with Logseq queries, you can easily find them.

  + ## Simple Queries

  + We can do some simple things like searching for "old todos" on journal pages over the past two weeks

    + This is convenient for quickly cleaning up written todos all over your journal pages.

  + `{query (and (todo later now) (between -2w yesterday))}`

  + You can query by tags with simple queries, and this tag query is handy for general data organization.

  + ## All todos on a certain page, with the tag, or under a block with the tag

  + `{query (and (todo later now) [[project]]}`

  + This simple query works well but is limited.

  + This query will pick up all the todos on a given page, no matter where they appear. This query is useful for seeing all the tasks for a page that are mixed in with your notes or organizing todos throughout your journal pages.

  + The query will also pick up todos on other pages, as long as they have the [[project]] tag or appear under a block tagged with [[project]]

  + It will pick up these todos

  + [[project]] test

  + But this only finds tasks where the tag appears in the task itself or the parent. Often my tasks are deeply nested and don't have a tag or parent with a tag.

  + For example, the simple query above will miss nested tasks like this

  + [[project]]

  + middle block

  + nested todo

  + You'll need advanced queries to do certain things, but you can do a ton with simple queries.

  + ## All todos from all "project pages" (todos on pages of type::project )

  + It is very convenient to have a dashboard for all tasks from all of your projects

  + For every "project" I'm working on that takes multiple days of effort I create a dedicated page with a `type:: project` and `status:: doing`

  + I put my tasks and habits related to that project on that page

  + I then query for all tasks from all my projects that are in progress.

  + `{{query (and (todo TODO DOING) (page-property type project) (page-property status doing))}}`

  + This creates a great dashboard of the tasks grouped by project.

![Screen Shot 2022-06-24 at 1.59.35 PM.png](/assets/screen_shot_2022-06-24_at_1.59.35_pm_1656104766262_0.png)

# Conclusion

  + The tools that logseq gives you to manage and query tasks are extremely powerful.

  + You can accomplish almost everything you can do in other note-taking apps using simple queries, and the advanced queries let you build practically any workflow you can imagine.

  + Mixing notes with tasks is very effective, but you need tools with good querying capabilities like Logseq to make the most of this idea.

  + Be sure to reach out on [Twitter](https://twitter.com/Bsunter) if you found this article helpful or have any extra ideas!

{{embed [website-outro]({{< ref "website-outro" >}})}}
