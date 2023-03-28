---
hasmermaid: true
tags:
- abdul bari algorithms
- programming
- course
- algorithms
blogtitle: Abdul Bari Algorithms - Binary Search
categories:
- programming
math: true
date: 2023-01-05
coverimage: /assets/binary-search_1673042669678_0.jpeg
description: How to implement binary search recursively and iteratively
title: abdul bari algorithms/binary search
lastMod: 2023-03-28
---
![binary-search.jpeg](/assets/binary-search_1673042669678_0.jpeg)

# Binary Search Iterative

{{< youtube C2apEw9pgtw >}}

You can do binary search recursively or iteratively

{{< ytime videoId="C2apEw9pgtw" start="25" time="00:25" >}} binary search uses the divide and conquer strategy
Divide and conquer is breaking problem into subproblems, then combine them to get solution to main problem

{{< ytime videoId="C2apEw9pgtw" start="50" time="00:50" >}} List must be in sorted order to perform binary search

{{< ytime videoId="C2apEw9pgtw" start="77" time="01:17" >}} We need two index pointers, `low` and `high`

Suppose we want to search for key element 42 in this list

`[3,6,8,12,14,17,25,29,31,36,42,47,53,55,62]`

`middle` is the floor of $\frac{\text{low} + \text{high}}{2}$

{{< logseq/orgNOTE >}}His examples used starting index of 1, but I changed it to index starting at 0 in these notes. I also changed end index to length-1
{{< / logseq/orgNOTE >}}

`low` is index 0 and `high` is index 14, so `mid` is 7

The number at index 7 is 29

{{< ytime videoId="C2apEw9pgtw" start="163" time="02:43" >}} The number 42 which we're searching for is greater than 29, so  the new `low` becomes `mid + 1`, which is 8;

Now `low` = 8 and `high` = `14`

$\frac{8+14}{2} = 11$ so the new `mid` is 11

{{< ytime videoId="C2apEw9pgtw" start="202" time="03:22" >}} The number at index 11 is 47

The number 42 which we're searching for is less than `7`, so the new `high` becomes `mid - 1`, which is 10

Now `low` = 8 and `high`=10

$\frac{8+10}{2} = 9$ so the new `mid` is 9

The number at index 9 is 36

{{< ytime videoId="C2apEw9pgtw" start="243" time="04:03" >}} The number 42 which we're searching for is greater than 36, so  the new `low` becomes `mid + 1`, which is 10;

Now both `low` = 10 and `high`= 10

$\frac{10+10}{2} = 10$ so the new `mid` is 10

{{< ytime videoId="C2apEw9pgtw" start="284" time="04:44" >}} The number at index 10 is 42, which is the number we're searching for.

{{< ytime videoId="C2apEw9pgtw" start="292" time="04:52" >}}  How many comparisons have we done? 4

If we had been doing linear search it would have taken 11 comparisons

{{< logseq/orgWARNING >}} This implementation has a subtle bug, where it fails for very large arrays. See this [blog post](https://ai.googleblog.com/2006/06/extra-extra-read-all-about-it-nearly.html) about this bug.

`int mid = (low + high) / 2;` (incorrect)
vs
`int mid = low + ((high - low) / 2);` (correct)
 {{< / logseq/orgWARNING >}}

## Implementation

```js
//returns index of value or -1
function binarySearch(array, key){
  let low=0;
  let high = array.length-1;
  const mid = (low+high)/2;
  while (low <= high){
  if (array[mid]===key){
    return mid;
  } else if (key < array[mid]){
  	high = mid-1;
  } else {
    low = mid+1;
  }
  }
  return -1;
}
```

## Visualize as Binary Search Tree

{{< ytime videoId="C2apEw9pgtw" start="815" time="13:35" >}} This can be arranged as a binary search tree

![Screenshot 2022-12-16 at 7.10.15 PM.png](/assets/Screenshot_2022-12-16_at_7.10.15_PM_1671253829622_0.png)

What is the worst case number of comparisons when searching for an element?

If you don't find it, you'll search until you reach the bottom of the tree.

The height of the tree is $log_2(n)$ where n is the number of elements

{{< ytime videoId="C2apEw9pgtw" start="1123" time="18:43" >}} So if there are 16 elements then $log_2(16)=4$ , so the height of the tree is 4 levels and the worst case number of comparisons will be 4

So worst case is $O(log(n))$ and best case is $O(1)$, when the element you're looking for is the root.

# Binary Search Recursive

{{< youtube uEUXGcc2VXM >}}

`[3,6,8,12,14,17,25,29,31,36,42,47,53,55,62]`

When using divide and conquer, we divide into smaller problems then recombine

So we should define what defines a "small" problem when using divide and conquer

In this case a "small" problem is when there is only a single element, or when `low` and `high` are equal.

Then when we have a single element, if the element is the target value, otherwise return -1

If the problem is large we make it smaller based on some logic.

```js
function recursiveBinarySearch(array, key, low, high){
	if (low === high){
      if (array[low]===key){
        return low;
      } else {
        return -1;
      }
    } else {
      const mid = (low + high)/2;
      if (array[mid]===key){
        return mid;
      } else if (key < array[mid]){
        return recursiveBinarySearch(array, key, low, mid-1);
      } else {
        return recursiveBinarySearch(array, key, mid+1, high);
      }
    }
}
```

## Recurrence Relation

{{< ytime videoId="uEUXGcc2VXM" start="297" time="04:57" >}} Calculating mid, checking if `mid` = `key`, and checking if `array[mid]` is greater or less than target each take one unit of time.

{{< ytime videoId="uEUXGcc2VXM" start="308" time="05:08" >}} When calling the recursive function it called itself with $T(n/2)$

{{< ytime videoId="uEUXGcc2VXM" start="326" time="05:26" >}} When list size is one, it just makes one comparation, so each is one unit of time

$T(n) = \begin{cases} 1 & \text{when } n=1 \\ T(\frac{n}{2})+1 & \text{when } n > 1 \end{cases}$

By applying master's theorem, we know the time complexity is $O(log(n))$

We use case 2 from the master's theorem

We can think of the recurrence relation as $T(n)=1*T(\frac{n}{2}) + 1$

Remember the master's theorem $T(n)=a * T(\frac{n}{b}) + f(n)$

In this equation $a=1$ and $b=2$

$log_1(2)=0$

The $f(n)$ from the master's theorem is $1$ in this equation, because $n^0$, so we know $k$ is 0 and $p$ is 0

if $log_b(a) = k$ is true, $log_1(2)=0$,  so we know it's case 2

$p>-1$ so we know it's case 2.1 of master's theorem

Case 2.1 is  $O(n^k*log(n)^{p+1})$

$O(n^0*log(n)^{0+1})$

$O(1 * log(n)^1)$

$O(log(n))$
