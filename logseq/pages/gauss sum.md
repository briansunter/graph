tags:: [[algorithms-boot-camp]] [[math]]
categories:: [[algorithms-boot-camp]] 
date:: 2022-10-02
public:: true
math:: true

- ## Summary
	- How do we find the sum of the numbers `1-100`?
		- For example, `1 + 2 + 3 + ... + 100`
	- If you sum up these numbers, the result will be `5050`
	- In code this would look like
		- ```js
		  let sum = 0;
		    for (let i = 1; i <= 100; i++){
		    sum += i;
		  }
		  ```
- ## Sum of n Integers Equation
	- However, instead of adding up the numbers 1 through `n` by hand or in a loop, we can use an equation to find the answer instantly. $$\sum_{i=1}^n n = \frac{n(n + 1)}{2}$$
- $$1+2+3+...+n = \frac{100(100 + 1)}{2} = \frac{10100}{2}=5050$$
-
- ## Resources
	- [Sum of n, n², or n³ | Brilliant Math & Science Wiki](https://brilliant.org/wiki/sum-of-n-n2-or-n3)