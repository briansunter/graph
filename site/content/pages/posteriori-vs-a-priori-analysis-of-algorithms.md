---
tags:
- abdul bari algorithms
- programming
- time complexity
- algorithms-boot-camp
categories:
- programming
date: 2022-08-22
blogtitle: Posteriori vs A Priori Analysis of Algorithms
description: Theoretical analysis of algorithms vs benchmarking
title: posteriori-vs-a-priori-analysis-of-algorithms
lastMod: 2023-01-03
---
## A Posteriori Analysis (Profiling)

The most straightforward method to measure the speed of an algorithm is to run and time it.

This method is called **a posteriori** and is Latin for "from the later"

An example of this would be "benchmarking" or "profiling", which is running your program and recording how long it takes to run in seconds. There are many tools to measure performance of programs.

You can also analyze how much memory a program uses, as well as many other things.

This measure is hardware dependent, since it's a real program.

A Posteriori Analysis also depends on which language the program was written in. In general, a program written in C would run faster than one written in Javascript.

## A Priori Analysis (Time Complexity)

Sometimes we also want a theoretical measure of how long an algorithm takes to run, without needing to actually run it. This method is called **A priori** and is Latin for "from the earlier".

Some algorithms can be proven to always be faster than others, no matter what hardware it runs on.

Computers keep getting faster, so it's convenient to know which algorithms will always be faster without having to retest them

An example of A Priori analysis is time complexity analysis.

For example, bubble-sort has a time complexity of $$O(n^2)$$. This is always the same, no matter what the programming language or hardware is.

## A Priori vs A Posteriori Analysis

|                                     A Posteriori analysis                                     |                                                    A priori analysis                                                    |
|--|--|
|        Hardware and language dependent|                          Independent of language and hardware.                             |
|                                  Gives exact answer                                 |Gives approximate answer|
|Uses seconds and bytes to represent how time and space requirements| Uses asymptotic notations to represent how much time the algorithm will take to complete its execution. |
|Will differ from system to system. |                  Same for every system.                  |
|Improve compiler and hardware to make program go faster|Improve logic to make algorithm run faster|
