- # Overview
	- Extend linear regression to handle multiple input features.
	- Use vectorization to implement multiple linear regression
	- Use feature scaling, feature engineering, and polynomial regression to improve model training
	- Implement linear regression in code
- # Multiple features
	- [Coursera](https://www.coursera.org/learn/machine-learning/lecture/gFuSx/multiple-features)
	- Originally, we had a single feature x, the size, which we used to predict the price of the house
		- ((63dc7846-f4c2-44d4-8ad2-e1e4fb194d25))
		- What if we had multiple features (variables) to predict the price, such as number of bedrooms, floors, age, etc.
		- ![Screenshot 2023-02-07 at 4.41.05 PM.png](../assets/Screenshot_2023-02-07_at_4.41.05_PM_1675824258231_0.png)
		- We will use the notation $x_j$ to show the jth feature, for example $x_1$ $x_2$, etc.
		- n is number of features
		- $\vec{x}^{(i)}$ is features of the ith training example, a list of numbers, or a vector. Also called a row vector
		- $\vec{x}^{(2)}=\begin{bmatrix}1416 & 3 &2 &40 \end{bmatrix}$ in the example above
		- ${x_j}^{(i)}$ is the value of feature j in ith training example, ex ${x_3}^{(2)}=2$
		- Previously $f_{w,b}(x)=wx+b$
		- Now, $f_{w,b}(x)=w_1x_1 + w_2x_2 + w_3x_3 + b$
		- ![Screenshot 2023-02-07 at 4.52.51 PM.png](../assets/Screenshot_2023-02-07_at_4.52.51_PM_1675824784246_0.png)
		- 80 is the base price, assuming no size, bedrooms, etc
		- ## Model with n features
			- Now, $f_{w,b}(x)=w_1x_1 + w_2x_2 + ... + w_nx_n + b$
			- Simpler notation:
			- $\vec{w}=\begin{bmatrix}w_1 & w_2 & w_3 & ... & w_n \end{bmatrix}$
			- $\vec{x}=\begin{bmatrix}x_1 & x_2 & x_3 & ... & x_n \end{bmatrix}$
			- $f_{\vec{w},b}=(\vec{x})=\vec{w} \cdot \vec{x}$
			- $\cdot$ is dot product from linear algebra
- # Vectorization
	- Vectorization allows us to speed up calculations
	- indexing of arrays starts at 1 in linear algebra, use index of 0 in python
	- how do we compute something like this?
	- Now, $f_{w,b}(x)=w_1x_1 + w_2x_2 + ... + w_nx_n + b$
	- Without vectorization, like multiplying everying in a for loop, it's slow
	- ```python
	  f=0
	  for j in range(0,n):
	    f = f + w[j] * x[j]
	  f = f + b
	  ```
	- With vectorization we can use
	- `f=np.dot(w,x) + b`
	- This will run much faster, and the code is shorter
	- It's faster, because it's parallelized
	- ## Gradient Descent
		- `w=np.array([.5, 1.3, ... 3.5])`
		- `d=np.array([.3,.2, ... , 0.4])`
		- compute $w_j=w_j-.1d_j$ for j=1 through 16
		- (.1 is the learning rate)
		- Without vectorization, you would have to update all the weights one at a time in for loops
		- with vectorization, you can update all of them in parallel
- # Numpy vectorization
	- ## Vectors
		- Vectors are ordered arrays of numbers
		- The number of elements in a vector is their dimension, or rank
		- Index of a number in the vector is indicated by a subscript like $x_0$
		- ### Indexing
			- Get an element by position
			- `a[2]`
		- ### Slicing
			- Create an array using `start:stop:step` or a subset
			- ```python
			  #vector slicing operations
			  a = np.arange(10)
			  print(f"a         = {a}")
			  
			  #access 5 consecutive elements (start:stop:step)
			  c = a[2:7:1];     print("a[2:7:1] = ", c)
			  
			  # access 3 elements separated by two 
			  c = a[2:7:2];     print("a[2:7:2] = ", c)
			  
			  # access all elements index 3 and above
			  c = a[3:];        print("a[3:]    = ", c)
			  
			  # access all elements below index 3
			  c = a[:3];        print("a[:3]    = ", c)
			  
			  # access all elements
			  c = a[:];         print("a[:]     = ", c)
			  ```
		- ### Single vector operation
			- ```python
			  a = np.array([1,2,3,4])
			  # negate elements
			  b = -a 
			  
			  # sum all elements
			  b = np.sum(a) 
			  
			  # mean of array
			  b = np.mean(a)
			  
			  # multiply a by a scalar
			  b = 5 * a 
			  
			  # square each element 
			  b = a**2
			  ```
		- ### Multiple vector operations
			- arithmetical and comparison operations work on an element by element basis
			- Vectors must be the same size
			- ```python
			  a = np.array([ 1, 2, 3, 4])
			  b = np.array([-1,-2, 3, 4])
			  a+b
			  # [0 0 6 8]
			  ```
		- ### Dot Product
			- ![C1_W2_Lab04_dot_notrans.gif](../assets/C1_W2_Lab04_dot_notrans_1677295953635_0.gif)
				- Multiplies elements in two vectors then sums their results
				- ```python
				  def my_dot(a, b): 
				      x=0
				      for i in range(a.shape[0]):
				          x = x + a[i] * b[i]
				      return x
				  ```
				- The built in `np.dot(a,b)` function is much faster
				- It uses SIMD to allow multiple operations to be done in parallel
		- ### Course 1 notation
		- Examples will be stored in a 2d matrix called x
		- w will be in a vector
		- Will index examples using `X[i]`
		- ```python
		  X = np.array([[1],[2],[3],[4]])
		  w = np.array([2])
		  c = np.dot(X[1], w)
		  ```
	- ## Matrices
		- Matrices are 2d arrays
		- Denoted by a capital bolded letter like **X**
		- usually, m is number or rows and n is columns
		- in 2d array, first index is code, second is column
		- ![C1_W2_Lab04_Matrices.png](../assets/C1_W2_Lab04_Matrices_1677296706695_0.png)
		- In course 1, 2d matrices usually hold training data
		- The training data is m examples and n features
		- Usually an example is extracted, rather than doing operation directly on matrices
		- ### Matrix creation
			- `a = np.zeros((1, 5))`
			- Manualy specify: `a = np.array([[5], [4], [3]])`
		- ### Indexing
			- TODO look up `arange` and `reshape`
			- `A[2,0]`
			- `A[2]` accessing by row wil return a 1d vector
			- `A[0, 2:7:1]` gets 1d vector from row 2
- # [[Gradient descent]] for multiple linear regression
  id:: 64069af3-03bb-462f-bb8d-cd9addc15804
	- Remember for one feature gradient descent
	  collapsed:: true
		- Update w and b simultaneously and repeat
		- ((63fc17d1-9115-416c-8f28-6c35f4fa06b4))
		- ((0cfb0049-ba52-47b3-8f43-4da56b3c0832))
	- ## Multiple linear regression gradient descent
		- id:: 63fc3fab-4eb6-4ab7-ada2-3eb3bb8afee1
		  $$\begin{align*} \text{repeat}&\text{ until convergence:} \; \lbrace \newline\;
		  & w_j = w_j -  \alpha \frac{\partial J(\mathbf{w},b)}{\partial w_j}  \; & \text{for j = 0..n-1}\newline
		  &b\ \ = b -  \alpha \frac{\partial J(\mathbf{w},b)}{\partial b}  \newline \rbrace
		  \end{align*}$$
		- where, n is the number of features, parameters $w_j$,  $b$, are updated simultaneously
		  id:: 5cb7e36f-aee4-41ae-baff-90dc232b8758
		- and where:
		  id:: 63fc4082-067a-4c88-a825-10771bedd7e5
		- id:: 63fc3fea-0246-484d-9864-8e7768ab1249
		  $$\frac{\partial J(\mathbf{w},b)}{\partial w_j}  = \frac{1}{m} \sum\limits_{i = 0}^{m-1} (f_{\mathbf{w},b}(\mathbf{x}^{(i)}) - y^{(i)})x_{j}^{(i)}$$
		- id:: 63fc4027-4f0a-474d-aa4a-ff8edb89c09e
		- id:: 63fc4020-ea05-48e3-9443-1098de3f4f30
		  $$\frac{\partial J(\mathbf{w},b)}{\partial b}  = \frac{1}{m} \sum\limits_{i = 0}^{m-1} (f_{\mathbf{w},b}(\mathbf{x}^{(i)}) - y^{(i)}) $$
		- m is the number of training examples in the data set
		- $f_{\mathbf{w},b}(\mathbf{x}^{(i)})$ is the model's prediction, while $y^{(i)}$ is the target value
		- ### Fully expanded
			- $$w_1=w_1-\alpha  \frac{1}{n}\sum_{i=1}^{n}(f_{\vec{w},b}(\vec{x}^{(i)}) - y^{(i)})x_1^{(i)}$$
			- Update all the w's from 1 to n
			-
			- $$b=b-\alpha\frac{1}{n}\sum_{i=1}^{n}(f_{\vec{w},b}(\vec{x}^{(i)}) - y^{(i)})$$
			- Simultaneously update both and repeat
		- ### Normal Equation
			- An alternative way to find w and b for linear regression
			- This works only for linear regression
			- Solves for w and b to minimize cost
			- Can use a linear algebra library to solve directly
			- Doesn't generalize other learning algorithms
			- slow when features is large (> 10000)
			- Normal equation may be used in libraries to  implement linear regression
			- Gradient descent is the reccomended way to find w and b
- # Multiple linear regression lab
	- ## Notation
	  id:: 63fc1c69-b02a-404d-a109-2c12f4de508b
		- ### General Notation
		  id:: 63fc1d44-7566-42ef-85b3-0f2cdb97a18e
			- id:: 63fc1c56-34ab-425c-8520-30f954a60759
			  |  Notation   | Description | Python (if applicable) |
			  |: ------------|: ------------------------------------------------------------||
			  | $a$ | scalar, non bold                                                      ||
			  | $\mathbf{a}$ | vector, bold                                                 ||
			  | $\mathbf{A}$ | matrix, bold capital                                         ||
		- ### Regression Notation
		  id:: 63fc1d38-780d-4a81-a4b9-6244744b1a06
			- id:: 63fc1d12-ebee-4268-b776-8caa7adaa901
			  |  Notation   | Description | Python (if applicable) |
			  |  $\mathbf{X}$ | training example matrix                  | `X_train` |   
			  |  $\mathbf{y}$  | training example  targets                | `y_train` |
			  |  $\mathbf{x}^{(i)}$, $y^{(i)}$ | $i_{th}$Training Example | `X[i]`, `y[i]`|
			  | m | number of training examples | `m`|
			  | n | number of features in each example | `n`|
			  |  $\mathbf{w}$  |  parameter: weight,                       | `w`    |
			  |  $b$           |  parameter: bias                                           | `b`    |     
			  | $f_{\mathbf{w},b}(\mathbf{x}^{(i)})$ | The result of the model evaluation at $\mathbf{x^{(i)}}$ parameterized by $\mathbf{w},b$: $f_{\mathbf{w},b}(\mathbf{x}^{(i)}) = \mathbf{w} \cdot \mathbf{x}^{(i)}+b$  | `f_wb` |
	- The example is predicting housing prices
	- | Size (sqft) | Number of Bedrooms  | Number of floors | Age of  Home | Price (1000s dollars)  |   
	  | ----------------| ------------------- |----------------- |--------------|-------------- |  
	  | 2104            | 5                   | 1                | 45           | 460           |  
	  | 1416            | 3                   | 2                | 40           | 232           |  
	  | 852             | 2                   | 1                | 35           | 178           |
	- ```python
	  X_train = np.array([[2104, 5, 1, 45], [1416, 3, 2, 40], [852, 2, 1, 35]])
	  y_train = np.array([460, 232, 178])
	  ```
	- ## Matrix Containing Examples
		- Similar to the table above, examples are stored in a NumPy matrix `X_train`. Each row of the matrix represents one example. When you have $m$ training examples ( $m$ is three in our example), and there are $n$ features (four in our example), $\mathbf{X}$ is a matrix with dimensions ($m$, $n$) (m rows, n columns).
		  
		  
		  $$\mathbf{X} = 
		  \begin{pmatrix}
		   x^{(0)}_0 & x^{(0)}_1 & \cdots & x^{(0)}_{n-1} \\ 
		   x^{(1)}_0 & x^{(1)}_1 & \cdots & x^{(1)}_{n-1} \\
		   \cdots \\
		   x^{(m-1)}_0 & x^{(m-1)}_1 & \cdots & x^{(m-1)}_{n-1} 
		  \end{pmatrix}
		  $$
		  notation:
		- $\mathbf{x}^{(i)}$ is vector containing example i. $\mathbf{x}^{(i)} = (x^{(i)}_0, x^{(i)}_1, \cdots,x^{(i)}_{n-1})$
		- $x^{(i)}_j$ is element j in example i. The superscript in parenthesis indicates the example number while the subscript represents an element.
	- ## Parameter vector w, b
	  
	  * $\mathbf{w}$ is a vector with $n$ elements.
		- Each element contains the parameter associated with one feature.
		- in our dataset, n is 4.
		- notionally, we draw this as a column vector
		  
		  $$\mathbf{w} = \begin{pmatrix}
		  w_0 \\ 
		  w_1 \\
		  \cdots\\
		  w_{n-1}
		  \end{pmatrix}
		  $$
		- $b$ is a scalar parameter.
	- ```python
	  b_init = 785.1811367994083
	  w_init = np.array([ 0.39133535, 18.75376741, -53.36032453, -26.42131618])
	  ```
- ## Model Prediction With Multiple Variables
	- The model's prediction with multiple variables is given by the linear model:
	  
	  $$ f_{\mathbf{w},b}(\mathbf{x}) =  w_0x_0 + w_1x_1 +... + w_{n-1}x_{n-1} + b \tag{1}$$
	- or in vector notation:
	- $$ f_{\mathbf{w},b}(\mathbf{x}) = \mathbf{w} \cdot \mathbf{x} + b  \tag{2} $$
	- where $\cdot$ is a vector `dot product`
- ## For loop prediction
  collapsed:: true
	- loop over each element, performing the multiply with its parameter and then adding the bias parameter at the end.
	- ```python
	  def predict_single_loop(x, w, b): 
	      """
	      single predict using linear regression
	      
	      Args:
	        x (ndarray): Shape (n,) example with multiple features
	        w (ndarray): Shape (n,) model parameters    
	        b (scalar):  model parameter     
	        
	      Returns:
	        p (scalar):  prediction
	      """
	      n = x.shape[0]
	      p = 0
	      for i in range(n):
	          p_i = x[i] * w[i]  
	          p = p + p_i         
	      p = p + b                
	      return p
	  ```
- # Numpy Vector Single Prediction
	- ```python
	  def predict(x, w, b): 
	      """
	      single predict using linear regression
	      Args:
	        x (ndarray): Shape (n,) example with multiple features
	        w (ndarray): Shape (n,) model parameters   
	        b (scalar):             model parameter 
	        
	      Returns:
	        p (scalar):  prediction
	      """
	      p = np.dot(x, w) + b     
	      return p  
	  ```
- # Compute cost with multiple variables
	- The equation for the [[cost function]] with multiple variables $J(\mathbf{w},b)$ is:
	  id:: 64069af3-f9a4-476b-8ccd-9928e3f730e3
	- id:: 64069af3-9b51-4efc-8ad3-ce3006a38432
	  $$J(\mathbf{w},b) = \frac{1}{2m} \sum\limits_{i = 0}^{m-1} (f_{\mathbf{w},b}(\mathbf{x}^{(i)}) - y^{(i)})^2 \tag{3}$$
	- where:
	  id:: 64069af3-4639-44f4-b223-9e0589365480
	- id:: 6406f79f-e73d-4ef5-b148-eb8b84232129
	  $$ f_{\mathbf{w},b}(\mathbf{x}^{(i)}) = \mathbf{w} \cdot \mathbf{x}^{(i)} + b  \tag{4} $$
	- Compared the predicted values using vectors
	- In contrast to previous labs, $\mathbf{w}$ and $\mathbf{x}^{(i)}$ are vectors rather than scalars supporting multiple features.
	- ```python
	  def compute_cost(X, y, w, b): 
	      """
	      compute cost
	      Args:
	        X (ndarray (m,n)): Data, m examples with n features
	        y (ndarray (m,)) : target values
	        w (ndarray (n,)) : model parameters  
	        b (scalar)       : model parameter
	        
	      Returns:
	        cost (scalar): cost
	      """
	      m = X.shape[0]
	      cost = 0.0
	      for i in range(m):                                
	          f_wb_i = np.dot(X[i], w) + b           #(n,)(n,) = scalar (see np.dot)
	          cost = cost + (f_wb_i - y[i])**2       #scalar
	      cost = cost / (2 * m)                      #scalar    
	      return cost
	  ```
- # Gradient descent in practice
	- ## Feature scaling
		- Consider the example of predicting the price of a house using two features
		- $x_1$ = size
			- large range, 300-2000
		- $x_2$ number of bedrooms
			- small range, 0-5
		- price = $w_1x_1 + w_2x_2 + b$
		- consider training example $x_1=2000$ , $x_2=5$, price=500k
		- What are reasonable values for $w1,w2$
		- Consider $w_1=50$, $w_2=0.1$ and $b=50$
			- $price=50*2000+.01*5+50$
			- predicted price is $100,050.5k, which is way over the true value of 500k, so it's not a good choice of parameter values
		- Consider the opposite weights $w_1=.1$, $w_2=50$ and $b=50$
			- $price=0.1*2000k+50*5+50$
			- which is 500k, which exactly predicts the true value
		- When the possible range of features is large, relative to the other features, a good model will choose a relatively small value for parameter
		- If you scatter plot the training data where the range of one of the features is much larger, you'll notice the horizontal axis is on a much larger scale
		- ![Screenshot 2023-02-28 at 10.38.49 AM.png](../assets/Screenshot_2023-02-28_at_10.38.49_AM_1677616849786_0.png)
		- If you contour plot the cost function, youll notice the vertical axis has a larger range
		- This is because small changes to the narrow range, cause big changes to the cost function
		- ![Screenshot 2023-02-28 at 10.41.04 AM.png](../assets/Screenshot_2023-02-28_at_10.41.04_AM_1677616896864_0.png)
		- When ranges are skewed like this, gradient descent may bounce back and forth before finding the global minimum
		- In situations like this, it's useful to scale the features
		- Scaling the features means the values range from 0-1
		- Now the features have the same range
		- ![Screenshot 2023-02-28 at 10.47.34 AM.png](../assets/Screenshot_2023-02-28_at_10.47.34_AM_1677617263989_0.png)
		- This makes it easier for gradient descent to find a more direct path to the global minimum
		- ### How to scale features
			- You could divide each value by the maximum
			- So if $300 <= x_1 <= 2000$
			- Divide each value by the maximum $$\frac{x_1}{2000}$$
			- So now $0.15 <= x_{1,scaled} <= 1$
			- ### Mean normalization
				- You rescale the values centered around 0, so the values range from -1 to 1
				- ![Screenshot 2023-02-28 at 11.11.33 AM.png](../assets/Screenshot_2023-02-28_at_11.11.33_AM_1677618702007_0.png)
				- First find the mean of $x_1$ and call the mean $M_1$
				- We find the mean is 600
				- $$x_1=\frac{x_1-M_1}{max-min}$$
				- In our example
				- $$x_1=\frac{x_1-600}{2000-300}$$
				- So $x_1$ now ranges from $-.18 <= x_1 <= 0.82$
			- ### Z-score normalization
				- TODO learn about standard deviation
				- TODO learn about gaussian / normal distribution
				- You calculate the standard deviation of each feature
				- Calculate the mean as well as the standard deviation
				- Standard deviation is usuallu signified by $\sigma$
				- $$x_1=\frac{x_1-M_1}{\sigma}$$
				- In this case $x_1$ ranges from $-0.67 <= x_1 <= 3.1$
			- As a rule of thumb, aim for between -1 to 1
			- Small ranges of values are ok, if it ranges from -100 to 100 you probably want to scale
			- Also, if you have a small range like -.0001 to .0001, you should rescale
			- Feature rescaling usually doesn't make things worse, so when in doubt feel free to rescale
	- ## Checking gradient descent for convergence
		- Let's learn to recognize what a well running implementation of gradient descent looks like
		- By recognizing when it's running well, it will help us choose a good learning rate $\alpha$
		- Remember the function for gradient descent
		- ((63fc3fab-4eb6-4ab7-ada2-3eb3bb8afee1))
		- difference between bold w and arrow w?
			- For representing a vector, the common notation is lower case, upright boldface type, as in **v**. The [International Organization for Standardization](https://en.wikipedia.org/wiki/International_Organization_for_Standardization) (ISO) recommends either bold italic serif, as in **v**, or non-bold italic serif accented by a right arrow, as in $\vec {v}$
		- Remember the job of gradient descent is to find parameters w and b to optimize the cost function J
		- ![Screenshot 2023-02-28 at 11.34.22 AM.png](../assets/Screenshot_2023-02-28_at_11.34.22_AM_1677620127723_0.png)
		- Note, the horizontal axis is number of iterations, not a parameter
		- This graph is called the learning curve
		- Each point on the curve is a cost, with a learned value of w and b that has been learned so far
		- Ideally J should decrease after every iteration
		- If J ever increases after an iteration, it means $\alpha$ is chosen poorly, probably too large
		- We can also see after 300 iterations, the cost stops decreasing
		- When the learning curve levels off, we say gradient descent has converged
		- It's difficult to tell in advance how many iterations gradient descent needs to converge
		- ### Automatic conversion test
			- Let epison $\epsilon$ be a very small value like .001
			- If $J(\vec{w},b)$ decreases by less than $\epsilon$ in one iteration, declare convergence
			- Choosing epsilon is difficult, so you may want to look at graph instead
	- ## Choosing a learning rate
		- When looking at your learning rate, if the cost goes up and down, the learning rate may be too large.
		- ![Screenshot 2023-02-28 at 11.54.08 AM.png](../assets/Screenshot_2023-02-28_at_11.54.08_AM_1677621305502_0.png){:height 201, :width 520}
		- If the learning rate is too big, the cost function may overshoot the minimum
		- ![Screenshot 2023-02-28 at 11.54.58 AM.png](../assets/Screenshot_2023-02-28_at_11.54.58_AM_1677621313533_0.png)
		- Very small value of alpha should be a debugging step, since it's not effecient
		- Try a range of values, and pick one that decreases the learning rate quickly, but still converges
		-
- ## Feature scaling and learning rate lab
	- # Goals
		- Utilize the multiple variables routines developed in the previous lab
		- run Gradient Descent on a data set with multiple features
		- explore the impact of the *learning rate alpha* on gradient descent
		- improve performance of gradient descent by *feature scaling* using z-score normalization
	- Remember the notation
	- # ((63fc1c69-b02a-404d-a109-2c12f4de508b))
		- ((63fc1d44-7566-42ef-85b3-0f2cdb97a18e))
			- ((63fc1c56-34ab-425c-8520-30f954a60759))
		- ((63fc1d38-780d-4a81-a4b9-6244744b1a06))
			- ((63fc1d12-ebee-4268-b776-8caa7adaa901))
			- |$\frac{\partial J(\mathbf{w},b)}{\partial w_j}$| the gradient or partial derivative of cost with respect to a parameter $w_j$ |`dj_dw[j]`| 
			  |$\frac{\partial J(\mathbf{w},b)}{\partial b}$| the gradient or partial derivative of cost with respect to a parameter $b$| `dj_db`|
		-
	- # Predicating housing prices
		- We are predicting housing prices again based on multiple variables
		- We can plot each feature against the target price, to give an indiciation of which features have the strongest influence on the price
		- ```python
		  fig,ax=plt.subplots(1, 4, figsize=(12, 3), sharey=True)
		  for i in range(len(ax)):
		      ax[i].scatter(X_train[:,i],y_train)
		      ax[i].set_xlabel(X_features[i])
		  ax[0].set_ylabel("Price (1000's)")
		  plt.show()
		  ```
		- ![Screenshot 2023-03-04 at 2.05.26 PM.png](../assets/Screenshot_2023-03-04_at_2.05.26_PM_1677974824513_0.png)
		- ### Remember gradient descent with multiple variables
			- ((63fc3fab-4eb6-4ab7-ada2-3eb3bb8afee1))
			- ((5cb7e36f-aee4-41ae-baff-90dc232b8758))
			- ((63fc4082-067a-4c88-a825-10771bedd7e5))
			- ((63fc3fea-0246-484d-9864-8e7768ab1249))
			- ((63fc4027-4f0a-474d-aa4a-ff8edb89c09e))
			- ((63fc4020-ea05-48e3-9443-1098de3f4f30))
		- The learning rate controls the size of the update to the parameters
		-
- ## Feature Engineering
	- Choosing the right features is essential for your algorithm working well
	- Consider the depth and width of the lot size
	- instead of using depth and width as separate features, you could calculate area and use that as a feature instead
	- Creating a feature is using intuition to design new features by transforming or combining original features
	- ### Polynomial regression
		- Maybe the data doesn't show a straight line and and you want a curved one
		- You may not want a quadratic model, because the line will eventually go down
		- A cubic function will always goes up
		- $f_{\vec{w},b}(x)=w_1x+w_2x^2 + w_3x^3 + b$
		- feature scaling becomes even more important in this case
		- Another alternative is to use the square root of x
		- $f_{\vec{w},b}(x)=w_1x+w_2\sqrt{x}+ b$
		- Is less steep than cubic
		- course 2 shows different ways of choosing features
		-
		-
- # Linear Regression using scikit-learn
	- Utilize  scikit-learn to implement linear regression using Gradient Descent
	- Scikit-learn has a gradientt regression model [sklearn.linear_model.SGDRegressor](https://scikit-learn.org/stable/modules/generated/sklearn.linear_model.SGDRegressor.html#examples-using-sklearn-linear-model-sgdregressor).
	- [sklearn.preprocessing.StandardScaler](https://scikit-learn.org/stable/modules/generated/sklearn.preprocessing.StandardScaler.html#sklearn.preprocessing.StandardScaler) will perform z-score normalization as in a previous lab. Here it is referred to as 'standard score'.
	- ### Scale/normalize the training data
		- ```python
		  scaler = StandardScaler()
		  X_norm = scaler.fit_transform(X_train)
		  ```
		- ### Create and fit the regression model
			- ```python
			  sgdr = SGDRegressor(max_iter=1000)
			  sgdr.fit(X_norm, y_train)
			  ```
		- ### View parameters
		- Note, the parameters are associated with the *normalized* input data. The fit parameters are very close to those found in the previous lab with this data.
		  
		  
		  ```
		  b_norm = sgdr.intercept_
		  ```
		  
		  ```
		  w_norm = sgdr.coef_
		  ```
		- ### Make predictions
			- Predict the targets of the training data. Use both the `predict` routine and compute using 𝑤� and 𝑏�.
			- ```
			  # make a prediction using sgdr.predict()
			  y_pred_sgd = sgdr.predict(X_norm)
			  
			  # make a prediction using w,b. 
			  y_pred = np.dot(X_norm, w_norm) + b_norm
			  ```
		-
- # Linear regression assignment [[python]]
	- What is .shape numpy
	  collapsed:: true
		- `arr = np.array([[1, 2, 3, 4], [5, 6, 7, 8]])`
			- `(2, 4)`
		- https://stackoverflow.com/questions/22053050/difference-between-numpy-array-shape-r-1-and-r
			- The best way to think about NumPy arrays is that they consist of two parts, a *data buffer* which is just a block of raw elements, and a *view* which describes how to interpret the data buffer.
			- ```
			  >>> a = numpy.arange(12)
			  >>> a
			  array([ 0,  1,  2,  3,  4,  5,  6,  7,  8,  9, 10, 11])
			  >>> a.shape
			  (12,)
			  ```
		- TODO learn numpy reshape
	- Helpful to visualize data
	- since 2d, profit and population, you can use scatter plot
	- ```python
	  # Create a scatter plot of the data. To change the markers to red "x",
	  # we used the 'marker' and 'c' parameters
	  plt.scatter(x_train, y_train, marker='x', c='r') 
	  
	  # Set the title
	  plt.title("Profits vs. Population per city")
	  # Set the y-axis label
	  plt.ylabel('Profit in $10,000')
	  # Set the x-axis label
	  plt.xlabel('Population of City in 10,000s')
	  plt.show()
	  ```
	- ![Screenshot 2023-03-06 at 3.07.35 PM.png](../assets/Screenshot_2023-03-06_at_3.07.35_PM_1678151266047_0.png)
	- ## Linear Regression Refresher
		- [[deeplearning.ai/Supervised Learning/linear-regression]]
		- [[test]]
		- The model function for linear regression, which is a function that maps from `x` (city population) to `y` (your restaurant's monthly profit for that city) is represented as
		- ((63bcaa99-69da-4bbe-aaac-f78cae481c4d))
		- To train A linear regression modek, find the best w and b parameters that fit your dataset
		- You can evaluate how well f and b fit your dataset using the cost function $J(w,b)$
		- The parameters w,b that fit your dataset the best are the ones that minimize the cost J
		- You can use gradient descent to find the values J(w,b) that minimize cost
	- ## Compute Cost
		- Gradient descent is repeated steps to adjust the values of (w,b) to get a smaller cost J(w,b)
		- It's helpful to monitor/graph the cost over time to monitor progress
		-
		- $$J(w,b) = \frac{1}{2m} \sum\limits_{i = 0}^{m-1} (f_{w,b}(x^{(i)}) - y^{(i)})^2$$
			- The squared term applies to the difference between the predicted value and the actual value for each example in the sum. Specifically, it means that we square the difference between the predicted value $\hat{y}^{(i)}=f_{w,b}(x^{(i)})$ and the actual value $y^{(i)}$ for each example $i$ before summing over all examples. The result of the sum is the total squared error of the model's predictions.
		- You can think of $f_{w,b}(x^{(i)})$  as the model's prediction of your restaurant's profit, as opposed to $y^{(i)}$, which is the actual profit that is recorded in the data.
		- For linear regression with one variable, the prediction of the model $f_{w,b}$ for an example $x^{(i)}$ is representented as:
		- $$ f_{w,b}(x^{(i)}) = wx^{(i)} + b$$
		- This is a straight line with intercept $b$ and slope $w$
		- ```python
		  # UNQ_C1
		  # GRADED FUNCTION: compute_cost
		  
		  def compute_cost(x, y, w, b): 
		      """
		      Computes the cost function for linear regression.
		      
		      Args:
		          x (ndarray): Shape (m,) Input to the model (Population of cities) 
		          y (ndarray): Shape (m,) Label (Actual profits for the cities)
		          w, b (scalar): Parameters of the model
		      
		      Returns
		          total_cost (float): The cost of using w,b as the parameters for linear regression
		                 to fit the data points in x and y
		      """
		      # number of training examples
		      m = x.shape[0] 
		      
		      # You need to return this variable correctly
		      total_cost = 0
		      
		      for i in range(m):
		          pred = w*x[i] + b
		          costi = (pred - y[i])**2
		          total_cost += costi
		          total_cost = total_cost / (2 * m)
		  
		      return total_cost
		  ```
		- [[Python]] iterate over list
			- ```python
			  # Python3 code to iterate over a list
			  list = [1, 3, 5, 7, 9]
			    
			  # Using for loop
			  for i in list:
			      print(i)
			  ```
			- Use `enumerate` to get the index of the array
			- ```python
			  for idx, x in enumerate(xs):
			      print(idx, x)
			  ```
	- ## Compute Gradient Descent
		- Remember:
			-
			- ((63fc19c1-cff0-4283-b8f3-a6bbf1e9bf8f))
				- ((63fc19c1-da89-4653-a16e-378a268c7618))
				- ((63fc19c1-78f4-402e-8c9c-42e3f22e5b9c))
				- ((63fc19c1-2a98-44ea-a4ac-df0d0874f94d))
			- ((63fc19c1-805d-4c85-8449-aac39f1fa61a))
				- ((63ca5105-a634-4e43-a44c-0b7607724217))
				- ((63ca5105-103e-460b-93d6-1371828893da))
		- ### Gradient
			- ```python
			  # UNQ_C2
			  # GRADED FUNCTION: compute_gradient
			  def compute_gradient(x, y, w, b): 
			      """
			      Computes the gradient for linear regression 
			      Args:
			        x (ndarray): Shape (m,) Input to the model (Population of cities) 
			        y (ndarray): Shape (m,) Label (Actual profits for the cities)
			        w, b (scalar): Parameters of the model  
			      Returns
			        dj_dw (scalar): The gradient of the cost w.r.t. the parameters w
			        dj_db (scalar): The gradient of the cost w.r.t. the parameter b     
			       """
			      
			      # Number of training examples
			      m = x.shape[0]
			      
			      # You need to return the following variables correctly
			      dj_dw = 0
			      dj_db = 0
			      
			      ### START CODE HERE ###
			      for i in range(m):
			          predict = w * x[i] + b - y[i]
			          dj_db += predict
			          dj_dw += predict * x[i]
			          
			      dj_dw = dj_dw/m
			      dj_db = dj_db/m
			      
			      ### END CODE HERE ### 
			  
			      return dj_dw, dj_db
			  ```
		- ### Gradient Descent
			- ```python
			  def gradient_descent(X, y, w_in, b_in, cost_function, gradient_function, alpha, num_iters): 
			      """
			      Performs batch gradient descent to learn w and b. Updates w and b by taking 
			      num_iters gradient steps with learning rate alpha
			      
			      Args:
			        X (ndarray (m,n))   : Data, m examples with n features
			        y (ndarray (m,))    : target values
			        w_in (ndarray (n,)) : initial model parameters  
			        b_in (scalar)       : initial model parameter
			        cost_function       : function to compute cost
			        gradient_function   : function to compute the gradient
			        alpha (float)       : Learning rate
			        num_iters (int)     : number of iterations to run gradient descent
			        
			      Returns:
			        w (ndarray (n,)) : Updated values of parameters 
			        b (scalar)       : Updated value of parameter 
			        """
			      
			      # An array to store cost J and w's at each iteration primarily for graphing later
			      J_history = []
			      w = copy.deepcopy(w_in)  #avoid modifying global w within function
			      b = b_in
			      
			      for i in range(num_iters):
			  
			          # Calculate the gradient and update the parameters
			          dj_db,dj_dw = gradient_function(X, y, w, b)   ##None
			  
			          # Update Parameters using w, b, alpha and gradient
			          w = w - alpha * dj_dw               ##None
			          b = b - alpha * dj_db               ##None
			        
			          # Save cost J at each iteration
			          if i<100000:      # prevent resource exhaustion 
			              J_history.append( cost_function(X, y, w, b))
			  
			          # Print cost every at intervals 10 times or as many iterations if < 10
			          if i% math.ceil(num_iters / 10) == 0:
			              print(f"Iteration {i:4d}: Cost {J_history[-1]:8.2f}   ")
			          
			      return w, b, J_history #return final w,b and J history for graphing
			  ```