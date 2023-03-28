tags:: [[ai]]

- # Classification with logistic regression
	- Linear regression predicts a number
	- Classification is where y can only take on a handful of algorithms
	- Examples of classification problems
		- Is this email Spam? yes/no
		- Is the transaction fraudulent?
	- Binary classification is true/false
	- False is also called negative class, and true is called positive class
	- Consider a training set to determine if a tumor is malignant
	- You could plot your data, make a linear regression line, and a threshold
	- Plotting this, we plot malignant at y=1 and benign at 0
	- If the model outputs a value greater than the threshold value, consider it malignant
	- ![Screenshot 2023-03-08 at 6.14.22 PM.png](../assets/Screenshot_2023-03-08_at_6.14.22_PM_1678335505241_0.png)
	- If we have outliers to the right, the dividing line, or decision boundary can shift too far right
	- Note: even though the name logistic regression has the word regression in it, it's used for binary classification
	- ## Classification lab
	  collapsed:: true
		- One variable vs two variable plot
		- ![Screenshot 2023-03-08 at 9.03.32 PM.png](../assets/Screenshot_2023-03-08_at_9.03.32_PM_1678345429748_0.png)
		- In the first plot, positive results are red x and at y=1, negative results are blue O's at y=0
		- With linear regression, the values could have been anything, but with logistic regression, it's 0 or 1
		- The second graph shows shows two variables, where y is not available
		- This is when the model takes two things into account, for example, the first one may just look at size
		- A similar plot in linear regression would be 3 dimensional
	- ## Logistic Regression
		- Logistic regression will fit an s shaped curve.
		- ![Screenshot 2023-03-11 at 6.58.13 PM.png](../assets/Screenshot_2023-03-11_at_6.58.13_PM_1678597216886_0.png){:height 325, :width 587}
		- ### Sigmoid function
			- Also called logistic function
			- The sigmoid function looks like this, where 0 is in the middle, unlike the last graph
			- ![Screenshot 2023-03-11 at 7.00.04 PM.png](../assets/Screenshot_2023-03-11_at_7.00.04_PM_1678597226318_0.png)
			- $g(z)=\frac{1}{1+e^{-z}}$ which ranges between 0 and 1
			  id:: 640d5c6c-c03c-4d14-9789-c9af611ba2ab
			- When z is large, g(z) is about 1
			- When z is a small negative number, it's approzamately zero
			- When z=0, g(z) is about .5
			- ### Explaining Sigmoid function
				- remember $f_{\vec{w},b}(\vec{x})$
				- store this function in in $z$ where $z=\vec{w} \cdot \vec{x} + b$
				- Next step, pass value of z to sigmoid function
				- $g(z)=\frac{1}{1+e^{-z}}$
				- When you put these equations together, you get the logistic regression model
				- Fully expanded out logistic regression model is:
				- $f_{\vec{w},b}(\vec{x})=\frac{1}{1+e^{-(\vec{w} \cdot \vec{x} + b)}}$
				- This function inputs  the feature x, and outputs a number between 0 and 1
			- Think of logistic regression output as the probability the output will be 1
			- If you are predicting tumor, and the output is .7, then it means there's a 70% chance of being 1
			- So there's a 70% chance that it's malignant
			- What is the chance that it's not malignant?
			- It must be zero or one, so the numbers must add up to one: $P(y=0)+P(y=1)=1$
			- You may see this notation when reading about logistic regression
				- $f_{\vec{w},b}(\vec{x})=P(y=1|\vec{x};\vec{w},b)$
				- This means "probability of y=1, given the input feature x, and parameters w and b"
				- The semicolon means w and b are parameters that affect the computation, given the input $\vec{x}$
	- ## Logistic Regression Lab - Sigmoid function
	  collapsed:: true
		- We start by using our linear regression model $f_{\mathbf{w},b}(\mathbf{x}^{(i)}) = \mathbf{w} \cdot  \mathbf{x}^{(i)} + b$, to predict $y$ given $x$
		- Since we're doing classifications, we want our output to be either 0 or 1
		- We can use the sigmoid function to map all input values to values between 0 and 1
		- The sigmoid function formula is $g(z) = \frac{1}{1+e^{-z}}$
		- The input z can be a single scalar value or a vector containing multiple values, and our implementation needs to cover both
		- numpy has a function `exp()` which allows you to calculate the exponential $e^z$ in input array z
			- #### vector input to `exp`
				- ```python
				  # Input is an array. 
				  input_array = np.array([1,2,3])
				  exp_array = np.exp(input_array)
				  #output exp_array = [ 2.72  7.39 20.09]
				  ```
			- #### Scalar input to `exp`
				- ```python
				  # Input is a single number
				  input_val = 1  
				  exp_val = np.exp(input_val)
				  # output exp_val = 2.7182
				  ```
		- ### Sigmoid Implementation
			- ```python
			  def sigmoid(z):
			      """
			      Compute the sigmoid of z
			  
			      Args:
			          z (ndarray): A scalar, numpy array of any size.
			  
			      Returns:
			          g (ndarray): sigmoid(z), with the same shape as z
			           
			      """
			  
			      g = 1/(1+np.exp(-z))
			     
			      return g
			  ```
		- ![Screenshot 2023-03-11 at 7.41.15 PM.png](../assets/Screenshot_2023-03-11_at_7.41.15_PM_1678599687873_0.png)
		-
	- ## Decision Boundary
	  collapsed:: true
		- Remember how the logistic regression is computed
			- Compute $f_{\vec{w},b}(\vec{x})$ as  $z$ where $z=\vec{w} \cdot \vec{x} + b$
			- Fully expanded is $f_{\vec{w},b}(\vec{x})=\frac{1}{1+e^{-(\vec{w} \cdot \vec{x} + b)}}$
			- And you interpret this as the probability that y=1, given $\vec{x}$, and parameters $\vec{w}$ and $b$
				- $f_{\vec{w},b}(\vec{x})=P(y=1|\vec{x};\vec{w},b)$
			- This would be something like 0.7 or 0.3
		- You can set a threshold of something like 0.5, then you predict $\hat{y}$=1 / yes when greater than .5, or $\hat{y}$=0, no when less than .5
		- When is $g(z)$ /  $f_{\vec{w},b}(\vec{x})$ greater than .5? when $z$ is greater than 0
		- When is z greater than 0? Whenever $z=\vec{w} \cdot \vec{x} + b > 0$
		- ![Screenshot 2023-03-27 at 6.00.09 PM.png](../assets/Screenshot_2023-03-27_at_6.00.09_PM_1679976028869_0.png)
		- In this example we have two features
		- Lets assume weights w are 1 and b is -3
		- $f_{\vec{w},b}(\vec{x})=g(z)=g(w_1x_1+w_2x_2+b)$
		- Consider when $z=\vec{w} \cdot \vec{x} + b$
		- This is where we're neutral if the value is 0 or 1
		- In this case, when w weights are 1, we can find the values of x where $z=0$
		- $z=x_1+x_2-3=0$
		- $x_1+x_2 = 3$
		- This corresponds to this line, which is called the decision boundary
		- Values to the right are predicted to be 1, and to the left are 0
		- ![Screenshot 2023-03-27 at 6.06.01 PM.png](../assets/Screenshot_2023-03-27_at_6.06.01_PM_1679976372411_0.png)
		- ### Non linear decision boundary
			- What happens when the decision boundary isn't a straight line?
			- You can use polynomials
			- Consider $g(z)=g(w_1{x_1}^2+w_2{x_2}^2+b)$
			- Decisision boundary is:
				- ${x_1}^2+{x_2}^2 = 1$
				- This looks like a circle
				- ![Screenshot 2023-03-27 at 7.04.15 PM.png](../assets/Screenshot_2023-03-27_at_7.04.15_PM_1679980022486_0.png)
			- Can also be an ellipse, or even something more complicated, like a complex shape