---
tags:
- blog
date: 2022-10-04
title: intro-to-algorithms
categories:
lastMod: 2022-11-16
---
# Introduction

What is an algorithm? And why are algorithms important?

This guide will help you understand basic algorithms concepts and how to use them to solve problems.

## Background

An algorithm is a **sequence of steps to solve a problem.**

In computer science, we write code using programming languages to give the computer a set of instructions

After writing the algorithm in code, the computer can run it and solve the problem.

For example, if we wanted to sort a list of numbers, we could write an algorithm to sort the list.

A computer can quickly sort `[5,2,3,4,1]` into `[1,2,3,4,5]`

Algorithms are closely related to "data structures," which is how the computer stores data in memory.

An example of a "data structure" is an array, which can store and retrieve data in a specific order.

# Real World Algorithms

An algorithm is just a name for a series of steps.

In computer science, algorithms are written in code, but many examples of algorithms exist in the real world.

## Real World Algorithm - Recipes

![image.png](/assets/image_1662087554101_0.png)

In cooking, a recipe is a real-world example of an algorithm. It is a list of steps to follow to make a dish.

Anyone can follow the same steps and make the same dish

![image.png](/assets/image_1662087569135_0.png)

[by seuraa](https://www.behance.net/gallery/95101957/Desserts-recipes-in-infographics?locale=fi_FI)

## Real World Data Structures - Cookware

![person cooking on stainless steel cooking pot](https://images.unsplash.com/photo-1584990347955-2ec0431a6e8f?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=mnwyndywndl8mhwxfhnlyxjjahw4fhxjb29rd2fyzxxlbnwwfhx8fde2ntc5mjc5mtq&ixlib=rb-1.2.1&q=80&w=400)

In computer science, data structures store and access data that the algorithm needs to run.

These data structures arrange data in a computer's memory, so it can efficiently access the data.

Examples of data structures are arrays, linked lists, stacks, queues, and trees.

In cooking, the cookware is a real-world example of a data structure. You can use cookware to store and access the ingredients you need to make a dish. You might need a stove, a pan, and a bowl to cook your dish.

# Algorithm vs Heuristics

A heuristic is similar to an algorithm, but it may not specify what you should do exactly, or it may not guarantee correct or optimal results.

In cooking, some recipes give you an idea of what to do, leaving a lot up to the imagination.

A new cooking trend called "no-recipe recipes" is just a general list of ingredients and an explanation of steps. These recipes usually don't have exact ingredient amounts, times, or temperatures.

A "No-Recipe Recipe" is an excellent example of a heuristic. Since they don't list quantities of ingredients, the outcome will be different every time.

## No-Recipe Recipe - Cooking Heuristics

This recipe is more like a heuristic than an algorithm

### Bulgogi-Style Tofu

![image.png](/assets/image_1662087583121_0.png)

> Press some firm tofu to extract as much liquid as you can. Make a marinade of soy sauce, brown sugar, sesame oil, minced garlic, grated ginger, a spoonful of gochujang, a splash of neutral oil, some sliced scallions and toasted sesame seeds. Slice the tofu into bite-size cubes, and slide them into the marinade. Let that sit — a half-hour works; a few hours works better. Then roast them in a hot oven on an oiled foil-lined pan until they’re crisp.

# Algorithm Efficiency

Making programs run faster is a key part of computer programming.

Some methods of doing things are faster than others yet produce the same results.

## "Mise en Place" in cooking

![image.png](/assets/image_1662087595225_0.png)

By **[Michael A. Gisondi](https://icenetblog.royalcollege.ca/about/about-the-editors/) **([@MikeGisondi](https://twitter.com/MikeGisondi))

There is a concept called "mise en place" in cooking. This French phrase is the name of a technique where you prepare all your ingredients and cookware before you start cooking.

### 5 Steps of "mise en place"

Know your recipe — required ingredients, cookware, temperatures, and cook times

Prepare your ingredients — clean, debone, chop, mince

Arrange your ingredients — appropriate size bowls, positioned logically

Prepare your workstation — set the oven temperature, clean the area

Arrange your tools — prepare cookware and necessary equipment

Preparing your ingredients ahead of time doesn't require more work or change the result but makes the cooking process faster.

Similarly, in computer science, we can organize our data ahead of time, so it's easier to access while the algorithm runs.

### Algorithms "mise en place"

Know your algorithms -- use case, possible approaches, tradeoffs

Prepare your data -- understand input format, validate, convert

Arrange your data -- Use data to populate appropriate data structures

Prepare your workstation -- Set up project,repo, editor, ide

Arrange your tools -- set up additional tools like auto test runners

Similar to cooking, in computer science, there are usually different ways of doing things that take different amounts of time and may yield slightly different results.

# Algorithm Example

There are many different types of algorithms that have other uses.

One of the most common types of algorithms is "sorting" algorithms.

If we have an unsorted list of numbers like this: [5, 3, 1, 4, 2], a computer can sort the list using a sorting algorithm.

Examples of sorting algorithms include bubble sort, merge sort, and quicksort.

Bubble sort is easy for humans to understand, but it is a very inefficient algorithm. It would take much longer to sort a list of numbers using bubble sort than quicksort.

## Bubble Sort

Bubble sort works by comparing two adjacent numbers and swapping them if they are in the wrong order.

First, it compares the first two numbers in the list. If they are in the wrong order, it swaps them.

It continues to do this until the list is sorted.

The algorithm is called bubble sort because the largest number "bubbles" up to the top of the list.

## Diagram

![image.png](/assets/image_1662087609939_0.png)

[by ProductPlan](https://www.productplan.com/glossary/bubble-sort/)

## Code

{{renderer :github_vvgyk, briansunter::algorithms:src/lib/bubbleSort.ts, 662775cf3827cd22d973b2c2e23178d5552d9617, update bubble sort, true}}

```javascript
/*
 * Bubble Sort is a simple sorting algorithm
 * that works by repeatedly swapping adjacent elements if they are in wrong order.
 * This implementation is in place, but it is not efficient.
 * @param {array} The input array to be sorted.
 * @returns {array} The sorted array.
 */
function bubbleSort(input: any[]): any[] {
  // for every element in the array
  for (let i = 0; i < input.length; i++) {
    // compare the current element with the next element
    for (let j = 0; j < input.length; j++) {
      // if the current element is greater than the next element
      if (input[j] > input[j + 1]) {
        // swap the two elements
        const temp = input[j];
        input[j] = input[j + 1];
        input[j + 1] = temp;
      }
    }
  }
  return input;
}

export { bubbleSort };

export default bubbleSort;

```

You should avoid using bubble sort and use faster algorithms like quick sort instead.

# Conclusion

This guide hopefully helped you understand algorithms at a high level

Algorithms are a sequence of steps to solve a problem

Heuristics are similar to algorithms but may not be as exact

Data structures are used along with Algorithms to arrange data while performing a task.

Next week I'll go into more detail about how to analyze algorithms using time complexity notation.

{{embed [[website-outro]]}}
