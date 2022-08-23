public:: true
title:: abdul bari algorithms/part-1
tags:: [[algorithms-boot-camp]] [[programming]] [[course]] [[algorithm]] [[leetcode]] [[newsletter]] [[time-complexity]] [[time-complexity/algorithms-boot-camp]]
date:: 2022-08-22

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
				- hardware independent
				- theoretical
				- language independent
				- time and space function
			- Posteriori
				- watch time and bytes
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
			- If you can't describe the problem to human, you don't know it well enough to write an algorithm for it.
			- You can't pass an imaginary number like $$\sqrt{-1})$$ and treat it like a normal number. You need to specify how to deal with it.
		- ### Finiteness
			- Algorithms must terminate at some point
			- A web server, which keeps running until you stop it, is a program, not an algorithm. Programs may use algorithms while running though.
		- ### Effectiveness
			- Don't have any unnecessary procedures in your algorithm.
			- For example, in chemistry, you wouldn't boil a chemical and not use it in the experiment. That would be unnecessary.
- ## How to Write an Analyze Algorithms
	- ## Video
	- <iframe width="560" height="315" src="https://www.youtube.com/embed/xGYsEqe9Vl0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
	- ## Notes
		- ### Swapping two numbers
			- This is the pseudo code for swapping two values. We won't always use full language syntax in algorithms
			- id:: 62f9c6d7-a570-43c5-87b3-9c9467cc11d9
			  ```js
			  function swap(a,b){
			  	tmp = a;
			  	a = b;
			  	b = tmp;
			  }
			  ```
		- ### Criteria for Analyzing Algorithms
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
		-
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
				- Order of n^2 $$O(n^2)$$
			- ### Space Complexity
				- variables `a,b,c` matrices.
				- variables `i,j` scalar variables.