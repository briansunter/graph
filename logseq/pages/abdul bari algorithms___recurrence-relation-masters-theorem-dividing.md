tags:: [[programming]] [[course]] [[algorithms]] [[abdul bari algorithms]] 
categories:: [[programming]]
date:: 2023-01-05
math:: true
public:: true
hasMermaid:: true
coverimage:: /assets/recurrence-dividing_1673047600738_0.jpeg
blogtitle:: Abdul Bari Algorithms - Recurrence Relation and Master's Theorem for Dividing Functions
description:: Discusses the recurrence relation for dividing functions, which decrease the number of subproblems by dividing

- ![recurrence-dividing.jpeg](../assets/recurrence-dividing_1673047600738_0.jpeg)
- # Dividing Recurrence Relation 1
	- {{youtube https://youtu.be/8gt0D0IqU5w}}
	- ```js
	  function test(n){
	    if (n>1){
	      console.log(n);
	      test(n/2);
	    }
	  }
	  ```
	- When a function takes a parameter n, it can make it smaller by either subtracting like $n-1$ or dividing like $n/2$ or $\sqrt{n}$
	- Amount of work is $T(n)=T(n/2) + 1$
	- ## Recurrence Relation Dividing
		- $$T(n) = \begin{cases} 1 & \text{when } n=1 \\\ 2T(n/2)+n & \text{when } n > 1 \end{cases}$$
	- ## Tree Method
		- [[draws/2022-12-09-14-05-14.excalidraw]]
		- 1 unit of work per level, k steps, which is how many levels
		- Assume $\frac{n}{2^k}=1$
		- Simplify to $n=2^k$
		- Then simplify again to $k=log_2(n)$, which is the number of levels
		- Since there's one unit of work per level, the number of levels is the total units of work
		- $O(log(n))$
	- ## Substitution Method
		- Original Equation $T(n)=T(n/2)+1$
		- Plug in $n/2$
		- $T(n/2)=T(n/2^2) + 1$
		- $T(n)=[T(n/2^2)+1]+1$
		- $T(n)=T(n/2^2) + 2$
		- $T(n)=T(n/2^3) + 3$
		- Generalized to
		- $T(n)=T(n/2^k)+k$
		- Assume $\frac{n}{2^k}=1$
		- $n=2^k$ and $k=log(n)$
		- $T(n)=T(1)+log(n)$
		- $T(n) = 1 + log(n)$
		- Answer $O(log(n)$
- # Dividing Recurrence Relation 2
	- {{youtube https://youtu.be/XcZw01FuH18}}
	- ## Recurrence Relation
		- $$T(n) = \begin{cases} 1 & \text{when } n=1 \\\ T(n/2)+n & \text{when } n > 1 \end{cases}$$
	- ## Tree Method
		- ![Screenshot 2022-12-11 at 11.52.59 PM.png](../assets/Screenshot_2022-12-11_at_11.52.59_PM_1670838851213_0.png)
		- Each level does $\frac{n}{2^k}$ amount of work
		- So for each level, $n + \frac{n}{2} + \frac{n}{2^2} + \frac{n}{2^3} + ... + \frac{n}{2^k}$
		- $\displaystyle n \sum_{i=0}^k \frac{1}{2^i}$
		- This simplifies to n * 1
		- so answer is $O(n)$
	- ## Substitution Method
		- $T(n)=T(n/2)+n$
		- $T(n)=[T(n/2^2) + n/2 ]+ n$
		- $T(n)=T(n/2^2) + n/2 + n$
		- $T(n)=T(n/2^3) + n/2^2 + n/2 + n$
		- $T(n) = T(n/2^k)+T(n/2^{k-1}) + T(n/2^{k-2}) + ... + n/2 + n$
		- Assume $\frac{n}{2^k}=1$
		- $n=2^k$
		- $k=log(n)$
		- $T(n) = T(1) + n[\frac{1}{2^{k-1}} + \frac{1}{2^{k-2}} + ... + 1/2 + 1]$
		- $T(n) = 1 + n[1 + 1]$
		- $T(n) = 1 + 2n$
		- Answer $O(n)$
- # Dividing Recurrence Relation 3
	- ``` js
	  function test(n){
	    if (n>1){
	      for (let i=0; i< n; i++){
	        console.log(n);
	      }
	      test(n/2);
	      test(n/2)
	    }
	  }
	  ```
	- The recurrence relation is $T(n)=2T(n/2) + n$
	- $$T(n) = \begin{cases} 1 & \text{when } n=1 \\\ 2T(n/2)+n & \text{when } n > 1 \end{cases}$$
	- ## Tree Method
		- [[draws/2022-12-04-19-48-18.excalidraw]]
		- Each row adds up to $n$ amount of work
		- 2nd row as 2 $n/2$s
		- 3rd row has 4 $n/4$s
		- each row is $\frac{n}{2^k}$
		- How many rows are there? and in each row how much work is being done?
		- so n work being done k times
		- Assume $\frac{n}{2^k}=1$
		- $n=2^k$
		- $k=log(n)$
		- So total amount of work is $n*log(n)$
	- ## Substitution Method
		- $T(n)=2T(n/2)+n$
		- Plug in $(n/2)$
		- $T(n/2)=2T(n/2^2) + n/2$
		- Substitute $T(n/2)$ into the original equation
		- $T(n) = 2[2T(n/2^2) + n/2] + n$
		- Repeat for k times
		- $T(n)=2^k * T(\frac{n}{2^k}) + kn$
		- Assume $T(\frac{n}{2^k})=T(1)$
		- $\frac{n}{2^k}=1$
		- $k=log(n)$
- # Master's Theorem for Dividing 1
	- {{youtube https://youtu.be/OynWkEj0S-s}}
	- $T(n)=a * T(\frac{n}{b}) + f(n)$
	  id:: 63b7b2ee-3228-41c9-a931-891900cb009e
	- Assume $a>=1$ and $b>1$
	- $f(n)=O(n^k*log(n)^p)$
	- ## Case 1
	  id:: 63b7b2ee-3dae-47fb-bead-8be77c46a829
		- if $log_b(a) > k$ then $O(n^{log_b(a)})$
	- ## Case 2
		- if $log_b(a) = k$
		- ### Case 2.1
			- if $p>-1$ then $O(n^k*log(n)^{p+1})$
		- ### Case 2.2
			- if $p = -1$ then $O(n^k*log(log(n))$
		- ### Case 2.3
			- if $p <-1$ then $O(n^k)$
	- ## Case 3
		- if $log_b(a) > k$
		- ### Case 3.1
			- if $p>=0$ then $O(n^k*log(n)^p)$
		- ### Case 3.2
			- if $p <0$ then $O(n^k)$
	- ## Examples
		- ### Case 1
			- ### Example 1
				- $T(n) = 2T(n/2)+1$
				- $a=2$
				- $b=2$
				- $f(n)=O(1)$
				- $f(n)=O(n^0*log(n)^0)$
				- $k=0$, $p=0$
				- $log_2(2)=1$ which is bigger than $k$ so it is case 1
				- $O(n^1)$
			- ### Example 2
				- $T(n)=4T(n/2)+n$
				- $log_2(4)=2$, $k=1$, $p=0$
				- $log_2(4) = 2$ which is bigger than k (1) so case 1
				- $O(n^2)$
			- ### Example 3
				- $T(n)=8T(n/2)+n$
				- $log_2(8)=3$ > $k=1$
				- Also case 1, so $O(n^3)$
			- ### Example 4
				- $T(n)=8T(n/2)+n^2$
				- $log_2(8)=3$ > $k=2$
				- Still case 1, so $O(n^3)$
			- ### Example 5
				- $T(n)=9T(n/3)+1$
				- $log_3(9)=2$ > $k=0$
				- case 1, so $O(n^2)$
		- ### Case 2
			- ### Example 1
				- $T(n)=2T(n/2)+n$
				- $log_2(2)=1$ and $k=1$
				- They're equal so case 2
				- No $log(n)$ in $f(n)$, which is just $n$ (original formula $f(n)=O(n^k*log(n)^p)$
				- so $p=0$
				- $O(n*log(n))$
			- ### Example 2
				- $T(n)=4T(n/2)+n^2$
				- $log_2(4)=2$ and $k=2$
				- They're equal so case 2
				- so $p=0$
				- $O(n^2*log(n))$
			- ### Example 3
				- $T(n)=4T(n/2)+n^2*log(n)$
				- $log_2(4)=2$ and $k=2$
				- They're equal so case 2
				- so $p=1$
				- $O(n^2*log(n)^2)$
			- ### Example 4
				- $T(n)=8T(n/2)+n^3$
				- $log_2(8)=3$ and $k=3$
				- They're equal so case 2
				- so $p=0$
				- $O(n^3*log(n))$
			- ### Example 5
				- $T(n)=2T(n/2)+\frac{n}{log(n)}$
				- Remember $\frac{n}{log(n)}$ is the same as $n*log(n)^{-1}$
				- $log_2(2)=1$ and $k=1$
				- They're equal so case 2
				- In this case $p=-1$ since it's in denominator
				- So case 2.2
				- $O(n*log(log(n))$
			- ### Example 6
				- $T(n)=2T(n/2)+\frac{n}{log(n)^2}$
				- Remember $\frac{n}{log(n)}$ is the same as $n*log(n)^{-2}$
				- $log_2(2)=1$ and $k=1$
				- They're equal so case 2
				- In this case $p=-2$ since it's in denominator
				- So case 2.3
				- $O(n^1)$ or $O(n)$
			- ### Case 3
				- ### Example 1
					- $T(n)=T(n/2) + n^2$
					- $log_2(1) = 0$ < $k=2$
					- So case 3.1
					- So $O(n^2)$
				- ### Example 2
					- $T(n)=T(n/2) + n^2*log(n)$
					- $log_2(3) = 2$ < $k=2$
					- So case 3.1, take the entire $f(n)$
					- So $O(n^2*log(n))$
				- ### Example 3
					- If log is in denominator, then case 3.2
					- $T(n)=T(n/2) + \frac{n^3}{log(n)}$
					- $log_2(3) = 2$ < $k=2$
					- So case 3.2, so just take $n^3$
					- So $O(n^3)$
- # Master's Theorem for Dividing 2
	- {{youtube https://youtu.be/kGcO-nAm9Vc}}
	- ## Case 1 Examples
		- $T(n)=2T(n/2)+1$ -> $O(n^1)$
		- $T(n)=4T(n/2)+1$ -> $O(n^2)$
		- $T(n)=4T(n/2)+n^1$ -> $O(n^2)$
		- $T(n)=8T(n/2) + n^2$ -> $O(n^3)$
		- $T(n)=16T(n/2)+n^2$ -> $O(n^4)$
	- ## Case 2
		- $T(n)=T(n/2) + 1$ -> $O(log(n)$
		- $T(n)=2T(n/2) + n$ -> $O(n*log(n))$
		- $T(n) = 2T(n/2) + n*log(n)$ -> $O(n*log(n)^2)$
		- $T(n) = 4T(n/2) +n^2$ -> $O(n^2*log(n))$
		- $T(n)=2T(n/2) + {n*log(n)}^2$ -> $O(n^2*log(n)^3)$
		- $T(n) = 2T(n/2) + \frac{n}{log(n)}$ -> $O(n*log(log(n))$
		- $T(n) = 2T(n/2) + \frac{n}{log(n)^2}$ -> $O(n)$
	-
	- ## Case 3
		- $T(n)=T(n/2)+n^1$ -> $O(n)$
		- $T(n) = 2T(n/2) + n^2$ -> $O(n^2)$
		- $T(n) = 2T(n/2) + n^2*log(n)$ -> $O(n^2*log(n))$
		- $T(n)=4T(n/2) + n^3*log(n)^2$ -> $O(n^3*log(n)^2)$
		- $T(n)=2T(n/2)+ \frac{n^2}{log(n)}$ -> $O(n^2)$
- # Root Function (Recurrence Relation)
	- {{youtube https://youtu.be/9rVuyjxzwgM}}
	- ``` js
	  function test(n){
	    if(n>2) {
	      stmt
	      test(Math.sqrt(n))
	    }
	  ```
	- $$T(n) = \begin{cases} 1 & \text{when } n=2 \\\ T(\sqrt{n})+1 & \text{when } n > 2 \end{cases}$$
	- $T(n)=T(n^{\frac{1}{2}})+1$
	- $T(n)=T(n^{\frac{1}{2^2}})+2$
	- $T(n)=T(n^{\frac{1}{2^3}})+3$
	- Continue for k times
	- $T(n)=T(n^{\frac{1}{2^k}})+k$
	- Assume n is in powers of 2
	- $T(2^m)=T(2^{\frac{m}{2^k}}) + k$
	- Assume $T(n^{\frac{m}{2^k}}=T(2^1)$
	- $\frac{m}{2^k}=1$
	- $m=2^k$ and $k=log_2(m)$
	- $n=2^m$ and $m=log_2(n)$
	- $k=log(log_2(n))$
	- $O(log(log_2(n))$