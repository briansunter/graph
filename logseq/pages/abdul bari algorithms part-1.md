public:: true
title:: abdul bari algorithms part-1
tags:: [[algorithms-boot-camp]] [[programming]] [[course]] [[algorithm]] [[leetcode]] [[newsletter]] [[time complexity]] [[time complexity]]
date:: 2022-08-22
math:: true

- ## Introduction to Algorithms
	- ## Video
		- <iframe width="560" height="315" src="https://www.youtube.com/embed/0IAPZzGSbME" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	- ## Notes
		- ### Algorithms vs Programs
			- |Algorithm|Program|
			  |--|--|
			  |Focused on Design|Implementation in programming language on hardware|
			  |Domain Knowledge|Software Engineering|
			  |Any Language|Specific Language|
			  |Analyze|Testing|
- ## Priori Analysis and Posteriori Testing
	- [[posteriori-vs-a-priori-analysis-of-algorithms]]
	- ## Video
		- <iframe width="560" height="315" src="https://www.youtube.com/embed/-JTq1BFBwmo" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
		- ## Notes
			- ### Priori Analysis
				- Hardware independent
				- Theoretical
				- Language independent
				- Time and space function
			- ### Posteriori
				- Watch time and bytes
- ## Algorithm Characteristics
	- ## Video
	- <iframe width="560" height="315" src="https://www.youtube.com/embed/FbYzBWdhMb0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	- ## Notes
		- ### Input
			- Algorithms can take 0 or more inputs
		- ### Output
			- Algorithms must generate some result or output
			- If it doesn't give you any output, an algorithm is not useful
			- Even if a function returns void, it should return a result in some other method
		- ### Definiteness
			- Everything should be unambiguous and clear.
			- If you can't describe the problem to a human, you don't know it well enough to write an algorithm.
			- You can't pass an imaginary number like $$\sqrt{-1})$$ without specifying how to deal with it
		- ### Finiteness
			- Algorithms must terminate at some point
			- A web server, which keeps running until you stop it, is a program, not an algorithm. Programs may use algorithms while running.
		- ### Effectiveness
			- Don't have any unnecessary procedures in your algorithm.
			- For example, in chemistry, you wouldn't boil a chemical and not use it in the experiment. That would be unnecessary.
- ## How to Write an Analyze Algorithms
	- ## Video
	- <iframe width="560" height="315" src="https://www.youtube.com/embed/xGYsEqe9Vl0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	- ## Notes
		- ### Swapping two numbers
			- This is the pseudo code for swapping two values.
			- We won't always use full language syntax in algorithms
			- id:: 62f9c6d7-a570-43c5-87b3-9c9467cc11d9
			  ```js
			  function swap(a, b){
			  	tmp = a;
			  	a = b;
			  	b = tmp;
			  }
			  ```
		- ## Criteria for Analyzing Algorithms
			- Time and space are the most important criteria when analyzing algorithms
			- ### Time
				- How long will the algorithm take to run?
			- ### Space
				- How much memory does the algorithm need to run?
			- There are other important characteristics we may care about, but are usually less important.
			- ### Network Traffic
				- How much data needs to be sent over the network when the algorithm runs?
			- ### Power
				- How much power does the algorithm need to run?
				- This is important when designing for mobile devices
			- ### CPU Registers
				- Sometimes for low level software, you may need to know hardware details like how many CPU registers your algorithms needs.
		- ### Time Analysis
			- Every "simple" statement in an algorithm takes one "unit" of time
			- If a procedure has 3 simple statements, it takes 3 units of time.
				- You can write this as $$f(n)=3$$
				- This is a **constant** value. It doesn't matter what you give it, it always takes 3 units of time.
					- For simplicity, we usually say things like `y = 3*a + 6*b` is just 1 unit of time. It's usually not necessary to go into such great detail
		- ### Space Analysis
			- What is the space complexity of this algorithm? How much memory does it use?
			- ((62f9c6d7-a570-43c5-87b3-9c9467cc11d9))
			- It uses 3 variables always, regardless of the input, so we say $$s(n)=3$$ which is also constant.
			- Each statement is one "unit" of time and each variable is one "unit" of space
