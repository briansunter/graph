---
tags:
- sorting
- programming
- leetcode
- data-structures-algorithms-guide
- sorting-algorithm
time-complexity: $$O(n^2)$$
space-complexity: $$O(n)$$
title: bubble-sort
categories:
date: 2022-08-15
lastMod: 2022-08-15
---
# About

  + Bubble sort is a simple yet inefficient sorting algorithm

  + It is helpful for learning about [[time complexity]]

  + You should avoid it, because it gets exponentially slower as the input size grows.

  + Instead, you should use faster sorting algorithms like quick-sort and merge-sort. These algorithms can sort much more quickly as the input size grows.

# Psuedo Code

  + Scan the array from left to right

  + If the left element is greater than the right, swap them

  + Repeat n times until the largest elements "bubble up" to the end of the array

# Code

  + {{renderer :github_ehqxq, briansunter::algorithms:src/lib/bubbleSort.ts,662775cf3827cd22d973b2c2e23178d5552d9617,update bubble sort, false}}

    + id:: 62b93d25-b5bc-4bc3-b186-2189143f0add
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

# Tests

  + {{renderer :github_tprer, briansunter::algorithms:src/test/bubbleSort.test.ts, 662775cf3827cd22d973b2c2e23178d5552d9617, update bubble sort, true}}

    + id:: 62b93f82-9720-4fd8-98a7-7c3bd3b47429
```js
import bubbleSort from '../lib/bubbleSort';

describe('bubble sort', () => {
  test('it should handle edge cases', () => {
    expect(bubbleSort([])).toStrictEqual([]);
    expect(bubbleSort([1])).toStrictEqual([1]);
    expect(bubbleSort([1, 2])).toStrictEqual([1, 2]);
  });

  test('it should handle basic sort', () => {
    expect(bubbleSort([2, 1])).toStrictEqual([1, 2]);
    expect(bubbleSort([2, 1, 3])).toStrictEqual([1, 2, 3]);
    expect(bubbleSort([2, 1, 3, 4])).toStrictEqual([1, 2, 3, 4]);
  });

  test('it should handle strings', () => {
    expect(bubbleSort(['ab', 'abc', 'aa'])).toStrictEqual(['aa', 'ab', 'abc']);
  });
});

```

[[time complexity]]

  + n (n-1)/2  comparison operations
