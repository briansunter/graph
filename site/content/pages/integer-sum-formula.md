---
tags:
- algorithms-boot-camp
- math
categories:
- algorithms
- tech
date: 2022-10-02
math: true
title: integer-sum-formula
lastMod: 2022-10-04
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

$$\sum_{i=1}^n n = \frac{n(n + 1)}{2}$$

We can use this equation to find the sum of numbers 1 through 100

$$1+2+3+...+ 100 = \frac{100(100 + 1)}{2}$$

We do the calculations to find our answer

$$\frac{100(100 + 1)}{2} = \frac{10100}{2}=5050$$

## Resources

[Sum of n, n², or n³ | Brilliant Math & Science Wiki](https://brilliant.org/wiki/sum-of-n-n2-or-n3)