- ## Frequency Count Method
	- ## Video
	- <iframe width="560" height="315" src="https://www.youtube.com/embed/1U3Uwct45IY" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	- ## Notes
		- ### Frequency Count Method
			- The time taken by an algorithm can be determined by assigning one "unit" of time for each "statement"
			- If a statement is repeating, the frequency of execution will determine the time taken by the algorithm to run
		- ### Sum of elements in array
			- ```js
			  function(nums){
			    sum = 0
			    for (i = 0; i < nums.length; i++){
			      sum = sum + nums[i];
			    }
			    return sum;
			  }
			  ```
			- ### Time Complexity
				- If I give it an array of length n, the sum function runs n times, so the algorithm takes $$O(n) = n$$ time to run. We call this "order of n"
			- ### Space Complexity
				- we have variables `sum`, `i` and `nums`
				- `nums` has space n "units" of space and `i` and `sum` and 1 "unit" of space.
				- Since `nums` has a space complexity of `n` so we say the space complexity is $$O(n) = n$$ "order of n"
			-
		- ### Matrix Addition
			- ```js
			  function addMatrix(a,b){
			    for(i= 0; i < a.length; i++){
			      for(j = 0; j < a[0].length; j++){
			        c[i][j] = a[i][j] + b[i][j];
			      }
			    }
			  }
			  ```
			- ### Time Complexity
				- Two for nested for loops, each taking n time.
				- n procedures executing n times
				- Order of n^2 or $$O(n^2)$$
			- ### Space Complexity
				- variables `a,b,c` matrices.
				- variables `i,j` scalar variables.
