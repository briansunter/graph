---
description: An introduction to analyzing algorithms, comparing functions, and Big O notation, such as Big O, Theta, and Omega.
tags:
- programming
- course
- algorithms
- time complexity
- abdul bari algorithms
date: 2022-08-22
blogtitle: Abdul Bari Algorithms - Time Complexity
categories:
- programming
aliases: "/pages/abdul-bari-algorithms-part-1"
math: true
title: abdul bari algorithms/time-complexity
lastMod: 2023-12-13
---
# Introduction to Algorithms


{{ youtube 0IAPZzGSbME }}

## Algorithms vs Programs


|Algorithm|Program|
|--|--|
|Focused on Design|Implementation in programming language on hardware|
|Domain Knowledge|Software Engineering|
|Any Language|Specific Language|
|Analyze|Testing|

# Priori Analysis and Posteriori Testing


{{ youtube -JTq1BFBwmo }}

[[posteriori-vs-a-priori-analysis-of-algorithms]] notes

## Priori Analysis


Hardware independent

Theoretical

Language independent

Time and space function

## Posteriori


Watch time and bytes

# Algorithm Characteristics


{{ youtube FbYzBWdhMb0 }}

## Input


Algorithms can take 0 or more inputs

## Output


Algorithms must generate some result or output

If it doesn't give you any output, an algorithm is not useful

Even if a function returns void, it should return a result in some other method, like modifying a variable somewhere

## Definiteness


Everything should be unambiguous and clear.

If you can't describe the problem to a human, you don't know it well enough to write an algorithm.

You can't pass an imaginary number like $\sqrt{-1}$ without specifying how to deal with it

## Finiteness


Algorithms must terminate at some point

A web server, which keeps running until you stop it, is a program, not an algorithm. Programs may use algorithms while running.

## Effectiveness


Don't have any unnecessary procedures in your algorithm.

For example, in chemistry, you wouldn't boil a chemical and not use it in the experiment. That would be unnecessary.

# How to Write and Analyze Algorithms


{{ youtube xGYsEqe9Vl0 }}

## Swapping two numbers


This is the pseudo code for swapping two values.

We won't always use full language syntax in algorithms

