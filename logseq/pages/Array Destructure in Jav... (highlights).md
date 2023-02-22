title:: Array Destructure in Jav... (highlights)
author:: [[@swapnakpanda on Twitter]]
full-title:: "Array Destructure in Jav..."
category:: #tweets
url:: https://twitter.com/swapnakpanda/status/1538737223218040833

- Highlights first synced by [[Readwise]] [[Feb 20th, 2023]]
	- Array Destructure in JavaScript
	  
	    ✧  Explained like to a 10-years old
	    ✧  Fully covered
	  
	  ⇩ ([View Tweet](https://twitter.com/swapnakpanda/status/1538737223218040833))
	- ➋ Introduction
	  
	  ⬘  Till ES5, during assignment (=) operation, the left-hand side had to be a ❝single named variable❞
	  
	  E.g.,
	  
	  ⇥  a = 10       ✔
	  ⇥  [a] = [10]  ✘ ([View Tweet](https://twitter.com/swapnakpanda/status/1538737227676561409))
	- ⬙  ES2015 introduced a feature called ❝Destructure❞. The left-hand side now can be an Array or, Object literal.
	  
	  E.g.,
	  
	  ⇥  [a, b] = [10, 20]
	  
	     is equivalent to
	  
	  ⇥  a = 10, b = 20
	  
	  ✧  Though Object Destructure is allowed, we will here discuss only Array Destructure. ([View Tweet](https://twitter.com/swapnakpanda/status/1538737230281289728))
	- ➌ How does it work?
	  
	  ⬘  The assignment operator (=) is a binary operator. The first operand is placed at the left of "=" and the second is placed at the right of "=".
	  
	  ⬗  We will refer to the left-hand side operand as LHS and, the right-hand side operand as RHS. ([View Tweet](https://twitter.com/swapnakpanda/status/1538737232797765632))
	- ➌.➀  Scenario-➀
	  
	  If RHS has exactly the same number of elements as the number of variables in LHS.
	  
	  ⬙  A one-to-one mapping is done. All variables are assigned the corresponding value from RHS.
	  
	  E.g.,
	  
	  ⇥  [a, b, c] = [1, 2, 3]
	  
	  ⬘  The value of a is 1, b is 2 and c is 3. ([View Tweet](https://twitter.com/swapnakpanda/status/1538737237302849536))
	- ➌.➁  Scenario-➁
	  
	  If RHS has fewer elements than the number of variables in LHS.
	  
	  ⬘  A one-to-one mapping is done till all values are found in RHS.
	  
	  ⬙  Rest all variables are assigned to undefined.
	  
	  E.g.,
	  
	  ⇥  [a, b, c] = [1, 2]
	  
	  ⬗  a is 1, b is 2 and c is undefined ([View Tweet](https://twitter.com/swapnakpanda/status/1538737239668076544))
	- ➌.➂  Scenario-➂
	  
	  If RHS has more elements than the number of variables in LHS.
	  
	  ⬘  A one-to-one mapping is done for all variables in LHS. Rest all values are ignored.
	  
	  E.g.,
	  
	  ⇥  [a, b] = [1, 2, 3, 4]
	  
	  ⬙ The Value of a is 1 and b is 2.
	  
	  ⬗  Value 3 and 4 are ignored. ([View Tweet](https://twitter.com/swapnakpanda/status/1538737242360799232))
	- ➌.➃  Scenario-➃
	  
	  If we want to skip some values from RHS.
	  
	  ⬘  In this case, the below syntax is used in LHS
	  
	  ⇥  [a, , b] = [1, 2, 3]
	  
	  ⬙  The value of a is 1 and, b is 3.
	  
	  ⬗  Value 2 is skipped. ([View Tweet](https://twitter.com/swapnakpanda/status/1538737244822917120))
	- ➌.➄  Scenario-➄
	  
	  If we want to assign some default values to LHS.
	  
	  ⬘ In case a value from RHS is not found for a variable in LHS, it is assigned undefined.
	  
	  ⬙ We can also assign a default value in this case.
	  
	  ⇥  [a, b, c = 3] = [1, 2]
	  
	  ⬗ c is assigned the default value 3 ([View Tweet](https://twitter.com/swapnakpanda/status/1538737247373041664))
	- ➌.➅  Scenario-➅
	  
	  If we want to assign values of RHS to an array in LHS.
	  
	  ⬘  Values are assigned one-to-one to a variable. Can some values be grouped and assigned as an array?
	  
	  ⬙  Yes, using the rest parameter operator.
	  
	  ⇥  [a, ...b] = [1, 2, 3]
	  
	  ⬗  a is 1 and b is [2, 3] ([View Tweet](https://twitter.com/swapnakpanda/status/1538737249612836864))