- # Time Complexity
	- <iframe width="560" height="315" src="https://www.youtube.com/embed/9TlHvipP5yA" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	- ## Notes
		- How do we analyze time complexity for given code?
		- What things affect time complexity?
		- We need to figure out how many times `stmt` executes
		- ## Normal for loops
			- `stmt` will be executed n times, so it's $$O(n)$$
			- ```js
			  for(i=0; i<n;i++){
			    stmt()
			  }
			  ```
		- ## Decrementing for loop
			- Even though `i` is decrementing, it will be executed n times, so it's also $$O(n)$$
			- ```js
			  for(i=n; i>0;i--){
			    stmt()
			  }
			  ```
		- ## Increment by two
			- ```js
			  for(i=0; i<n;i+=2){
			    stmt()
			  }
			  ```
			- In this code we increment by two, so it will be executed  n/2 times. It is $$O(n)$$ because n * anything is $$O(n)$$
		- ## Nested for loops
			- ```js
			  for(i=0; i<n;i++){
			    for(j=0; j<n;j++){
			      stmt()
			     }
			  }
			  ```
			- Each loop executes `n` times so `stmt` is executed `n` * `n` times or $$O(n^2)$$
		- ## Dependent For Loops
		  collapsed:: true
			- What happens if the inner loop is dependent on the outer loop?
			- ```js
			  for(i=0; i<n;i++){
			    for(j=0; j<i;j++){
			      stmt()
			     }
			  }
			  ```
			- Let's make a table to keep track of the values at each interation
			- |i|j|stmt executions|
			  |--|--|--|
			  |0|0|0|
			  |1|0[:br]1|1|
			  |2|0[:br]1[:br]2|2|
			  |3|0[:br]1[:br]2[:br]3|3|
			  |...|...|...|
			  |n|0[:br]1[:br]2[:br]...[:br]n|n|
			- How many times is `stmt` executed?
			- The outer loop goes from 0 to n
			- When `i` is 1, `stmt` is executed 1 times
			- When `i` is 2, `stmt` is executed 2 times
			- Finding out how many times `stmt` is executed is the same as the [[integer-sum-formula]]
			- This is equivalent to 1 + 2 + 3 + 4 ... + n
			- We can use $$f(n)=\frac{n(n+1)}{2}$$
			- This can be expanded out to $$f(n)=\frac{(n^2+n)}{2}$$
			- This is simplified to to $$O(n^2)$$ because we only care about the biggest exponent.
		- ## Outer loop does not execute n times
		  collapsed:: true
			- ```js
			  p=0
			  for(i=1; p<=n;i++){
			   p=p+i
			    stmt()
			  }
			  ```
			- How many times is `stmt` executed?
			- Let's make a table that shows the values at each iteration
			- |i|p|
			  |--|--|
			  |1|0+1=1|
			  |2|1+2=3|
			  |3|1+2+3|
			  |4|1+2+3+4|
			  |k|1+2+3+...+k|
			- We can use the [[integer-sum-formula]] again to find `p` for a given  `i`
				- $$ P=\frac{k(k+1)}{2} $$
			- When will this loop stop? when `p > n`
			- Let's replace `p` with our formula and simplify
			- $$\frac{k(k+1)}{2} > n $$
			- This can be expanded out and simplified to $$k^2$$ (we know we only care about the exponent for big o time complexity analysis)
			- $$k^2> n $$
			- $$k > \sqrt{n}$$
			- Therefore, the time complexity is $$O(n^2)$$
			- ### Multiply i value
			  collapsed:: true
				- ```js
				  for(i=0; i<n;i=i*2){
				    stmt()
				  }
				  ```
				- How many times will this execute?
				- |k|i|
				  |--|--|
				  |1|1|
				  |2|2|
				  |3|2^2|
				  |4|2^3|
				- 2^k
				- assume`i>=n`  which breaks the loop
				- $i=2^k$
				- $2^k=n$
				- $k=\log_2 n$
				- The time complexity is $O(\log n)$
			- ### Divide i value
			  collapsed:: true
				- ```js
				  for(i=0; i<n;i=i/2){
				    stmt()
				  }
				  ```
				- $$\frac{n}{2}, \frac{n}{2^2},\frac{n}{2^3},...$$
				- i < 1
				- $\frac{n}{2^k} = 1$
				- $n=2^k$
				- $k=\log_2 n$
				- The time complexity is $O(\log n)$
		- ## While loops and If
		  collapsed:: true
			- <iframe width="560" height="315" src="https://www.youtube.com/embed/p1EnSvS3urU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			- How can we analyze functions with while loops and if statements?
			- We can make a table of values to understand the exection
			- ```js
			  while (m != n){
			    if (m > n){
			      m=m-n
			    } else {
			      n = n-m
			    }
			  }
			  ```
			- |m=16|n=2|
			  |--|--|
			  |14|2|
			  |12|2|
			  |10|2|
			  |8|2|
			  |6|2|
			  |4|2|
			  |2|2|
			- We can see that with an input of 16, it will run 7 times, so 16/2 = 8, which can give us the upper limit
			- The time complexity is n/2 which simplifies to $O(n)$
		- ## Classes of Functions
		  collapsed:: true
			- <iframe width="560" height="315" src="https://www.youtube.com/embed/w7t4_JUUTeg" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			- ### Types of time functions
				- These are listed in increasing size
				- #### Constant time $O(1)$
					- Always runs in a fixed amount of time, doesn't depend on input
					- $f(n)=2$ or $f(n)=5000$ are both constant, which is described as $O(1)$
				- ### Logarithmic $O(log(n))$
					- $\sqrt{n}$
				- ### Linear $O(n)$
					- $f(n)=2n+3$ and $500n+700$ both simplify to $O(n)$
					- $O(n * log(n))$
				- ### Quadratic $O(n^2)$
				- ### Cubic $O(n^3)$
				- ### Exponential $O(2^n)$
			- ### Sample values for different classes
				- |$\log_2 n$|$n$|$n^2$|$2^n$|
				  |--|--|--|--|
				  |0|1|1|2|
				  |1|2|4|4|
				  |2|4|16|16|
				  |3|8|64|256|
				- We can see that the growth is much faster for the exponential equations
				- When n gets large, $n^{100}$ will always be less than $2^n$
				- ![image.png](../assets/image_1666064845040_0.png){:height 446, :width 413}
					- By [Cmglee](https://commons.wikimedia.org/wiki/File:Comparison_computational_complexity.svg)
		- ## Asymptotic Notation
			- <iframe width="560" height="315" src="https://www.youtube.com/embed/A03oI0znAoc" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
			- ### Big O - $O$
				- Upper Bound
				- $f(n) = O(g(n))$ means there are positive constants c and k, such that $0 ≤ f(n) ≤ c * g(n)$ for all $n ≥ k$.
				- If you were to graph big of bounding function, your function's value would always be less than the big O upper bound
				- ![image.png](../assets/image_1666066293557_0.png)
					- - [NIST](https://xlinux.nist.gov/dads/HTML/theta.html)
				- If you have a function $f(n)=2n+3$
				- What's an example of a function that will always be greater?
				- $10n > 2n+3$ 10 is the constant c, from the Big o definition $c *g(n)$
				- Try to use the closest function for the upper bound, even though higher values like $n^2$ could be the upper bound, it's less useful
				-
			- ### Big Omega - Ω
				- Lower Bound
				- Similar to Big O notation, but your function will always be greater than the omega function
				- $f(n) = O(g(n))$ means there are positive constants c and k, such that $ f(n) ≥ c * g(n)$ for all $n ≥ k$.
				- ![image.png](../assets/image_1666138709938_0.png)
				-
			- ### Theta - Θ
				- Average Bound
				- $f(n) = Θ (g(n))$ means there are positive constants $c_1, c_2$, and k, such that $0 ≤ c_1*g(n) ≤ f(n) ≤ c_2 * g(n)$ for all n ≥ k.
				- Consider $f(n) = 2n+3$
				- $1 *n <= 2n +3 <= 5 * n$
				- $c_1 * g(n) <= f(n) <= c_2 * g(n)$
				- In this case $f(n) =Θ(n)$
				- Since this is average notation, you can't use $Θ(n^2)$, it's out of the bounds
				-
				-
				-
				- ![image.png](../assets/image_1666139032348_0.png)