This particular function only works for languages that support "pass by reference" like C/C++. Read more [here](https://www.javadude.com/articles/passbyvalue.htm)




```js
function swap(a, b){
tmp = a;
a = b;
b = tmp;
}
```

## Criteria for Analyzing Algorithms


Time and space are the most important criteria when analyzing algorithms

### Time


How long will the algorithm take to run?

### Space


How much memory does the algorithm need to run?

There are other important characteristics we may care about, but are usually less important.

### Network Traffic


How much data needs to be sent over the network when the algorithm runs?

### Power


How much power does the algorithm need to run?

This is important when designing for mobile devices

### CPU Registers


Sometimes for low level software, you may need to know hardware details like how many CPU registers your algorithms needs.

### Time Analysis


Every "simple" statement in an algorithm takes one "unit" of time

If a procedure has 3 simple statements, it takes 3 units of time.

You can write this as $$f(n)=3$$

This is a **constant** value. It doesn't matter what you give it, it always takes 3 units of time.

For simplicity, we usually say things like `y = 3*a + 6*b` is just 1 unit of time. It's usually not necessary to go into such great detail

### Space Analysis


What is the space complexity of this algorithm? How much memory does it use?



It uses 3 variables always, regardless of the input, so we say $$s(n)=3$$ which is also constant.

Each statement is one "unit" of time and each variable is one "unit" of space

# Frequency Count Method


{{ youtube 1U3Uwct45IY }}

## Frequency Count Method


The time taken by an algorithm can be determined by assigning one "unit" of time for each "statement"

If a statement is repeating, the frequency of execution will determine the time taken by the algorithm to run

### Sum of elements in array


```js
function(nums){
sum = 0
for (i = 0; i < nums.length; i++){
  sum = sum + nums[i];
}
return sum;
}
```

### Time Complexity


If I give it an array of length n, the sum function runs n times, so the algorithm takes $$O(n) = n$$ time to run. We call this "order of n"

### Space Complexity


we have variables `sum`, `i` and `nums`

`nums` has space n "units" of space and `i` and `sum` and 1 "unit" of space.

Since `nums` has a space complexity of `n` so we say the space complexity is $$O(n) = n$$ "order of n"



### Matrix Addition


```js
function addMatrix(a,b){
for(i= 0; i < a.length; i++){
  for(j = 0; j < a[0].length; j++){
    c[i][j] = a[i][j] + b[i][j];
  }
}
}
```

### Time Complexity


Two for nested for loops, each taking n time.

n procedures executing n times

Order of n^2 or $$O(n^2)$$

### Space Complexity


variables `a,b,c` matrices.

variables `i,j` scalar variables.

# Time Complexity


{{ youtube 9TlHvipP5yA }}

How do we analyze time complexity for given code?

What things affect time complexity?

We need to figure out how many times `stmt` executes

## Normal for loops


`stmt` will be executed n times, so it's $$O(n)$$

```js
for(i=0; i<n;i++){
stmt()
}
```

## Decrementing for loop


Even though `i` is decrementing, it will be executed n times, so it's also $$O(n)$$

```js
for(i=n; i>0;i--){
stmt()
}
```

## Increment by two


```js
for(i=0; i<n;i+=2){
stmt()
}
```

In this code we increment by two, so it will be executed  n/2 times. It is $$O(n)$$ because n * anything is $$O(n)$$

## Nested for loops


```js
for(i=0; i<n;i++){
for(j=0; j<n;j++){
  stmt()
 }
}
```

Each loop executes `n` times so `stmt` is executed `n` * `n` times or $$O(n^2)$$

## Dependent For Loops


What happens if the inner loop is dependent on the outer loop?

```js
for(i=0; i<n;i++){
for(j=0; j<i;j++){
  stmt()
 }
}
```

Let's make a table to keep track of the values at each interation

|i|j|stmt executions|
|--|--|--|
|0|0|0|
|1|0 , 1|1|
|2|0, 1, 2|2|
|3|0, 1, 2, 3|3|
|...|...|...|
|n|0,1,2,...,n|n|

How many times is `stmt` executed?

The outer loop goes from 0 to n

When `i` is 1, `stmt` is executed 1 times

When `i` is 2, `stmt` is executed 2 times

Finding out how many times `stmt` is executed is the same as the [[integer-sum-formula]]

This is equivalent to 1 + 2 + 3 + 4 ... + n

We can use $$f(n)=\frac{n(n+1)}{2}$$

This can be expanded out to $$f(n)=\frac{(n^2+n)}{2}$$

This is simplified to to $$O(n^2)$$ because we only care about the biggest exponent.

## Outer loop does not execute n times


```js
p=0
for(i=1; p<=n;i++){
p=p+i
stmt()
}
```

How many times is `stmt` executed?

Let's make a table that shows the values at each iteration

|i|p|
|--|--|
|1|0+1=1|
|2|1+2=3|
|3|1+2+3|
|4|1+2+3+4|
|k|1+2+3+...+k|

We can use the [[integer-sum-formula]] again to find `p` for a given  `i`

$$ P=\frac{k(k+1)}{2} $$

When will this loop stop? when `p > n`

Let's replace `p` with our formula and simplify

$$\frac{k(k+1)}{2} > n $$

This can be expanded out and simplified to $$k^2$$ (we know we only care about the exponent for big o time complexity analysis)

$$k^2> n $$

$$k > \sqrt{n}$$

Therefore, the time complexity is $$O(n^2)$$

### Multiply i value


```js
for(i=0; i<n;i=i*2){
stmt()
}
```

How many times will this execute?

|k|i|
|--|--|
|1|1|
|2|2|
|3|2^2|
|4|2^3|

2^k

assume`i>=n`  which breaks the loop

$i=2^k$

$2^k=n$

$k=\log_2 n$

The time complexity is $O(\log n)$

### Divide i value


```js
for(i=0; i<n;i=i/2){
stmt()
}
```

$$\frac{n}{2}, \frac{n}{2^2},\frac{n}{2^3},...$$

i < 1

$\frac{n}{2^k} = 1$

$n=2^k$

$k=\log_2 n$

The time complexity is $O(\log n)$

# While loops and If


{{ youtube p1EnSvS3urU }}

How can we analyze functions with while loops and if statements?

We can make a table of values to understand the exection

```js
while (m != n){
if (m > n){
  m=m-n
} else {
  n = n-m
}
}
```

|m=16|n=2|
|--|--|
|14|2|
|12|2|
|10|2|
|8|2|
|6|2|
|4|2|
|2|2|

We can see that with an input of 16, it will run 7 times, so 16/2 = 8, which can give us the upper limit

The time complexity is n/2 which simplifies to $O(n)$

# Classes of Functions


{{ youtube w7t4_JUUTeg }}

## Types of time functions


These are listed in increasing size

### Constant time $O(1)$


Always runs in a fixed amount of time, doesn't depend on input

$f(n)=2$ or $f(n)=5000$ are both constant, which is described as $O(1)$

### Logarithmic $O(log(n))$


$\sqrt{n}$

### Linear $O(n)$


$f(n)=2n+3$ and $500n+700$ both simplify to $O(n)$

$O(n * log(n))$

### Quadratic $O(n^2)$


### Cubic $O(n^3)$


### Exponential $O(2^n)$


### Sample values for different classes


|$\log_2 n$|$n$|$n^2$|$2^n$|
|--|--|--|--|
|0|1|1|2|
|1|2|4|4|
|2|4|16|16|
|3|8|64|256|

We can see that the growth is much faster for the exponential equations

When n gets large, $n^{100}$ will always be less than $2^n$

By [Cmglee](https://commons.wikimedia.org/wiki/File:Comparison_computational_complexity.svg)

# Asymptotic Notation


{{ youtube A03oI0znAoc }}

## Big O - $O$


Upper Bound

$f(n) = O(g(n))$ means there are positive constants c and k, such that $0 ≤ f(n) ≤ c * g(n)$ for all $n ≥ k$.

If you were to graph big of bounding function, your function's value would always be less than the big O upper bound

![image.png](/assets/image_1666066293557_0.png)

- [NIST](https://xlinux.nist.gov/dads/HTML/theta.html)

If you have a function $f(n)=2n+3$

What's an example of a function that will always be greater?

$10n > 2n+3$ 10 is the constant c, from the Big o definition $c *g(n)$

Try to use the closest function for the upper bound, even though higher values like $n^2$ could be the upper bound, it's less useful

## Big Omega - Ω


Lower Bound

Similar to Big O notation, but your function will always be greater than the omega function

$f(n) = O(g(n))$ means there are positive constants c and k, such that $ f(n) ≥ c * g(n)$ for all $n ≥ k$.

![image.png](/assets/image_1666138709938_0.png)



## Theta - Θ


Average Bound

$f(n) = Θ (g(n))$ means there are positive constants $c_1, c_2$, and k, such that $0 ≤ c_1*g(n) ≤ f(n) ≤ c_2 * g(n)$ for all n ≥ k.

Consider $f(n) = 2n+3$

$1 *n <= 2n +3 <= 5 * n$

$c_1 * g(n) <= f(n) <= c_2 * g(n)$

In this case $f(n) =Θ(n)$

Since this is average notation, you can't use $Θ(n^2)$, it's out of the bounds







![image.png](/assets/image_1666139032348_0.png)

# Properties of asymptotic notation


{{ youtube NI4OKSvGAgM }}

## General Property


if $f(n)$ is $O(g(n))$ then $a * f(n)$ is $O(g(n))$

e.g. $f(n) = 2 * n^2 + 5$ is $O(n^2)$

$f(n) = 7 (2n^2 +5) = 14n^2 + 35$ is $O(n^2)$

## Reflexive Property


If $f(n)$ is given, then $f(n)$ = $O(n)$

ex $f(n) = n^2$ then $O(n^2)$

## Transitive Property


if $f(n)$ is $O(g(n))$ and $g(n)$ is $O(h(n))$

then $f(n)$ is $O(h(n))$

if $g(n)$ is upper bound for $f(n)$ and $h(n)$ is upper bound for $g(n)$, then $h(n)$ is also an upper bound for $f(n)$

## Symmetric Property


Only true for Θ notation

if $f(n)$ is $Θ(g(n))$ then $g(n)$ is $Θ(f(n))$

e.g $f(n) = n^2$ , $g(n) = n^2$

$f(n) = Θ(n^2)$

$g(n) = Θ(n^2)$

## Transpose Symmetric


True for $O$ and  $Ω$

if $f(n) =O(g(n))$ if $g(n)$ is $Ω(f(n))$

eg $f(n) = n$, $g(n) =n^2$

then $n$ is $O(n^2)$ and $n^2$ is $Ω(n)$

if $f(n)$ is $O(g(n))$ and $f(n)= Ω(g(n))$

$g(n)$ is acting as both lower bound as well as upper bound

So $g(n) <= f(n)  <= g(n)$

then $f(n) = Θ(g(n))$

ex. If $f(n)=O(g(n))$,  $d(n)=O(e(n))$

Then $f(n) + d(n)= ?$

$f(n) = n = O(n)$

then $f(n) + d(n) = n + n^2 = O(n^2)$

When adding, take the bigger term

$f(n) + d(n) , O(max(g(n), d(n)))$

Also $f(n) * d(n) = f(n) * d(n^2) =O(g(n) * e(n))$

# Comparison of functions


{{ youtube mwN18xfwNhk }}

If we have two functions, how can we show which is the upper bound and which is the lower bound?

For example, $n^2$ vs $n^3$

We can sample values and observe which is greater in a table

|$n$|$n^2$|$n^3$|
|--|--|--|
|2|$2^2=4$|$2^3=8$|
|3|$3^2=9$|$3^3=27$|
|4|$4^2=16$|$4^3=64$|

Apply $log$ on both sides

$n^2$ vs $n^3$

$log(n^2)$ vs $log(n^3)$

This simplifies to $2log(n)$ vs $3log(n)$

2 * log(n) <= 3 * log(n)

We can see that 2log(n) is always less than 3log(n)

## Logarithms guide


$log(a*b) = log(a) + log(b)$

$log(\frac{a}{b}) = log(a) - log(b)$

$log(a^b) = b *log(a)$
$a^{log_c(b)} = b^{log_c(a)}$
$a^b=n$ then $b=log_a(n)$

## Comparison of functions


### First example


$f(n)=n^2*log(n)$

$g(n) = n * log(n)^{10}$

apply $log$

$f(n)$

$log[n^2*log(n)]$

$log(n^2) + log(log(n))$

$2 * log(n) + log(log(n))$

$g(n)$

$log[n* log(n)^{10}]$

$log(n) + log(log(n))^{10}$

$log(n) + 10 * log(log(n))$

### Second Example


### $f(n)=3*n^{\sqrt{n}}$


### $g(n) = 2^{\sqrt{n} * log_2(n)}$


using the property $log(a^b) = b *log(a)$


$2^{log_2(n)^{\sqrt(n)}}$

using the property $a^{log_c(b)} = b^{log_c(a)}$


$(n^{\sqrt{n}})^{log_2(2)}$

$log_2(2)=1$

so it simplifies to $n^{\sqrt{n}}$

so $f(n)=3*n^{\sqrt{n}}$ and $g(n)=n^{\sqrt{n}}$

### Third example


### $f(n) = n^{log(n)}$


Apply log

$log(n^{log(n)})$

The power inside the log statement comes out via the third formula

$log(a^b) = b *log(a)$


$log(n) * log(n)$

### $g(n)=2^{\sqrt{n}}$


Apply log

$g(n)=2^{\sqrt{n}}$

$g(n)=log(2^{\sqrt{n}})$

The power inside the log statement comes out via the third formula

$log(a^b) = b *log(a)$


$g(n)=\sqrt{n} * log(2)$

Simplify to one $log_2(2)=1$

So $f(n) = log(n)^2$ and $g(n) = \sqrt{n}$

# Best, Worst, and Average Case Analysis


{{ youtube lj3E24nnPjI }}

## Linear Search


Given a list `[8,6,12,5,9,7,4,3,16,18]`

And we want to search for `7`

Linear search starts at the first element, checking each element one at a time moving from left to right

If we search for something that doesn't exist like `20` it will search from left to right until it reaches the end of the list.

### Best Case


The best case is the fastest the algorithm can possibly run

In linear search, If the element you're searching for is present at the first index, that's the best case.

Best case time is $O(1)$ , it will always take one iteration no matter how long the list is, if the key value is at the first index

### Worst Case


The worst case is the slowest the algorithm can run

In linear search, if the element you're searching for is present at the last index, that's the worst case.

Worst case is $O(n)$ because you have to search every element in the list

### Average Case


All possible case times divided by number of cases. Usually this isn't feasible to find, so we rarely do it and focus on the worst case time instead

To find this, you find all possible cases, add up time taken in each possible case, and divide by the number of cases

What are the cases of linear search?

Key present at first index, key present at second index, etc

If at first index, then 1 comparisons

If at second index, then 2 comparisions

etc

So 1 + 2 +3 + .. +n is the total possible case time

and there are n possible cases

We can use [[integer-sum-formula]] to add up the time of all cases

$$\frac{n(n+1)}{2}$$

We divide the total case time by the number of cases

$$\frac{\frac{n(n+1)}{2}}{n}$$

We simply by dividing out n at the top and bottom, and are left with

$$\frac{(n+1)}{2}$$

Which is the average case time

### Asymptotic notation


Don't confuse best, worst, and average case with Big O, Big Omega, and Theta

Best case and worst can be expressed using any of these. Big O isn't only used to express worst case

Best case can be expressed using any of these notations

Best case(n) = 1

Best case(n) = $O(1)$

Best case(n) = $Ω(1)$

Best case(n) = $Θ(1)$

## Binary Search


![Screenshot 2022-11-28 at 2.22.08 PM.png](/assets/Screenshot_2022-11-28_at_2.22.08_PM_1669681356817_0.png)

If you're searching for `15`, start at root `20`

Is `15` bigger or smaller than `20`? smaller so move left

Then check `10`, is `15` larger than `10`? larger, so move right

### Best Case


If the element you're searching for is the root, the best case time is constant 1

### Worst Case


In the worst case, the element you're searching for is a leaf

So the worst case is the height of the binary tree, which is $log(n)$

So the worst case is $log(n)$

### Unbalanced binary search tree


![Screenshot 2022-11-28 at 2.28.42 PM.png](/assets/Screenshot_2022-11-28_at_2.28.42_PM_1669681918917_0.png)

A binary tree could be unbalanced, this binary tree is left skewed

It has the height `n`

The best case is still `1` when the element is at the root

However, the worst case is the height of the tree, which is `n` in this case, so the worst case is `n` whereas the worst case for a balanced binary tree is $log(n)$
