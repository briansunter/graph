---
title: integer-sum-formula
slug: integer-sum-formula
tags:
  - algorithms
  - math
categories: math
date: 2022-10-02
lastMod: 2024-03-18
blogtitle: Integer Sum Formula (Gauss Sum)
description: How do we find the sum of the numbers 1 through 100?
---

## Summary


How do we find the sum of the numbers 1 through 100?

For example, $1 + 2 + 3 + ... + 100$

In code this would look like

```js
let sum = 0;
for (let i = 1; i <= 100; i++){
sum += i;
}
```

If you sum up these numbers, the result will be $5050$

## Sum of n Integers Equation


Instead of adding up the numbers 1 through $n$ by hand or in a loop, we can use an equation to find the answer instantly.

This is the equation for the sum of integers 1 through $n$

$$\sum_{i=1}^n i = \frac{n(n + 1)}{2}$$

We can use this equation to find the sum of numbers 1 through 100

$$1+2+3+...+ 100 = \frac{100(100 + 1)}{2}$$

We do the calculations to find our answer

$$\frac{100(100 + 1)}{2} = \frac{10100}{2}=5050$$

## Proof


### Visual Proof


![2022-10-09-08-39-52](/assets/2022-10-09-08-39-52.svg)

One way of looking at the problem is to imagine stacking boxes like a set of stairs

You have one box, two boxes, three boxes stacked, etc

The bottom and side are both length n. We need to find the "area" to find the total sum

We can create a square by duplicating this stack and flipping it upside down

![2022-10-09-09-07-45](/assets/2022-10-09-09-07-45.svg)

![image.png](/assets/image_1665465573710_0.png)

Notice by flipping it, one side is n and the other is n +1

The area of a square is length time width,  which is $n(n+1)$ in this square

We need to divide this by two, because we only want the blue staircase part

This gives us the final equation $\frac{n(n+1)}{2}$

### Proof by Induction


#### Base Case


The base case is just the sum of the first number, $1$ , so let $n=1$

$$\sum_{i=1}^1 i = \frac{1(1 + 1)}{2}=\frac{2}{2} = 1$$

### Inductive Step


 lets find the next sum, in terms of $n+1$

$$\sum_{i=1}^{n+1} i $$

To find the next sum, we take the sum so far, and add the next number to it.

$$\sum_{i=1}^{n} i + (n + 1)$$

We replace the summation part with the original equation and simplify

$$ \frac{n(n + 1)}{2}+ (n + 1)$$

We get a common denominator, so we can add the two terms. We replace (n+1) with the equivalent 2(n+1)/2

$$ \frac{n(n + 1)}{2}+ \frac{2(n + 1)}{2}$$

Factor out the common $(n+1)$ in both terms

$$\frac{(n + 1)(n + 2)}{2}$$

We can modify it to look like the original equation

$$ \sum_{i=1}^{n+1} i = \frac{(n + 1)((n + 1) +1)}{2}$$

This is really similar to the original equation, but with $(n + 1)$ in place of $n$

$\frac{n(n + 1)}{2}$ vs  $\frac{(n + 1)((n + 1) +1)}{2}$

This shows how you can validate the equation is correct using induction. We start with the kn base case, then show that given n, we can find any n+1

## Resources


[Sum of n, n², or n³ | Brilliant Math & Science Wiki](https://brilliant.org/wiki/sum-of-n-n2-or-n3)

<iframe width="560" height="315" src="https://www.youtube.com/embed/eHbtc50-qXo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>

