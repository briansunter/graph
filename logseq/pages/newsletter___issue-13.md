public:: true
tags:: [[newsletter]] [[logseq]] [[gpt]] [[AI]] 
categories:: [[newsletter]] 
coverimage:: /assets/Screenshot_2023-03-14_at_3.01.45_PM_1678842139677_0.png
date:: 2023-07-27
description:: Generating insights and visualizations about coffee using ChatGPT
blogtitle:: Analyzing Coffee Quality with the ChatGPT Code Interpreter

- One of my favorite new features of ChatGPT is the "code interpreter," which allows ChatGPT to execute code and read data files you upload.
- You can upload a data file, then ask ChatGPT questions, and ChatGPT will write code to analyze the data and create visualizations based on your questions. Now you can produce cool visualization based on data with very little effort.
- It's surprisingly intelligent, where ChatGPT will look at the structure of your data, automatically clean it, and decide how to analyze it.
- I found an interesting dataset on Kaggle called ["Coffee Quality Data"](https://www.kaggle.com/datasets/fatihb/coffee-quality-data-cqi). It contains coffee reviews, with 100-point scores, along with information about the coffee, such as its country of origin, altitude, preparation method, and variety, and information about its flavor profile, such as acidity and sweetness.
- I'm interested in examining this dataset to answer questions like: "Which countries produce the best coffee?" and "What are the differences in flavor profiles between countries and preparation methods?
- ## Loading and Cleaning Data
  collapsed:: true
	- One of my favorite features of the ChatGPT code interpreter is its ability to quickly clean data and do a preliminary analysis.
	- The coffee dataset is of decent quality but has quite a few issues, like missing data, poorly formatted data, and low sample sizes for some data. This is usually a manual, laborious process and is inconvenient for quick exploratory analysis. The ChatGPT code interpreter does an excellent job of automatically detecting the most critical data and fixing problems.
	- It starts by loading the dataset and printing it to discover the most interesting columns of data.
	- ### Load, print, and preliminary analysis
		- ```python
		  # First, let's load and inspect the dataset
		  import pandas as pd
		  
		  # Load the data
		  df = pd.read_csv('/mnt/data/coffee_data.csv')
		  
		  # Display the first few rows of the dataframe
		  df.head()
		  ```
		- #+BEGIN_QUOTE
		  The dataset contains 44 columns. Here are a few key ones:
		  Species: The species of the coffee bean.
		  Owner: The owner of the coffee farm.
		  Country.of.Origin: The country where the coffee bean was grown.
		  Farm.Name: The name of the coffee farm.
		  Altitude: The altitude at which the coffee was grown.
		  Region: The region where the coffee was grown.
		  Processing.Method: The method used to process the coffee beans.
		  Aroma, Flavor, Aftertaste, Acidity, Body, Balance, Uniformity, Clean.Cup, Sweetness, Cupper.Points: These are the scores given to the coffee on various attributes by a professional coffee taster (cupper).
		  #+END_QUOTE
		- > Our target variable would be Total.Cup.Points as we are trying to find out what makes the best coffee. The higher the total cup points, the better the coffee is considered to be.
		- > For our analysis, we'll mainly focus on the factors that might affect the coffee quality, such as Country.of.Origin, Variety, Processing.Method, Altitude, and sensory profiles (Aroma, Flavor, Aftertaste, Acidity, Body, Balance).
	- ### Missing Values
		- It checks for missing values and how to handle them
		- ```python
		  # Descriptive statistics
		  desc_stats = df.describe(include='all')
		  
		  # Checking for missing values
		  missing_values = df.isnull().sum()
		  
		  desc_stats, missing_values
		  ```
		- #+BEGIN_QUOTE
		  The dataset has some missing values in several columns:
		  
		  Owner: 7 missing values
		  Country.of.Origin: 1 missing value
		  Farm.Name: 356 missing values
		  Lot.Number: 1041 missing values 
		  #+END_QUOTE
		- It will drop columns with a high amount of missing data or come up with values for the missing data, such as median and mode where appropriate.
	-
	-
	-
- ## Analyzing Data
	- It starts with a quick analysis to show the distribution of the most important data points
	- ### Distribution of Ratings
		- > The left plot shows the distribution of the total cup points, representing the coffee's overall quality. The distribution is approximately normal, with a slight skew towards higher scores, indicating that most of the coffee in this dataset is of good quality.
		- ![image.png](../assets/image_1690423253013_0.png)
	- ### Initial Analysis
		- It starts with an initial analysis by graphing what it thinks are the most important pieces of data
		- #+BEGIN_QUOTE
		  Next, let's examine the relationships between coffee quality (`Total.Cup.Points`) and some potentially influential factors (`Country.of.Origin`, `Variety`, `Processing.Method`, `altitude_mean_meters`, and sensory profiles). We will use box plots to visualize these relationships. For the sake of clarity, we'll only consider the top 5 categories for `Country.of.Origin`, `Variety`, and `Processing.Method`. For sensory profiles, we'll use scatter plots to see the correlation with `Total.Cup.Points`.
		  #+END_QUOTE
		- ![image.png](../assets/image_1690504766314_0.png)
		- #+BEGIN_QUOTE
		  The visualizations suggest that:
		  
		  The highest average coffee quality is from the United States, Papua New Guinea, Ethiopia, Japan, and Kenya.
		  The Yirgacheffe variety and the "Pulped natural / honey" processing method are associated with superior coffee quality.
		  Aroma and flavor scores have a strong positive correlation with coffee quality.
		  Altitude does not exhibit a clear correlation with coffee quality.
		  #+END_QUOTE
	- ## Visualizations
		- I continued asking it questions to generate visualizations, such as "Generate a bar chart for top mean cup scores by country, sorted in descending order.
		- Here are some of my favorite visualizations
		- ## Coffee Quality by Country
			- ![image.png](../assets/image_1690426601354_0.png)
			- ![image.png](../assets/image_1690426630484_0.png){:height 642, :width 413}
		- ## Coffee Quality by Variety
			- ![image.png](../assets/image_1690436660242_0.png)
			- ![image.png](../assets/image_1690436538061_0.png)
			- ## Flavor Profile by Variety
				- How the different varieties compare on different flavor profiles, such as sweetness and acidity.
				- ![image.png](../assets/image_1690435832644_0.png)
		- ## Coffee Quality by Altitude Range
			- The median coffee quality appears to increase with altitude, suggesting that coffee grown at higher altitudes tends to have slightly higher quality.
			- ![image.png](../assets/image_1690426458643_0.png)
		-