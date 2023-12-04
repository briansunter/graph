---
tags:
- math
- interview
- leetcode
title: logarithm
categories:
date: 2023-10-28
lastMod: 2023-10-28
---
# Definition
heading:: 1

A logarithm is the inverse operation to exponentiation. For \(b^y = x\), the logarithmic form is \( \log_b(x) = y \), where \(b\) is the base.

## Common Bases
heading:: 2

**Natural Logarithm (Base e)**: Represented as \( \ln(x) \).

**Common Logarithm (Base 10)**: Represented as \( \log(x) \).

**Binary Logarithm (Base 2)**: Used frequently in computer science and represented as \( \log_2(x) \).

## Logarithms in Algorithm Analysis
heading:: 2

### O(log n)
heading:: 3

Represents algorithms that reduce their problem size by a factor (commonly 2) with each step.

**Example**: Binary Search – With each step, the algorithm reduces the problem size in half.

### O(n log n)
heading:: 3

More efficient than polynomial time complexities like \(O(n^2)\) but less efficient than linear time complexities like \(O(n)\).

**Example**: Merge Sort and QuickSort – Both involve dividing and conquering in log(n) levels.

### Tree Structures
heading:: 3

Balanced binary trees like AVL trees or Red-Black trees often have heights of \(O(\log n)\), leading to logarithmic time complexities for operations like insertion, deletion, and lookup.

## Logarithmic Properties
heading:: 2

### Logarithm of a Product
heading:: 3

\[ \log_b(m \times n) = \log_b(m) + \log_b(n) \]

### Logarithm of a Quotient
heading:: 3

\[ \log_b\left(\frac{m}{n}\right) = \log_b(m) - \log_b(n) \]

### Change of Base Formula
heading:: 3

\[ \log_b(a) = \frac{\log_d(a)}{\log_d(b)} \]

Especially useful to transform between different logarithm bases.

## Practical Tips
heading:: 2

1. **Understand the Impact**: In the context of large data, logarithmic time complexities can lead to significant performance gains. For example, a search operation in a dataset of 1 million elements would only take 20 operations with \(O(\log n)\) complexity.

2. **Recognize Patterns**: Logarithmic complexities often emerge when the algorithm or data structure works by dividing the input data.

3. **Iterative vs Recursive**: Logarithmic algorithms can be implemented both iteratively (e.g., Binary Search) and recursively (e.g., Merge Sort).
