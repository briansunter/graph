title:: A Gentle Introduction to Bayes Theorem for Machine Learning (highlights)
author:: [[Jason Brownlee]]
full-title:: "A Gentle Introduction to Bayes Theorem for Machine Learning"
category:: #articles
url:: https://machinelearningmastery.com/bayes-theorem-for-machine-learning/
tags:: #[[ai]] #[[math]]

- Highlights first synced by [[Readwise]] [[Feb 20th, 2023]]
	- **Marginal Probability**: The probability of an event irrespective of the outcomes of other random variables, e.g. P(A) ([View Highlight](https://read.readwise.io/read/01gg1phrbj6tvaxe2myzhb9hhd))
	- **Joint Probability**: Probability of two (or more) simultaneous events, e.g. P(A and B) or P(A, B). ([View Highlight](https://read.readwise.io/read/01gg1pj2jmv0dr5tcebj6zmht2))
	- **Conditional Probability**: Probability of one (or more) event given the occurrence of another event, e.g. P(A given B) or P(A | B) ([View Highlight](https://read.readwise.io/read/01gg1pjdg2v6eve6ezf0p8nzw3))
	- The joint probability can be calculated using the conditional probability; for example:
	  
	  •   P(A, B) = P(A | B) * P(B) ([View Highlight](https://read.readwise.io/read/01gg1pm8896y3pvhxzp00hj3md))
	- This is called the product rule. Importantly, the joint probability is symmetrical, meaning that:
	  
	  •   P(A, B) = P(B, A) ([View Highlight](https://read.readwise.io/read/01gg1pmg70e8aj3pmhqhn1wfp8))
	- The conditional probability can be calculated using the joint probability; for example:
	  
	  •   P(A | B) = P(A, B) / P(B) ([View Highlight](https://read.readwise.io/read/01gg1pspweanqej6sc12j6tda9))
	- The conditional probability is not symmetrical; for example:
	  
	  •   P(A | B) != P(B | A) ([View Highlight](https://read.readwise.io/read/01gg1pttqwqb95kj6qhttq5kp5))
	- one conditional probability can be calculated using the other conditional probability; for example:
	  
	  •   P(A|B) = P(B|A) * P(A) / P(B)
	  
	  The reverse is also true; for example:
	  
	  •   P(B|A) = P(A|B) * P(B) / P(A) ([View Highlight](https://read.readwise.io/read/01gg1zea7ysqjzv9yzhcs39dar))
	- This alternate approach of calculating the conditional probability is useful either when the joint probability is challenging to calculate (which is most of the time), or when the reverse conditional probability is available or easy to calculate. ([View Highlight](https://read.readwise.io/read/01gg1zh0tn14jp6bmwtkpkj6w2))
	- **Bayes Theorem**: Principled way of calculating a conditional probability without the joint probability ([View Highlight](https://read.readwise.io/read/01gg1zjef93z276h4hmxjdnx64))
	- It is often the case that we do not have access to the denominator directly, e.g. P(B).
	  
	  We can calculate it an alternative way; for example:
	  
	  •   P(B) = P(B|A) * P(A) + P(B|not A) * P(not A) ([View Highlight](https://read.readwise.io/read/01gg1zpf0p56rf153d30p0kaf2))
	- This gives a formulation of Bayes Theorem that we can use that uses the alternate calculation of P(B), described below:
	  
	  •   P(A|B) = P(B|A) * P(A) / P(B|A) * P(A) + P(B|not A) * P(not A) ([View Highlight](https://read.readwise.io/read/01gg1zpmmqme6xtmbv8z2f1qeh))
	- Firstly, in general, the result P(A|B) is referred to as the **posterior probability** and P(A) is referred to as the **prior probability**.
	  
	  •   P(A|B): Posterior probability.
	  •   P(A): Prior probability ([View Highlight](https://read.readwise.io/read/01gg1zwymk3z0pbdzf064wptnv))
	- Sometimes P(B|A) is referred to as the **likelihood** and P(B) is referred to as the **evidence**.
	  
	  •   P(B|A): Likelihood.
	  •   P(B): Evidence. ([View Highlight](https://read.readwise.io/read/01gg1zxp9bb7ngh34m7vw4zmt5))
	- This allows Bayes Theorem to be restated as:
	  
	  •   Posterior = Likelihood * Prior / Evidence ([View Highlight](https://read.readwise.io/read/01gg20y4hs8qjgth94tf3zs7gq))
	- **What is the probability that there is fire given that there is smoke?**
	  
	  Where P(Fire) is the Prior, P(Smoke|Fire) is the Likelihood, and P(Smoke) is the evidence:
	  
	  •   P(Fire|Smoke) = P(Smoke|Fire) * P(Fire) / P(Smoke) ([View Highlight](https://read.readwise.io/read/01gg2117jptxg28a8jhrmnxqt6))
	- **Scenario**: Consider a human population that may or may not have cancer (Cancer is True or False) and a medical test that returns positive or negative for detecting cancer (Test is Positive or Negative), e.g. like a mammogram for detecting breast cancer.
	  
	  > **Problem**: If a randomly selected patient has the test and it comes back positive, what is the probability that the patient has cancer? ([View Highlight](https://read.readwise.io/read/01gg84fkx8grpch6z4vcqxjgr1))
	- Sometimes a patient will have cancer, but the test will not detect it. This capability of the test to detect cancer is referred to as the **sensitivity**, or the true positive rate ([View Highlight](https://read.readwise.io/read/01gg84g5j6fv8ft7hd9sb9gaqa))
	- In this case, we will contrive a sensitivity value for the test. The test is good, but not great, with a true positive rate or sensitivity of 85%. That is, of all the people who have cancer and are tested, 85% of them will get a positive result from the test.
	  
	  •   P(Test=Positive | Cancer=True) = 0.85 ([View Highlight](https://read.readwise.io/read/01gg84gdxhzgnkk5dejdz0bekb))
	- **Our intuitions of probability are wrong.**
	  
	  This type of error in interpreting probabilities is so common that it has its own name; it is referred to as the [base rate fallacy](https://en.wikipedia.org/wiki/Base_rate_fallacy).
	  
	  It has this name because the error in estimating the probability of an event is caused by ignoring the base rate. That is, it ignores the probability of a randomly selected person having cancer, regardless of the results of a diagnostic test. ([View Highlight](https://read.readwise.io/read/01gg84h9pzv8bnc4nrbef1x4pd))
	- In this case, we can assume the probability of breast cancer is low, and use a contrived base rate value of one person in 5,000, or (0.0002) 0.02%.
	  
	  •   P(Cancer=True) = 0.02% ([View Highlight](https://read.readwise.io/read/01gg8b4gs19860ym9agge7sswm))
	- Let’s map our scenario onto the equation:
	  
	  •   P(A|B) = P(B|A) * P(A) / P(B)
	  •   P(Cancer=True | Test=Positive) = P(Test=Positive|Cancer=True) * P(Cancer=True) / P(Test=Positive) ([View Highlight](https://read.readwise.io/read/01gg8bcfp5nzyfwa34g6p3crw1))
	- We know the probability of the test being positive given that the patient has cancer is 85%, and we know the base rate or the prior probability of a given patient having cancer is 0.02%; we can plug these values in:
	  
	  •   P(Cancer=True | Test=Positive) = 0.85 * 0.0002 / P(Test=Positive) ([View Highlight](https://read.readwise.io/read/01gg8bcra9cr45c77dzpm8pahk))
	- We don’t know P(Test=Positive), it’s not given directly.
	  
	  Instead, we can estimate it using:
	  
	  •   P(B) = P(B|A) * P(A) + P(B|not A) * P(not A)
	  •   P(Test=Positive) = P(Test=Positive|Cancer=True) * P(Cancer=True) + P(Test=Positive|Cancer=False) * P(Cancer=False) ([View Highlight](https://read.readwise.io/read/01gg8bmwyfkjcp9h5gwp0hdrxz))
	- Firstly, we can calculate P(Cancer=False) as the complement of P(Cancer=True), which we already know
	  
	  •   P(Cancer=False) = 1 – P(Cancer=True)
	  •   = 1 – 0.0002
	  •   = 0.9998 ([View Highlight](https://read.readwise.io/read/01gg8c9y5062mvd86dr4sejtam))
	- Let’s plugin what we have:
	  
	  We can plug in our known values as follows:
	  
	  •   P(Test=Positive) = 0.85 * 0.0002 + P(Test=Positive|Cancer=False) * 0.9998
	  
	  We still do not know the probability of a positive test result given no cancer.
	  
	  This requires additional information. ([View Highlight](https://read.readwise.io/read/01gg8ce34b7db28m6csj20nbpz))
	- Specifically, we need to know how good the test is at correctly identifying people that do not have cancer. That is, testing negative result (Test=Negative) when the patient does not have cancer (Cancer=False), called the true negative rate or the **specificity** ([View Highlight](https://read.readwise.io/read/01gg8ck6sp24z1w3kyzq2wpn34))
	- We will use a contrived specificity value of 95%.
	  
	  •   P(Test=Negative | Cancer=False) = 0.95 ([View Highlight](https://read.readwise.io/read/01gg8ckf5x6cdt8qssvs8wf9sj))
	- With this final piece of information, we can calculate the false positive or false alarm rate as the complement of the true negative rate.
	  
	  •   P(Test=Positive|Cancer=False) = 1 – P(Test=Negative | Cancer=False)
	  •   = 1 – 0.95
	  •   = 0.05 ([View Highlight](https://read.readwise.io/read/01gg8ckwprke0qr1858y479pvm))
	- We can plug this false alarm rate into our calculation of P(Test=Positive) as follows:
	  
	  •   P(Test=Positive) = 0.85 * 0.0002 + 0.05 * 0.9998
	  •   P(Test=Positive) = 0.00017 + 0.04999
	  •   P(Test=Positive) = 0.05016
	  
	  Excellent, so the probability of the test returning a positive result, regardless of whether the person has cancer or not is about 5%. ([View Highlight](https://read.readwise.io/read/01gg8ctmxdjmxjzw70fx4g9cr1))
	- estimate the probability of a randomly selected person having cancer if they get a positive test result.
	  
	  •   P(Cancer=True | Test=Positive) = P(Test=Positive|Cancer=True) * P(Cancer=True) / P(Test=Positive)
	  •   P(Cancer=True | Test=Positive) = 0.85 * 0.0002 / 0.05016
	  •   P(Cancer=True | Test=Positive) = 0.00017 / 0.05016
	  •   P(Cancer=True | Test=Positive) = 0.003389154704944
	  
	  The calculation suggests that if the patient is informed they have cancer with this test, then there is only 0.33% chance that they have cancer. ([View Highlight](https://read.readwise.io/read/01gg8cw2zy60ndqy7ch6fx28ay))
	- the **base rate**, the **sensitivity** (or true positive rate), and the **specificity** (or true negative rate).
	  
	  •   **Sensitivity**: 85% of people with cancer will get a positive test result.
	  •   **Base Rate**: 0.02% of people have cancer.
	  •   **Specificity**: 95% of people without cancer will get a negative test result.
	  
	  We did not have the P(Test=Positive), but we calculated it given what we already had available. ([View Highlight](https://read.readwise.io/read/01gg8cyd875bs9psbcfw83zd3t))
	- •   True Positive Rate (TPR) = TP / (TP + FN)
	  •   False Positive Rate (FPR) = FP / (FP + TN)
	  •   True Negative Rate (TNR) = TN / (TN + FP)
	  •   False Negative Rate (FNR) = FN / (FN + TP) ([View Highlight](https://read.readwise.io/read/01gg8czh06jzk2gfw0zbjwf2nq))
	- •   TPR + FNR = 1.0, or:
	    •   FNR = 1.0 – TPR
	    •   TPR = 1.0 – FNR
	  •   TNR + FPR = 1.0, or:
	    •   TNR = 1.0 – FPR
	    •   FPR = 1.0 – TNR ([View Highlight](https://read.readwise.io/read/01gg8czxg1x987y914hx14e7pm))
	- in a previous section that we calculated the false positive rate given the complement of true negative rate, or FPR = 1.0 – TNR. ([View Highlight](https://read.readwise.io/read/01gg8d02hjrbxasr4syh6sh0fd))
	- Some of these rates have special names, for example:
	  
	  •   Sensitivity = TPR
	  •   Specificity = TNR ([View Highlight](https://read.readwise.io/read/01gg8d087sxddja6kpjghw8r4q))
	- We can map these rates onto familiar terms from Bayes Theorem:
	  
	  •   **P(B|A)**: True Positive Rate (TPR).
	  •   **P(not B|not A)**: True Negative Rate (TNR).
	  •   **P(B|not A)**: False Positive Rate (FPR).
	  •   **P(not B|A)**: False Negative Rate (FNR ([View Highlight](https://read.readwise.io/read/01gg8d0d81ds8kjd6tfc0ffyah))
	- We can also map the base rates for the condition (class) and the treatment (prediction) on familiar terms from Bayes Theorem:
	  
	  •   **P(A)**: Probability of a Positive Class (PC).
	  •   **P(not A)**: Probability of a Negative Class (NC).
	  •   **P(B)**: Probability of a Positive Prediction (PP).
	  •   **P(not B)**: Probability of a Negative Prediction (NP). ([View Highlight](https://read.readwise.io/read/01gg8d1g80mgtcjd73v0npwjwf))
	- let’s consider Bayes Theorem using these terms:
	  
	  •   P(A|B) = P(B|A) * P(A) / P(B)
	  •   P(A|B) = (TPR * PC) / PP
	  
	  Where we often cannot calculate P(B), so we use an alternative:
	  
	  •   P(B) = P(B|A) * P(A) + P(B|not A) * P(not A)
	  •   P(B) = TPR * PC + FPR * NC ([View Highlight](https://read.readwise.io/read/01gg8d1yrb5467cpjf6axrkggh))
	- The class or condition would be “*Cancer*” and the treatment or prediction would the “*Test*“.
	  
	  First, let’s review all of the rates:
	  
	  •   True Positive Rate (TPR): 85%
	  •   False Positive Rate (FPR): 5%
	  •   True Negative Rate (TNR): 95%
	  •   False Negative Rate (FNR): 15% ([View Highlight](https://read.readwise.io/read/01gg8d297jxk2vy535k8y5zy02))
	- what we know about base rates:
	  
	  •   Positive Class (PC): 0.02%
	  •   Negative Class (NC): 99.98%
	  •   Positive Prediction (PP): 5.016%
	  •   Negative Prediction (NP): 94.984% ([View Highlight](https://read.readwise.io/read/01gg8d2qhmeyyxh122zdye4sfg))
	- we can calculate the probability of a positive test result (a positive prediction) as the probability of a positive test result given cancer (the true positive rate) multiplied by the base rate for having cancer (the positive class), plus the probability if a positive test result given no cancer (the false positive rate) plus the probability of not having cancer (the negative class).
	  
	  The calculation with these terms is as follows:
	  
	  •   P(B) = P(B|A) * P(A) + P(B|not A) * P(not A)
	  •   P(B) = TPR * PC + FPR * NC
	  •   P(B) = 85% * 0.02% + 5% * 99.98%
	  •   P(B) = 5.016% ([View Highlight](https://read.readwise.io/read/01gg8dc1fhjkvyrkdpqxq94jyw))
	- the probability of cancer given a positive test result (the posterior) is the probability of a positive test result given cancer (the true positive rate) multiplied by the probability of having cancer (the positive class rate), divided by the probability of a positive test result (a positive prediction).
	  
	  The calculation with these terms is as follows:
	  
	  •   P(A|B) = P(B|A) * P(A) / P(B)
	  •   P(A|B) = TPR * PC / PP
	  •   P(A|B) = 85% * 0.02% / 5.016%
	  •   P(A|B) = 0.339% ([View Highlight](https://read.readwise.io/read/01gg8ddj718tpkyc2wadwj5qhh))
	- the [posterior probability](https://en.wikipedia.org/wiki/Posterior_probability) that we are calculating with the Bayes theorem is equivalent to the [precision](https://en.wikipedia.org/wiki/Precision_and_recall), also called the Positive Predictive Value (PPV) of the confusion matrix:
	  
	  •   PPV = TP / (TP + FP)
	  
	  Or, stated in our classifier terms:
	  
	  •   P(A|B) = PPV
	  •   PPV = TPR * PC / PP ([View Highlight](https://read.readwise.io/read/01gg8deaaedjeh4g2vm8933547))
	- **So why do we go to all of the trouble of calculating the posterior probability?**
	  
	  Because we don’t have the confusion matrix for a population of people both with and without cancer that have been tested and have been not tested. Instead, all we have is some priors and probabilities about our population and our test.
	  
	  This highlights when we might choose to use the calculation in practice.
	  
	  Specifically, when we have beliefs about the events involved, but we cannot perform the calculation by counting examples in the real world. ([View Highlight](https://read.readwise.io/read/01gg8dn5g8ysqkx48zg1g4d384))
		- **Tags**: #[[programming]] #[[math]]
	- A machine learning algorithm or model is a specific way of thinking about the structured relationships in the data. In this way, a model can be thought of as a hypothesis about the relationships in the data, such as the relationship between input (*X*) and output (*y*). The practice of applied machine learning is the testing and analysis of different hypotheses (models) on a given dataset. ([View Highlight](https://read.readwise.io/read/01gg8ngqxxmvsx3paxxc0qbdpt))
	- Bayes Theorem provides a probabilistic model to describe the relationship between data (*D*) and a hypothesis (h); for example:
	  
	  •   P(h|D) = P(D|h) * P(h) / P(D) ([View Highlight](https://read.readwise.io/read/01gg8nh0c98hamwy65ypbt9am5))
	- the probability of a given hypothesis holding or being true given some observed data can be calculated as the probability of observing the data given the hypothesis multiplied by the probability of the hypothesis being true regardless of the data, divided by the probability of observing the data regardless of the hypothesis. ([View Highlight](https://read.readwise.io/read/01gg8qxyjtkxtake3w8c7eecst))
	- Bayes theorem provides a way to calculate the probability of a hypothesis based on its prior probability, the probabilities of observing various data given the hypothesis, and the observed data itself ([View Highlight](https://read.readwise.io/read/01gg8qx9p77pjshmwjkxp5kgfd))
	- •   P(h|D): Posterior probability of the hypothesis (the thing we want to calculate).
	  •   P(h): Prior probability of the hypothesis. ([View Highlight](https://read.readwise.io/read/01gg8qymn59rqnqsaawa7vtkg9))
	- the probability of observing the data P(D) increases, then the probability of the hypothesis holding given the data P(h|D) decreases. Conversely, if the probability of the hypothesis P(h) and the probability of observing the data given hypothesis increases, the probability of the hypothesis holding given the data P(h|D) increases. ([View Highlight](https://read.readwise.io/read/01gg8r0qp1vdjj5jdzcm9372qz))
	- Any such maximally probable hypothesis is called a maximum a posteriori (MAP) hypothesis. We can determine the MAP hypotheses by using Bayes theorem to calculate the posterior probability of each candidate hypothesis. ([View Highlight](https://read.readwise.io/read/01gg8r1b0jxfx03ygvr8wmt4mt))
	- the probability of the data (D) is constant as it is used in the assessment of each hypothesis. Therefore, it can be removed from the calculation ([View Highlight](https://read.readwise.io/read/01gg8wc21bbap4cs3wspzwwdrx))
	- max h in H P(h|D) = P(D|h) * P(h) ([View Highlight](https://read.readwise.io/read/01gg8wbbbjy2njk5efcb1wj7ah))
	- If we do not have any prior information about the hypothesis being tested, they can be assigned a uniform probability, and this term too will be a constant and can be removed from the calculation ([View Highlight](https://read.readwise.io/read/01gg8wcc3w4a3vzp445gj1rdj3))
	- max h in H P(h|D) = P(D|h) ([View Highlight](https://read.readwise.io/read/01gg8wbwbhe4y3yvh1xw83ac25))
	- Classification is a predictive modeling problem that involves assigning a label to a given input data sample ([View Highlight](https://read.readwise.io/read/01gg8wpj0arcspa3h7hdyhm27r))
	- classification predictive modeling can be framed as calculating the conditional probability of a class label given a data sample, for example:
	  
	  •   P(class|data) = (P(data|class) * P(class)) / P(data) ([View Highlight](https://read.readwise.io/read/01gg8wpsn0rt3vyy0wkrb4rd0p))
	- In practice, it is very challenging to calculate full Bayes Theorem for classification. ([View Highlight](https://read.readwise.io/read/01gg8wxe5r7yhpbbv9srdsewg3))
	- The priors for the class and the data are easy to estimate from a training dataset, if the dataset is suitability representative of the broader problem. ([View Highlight](https://read.readwise.io/read/01gg8wwxd0x7rvjr8c8688j827))
	- The conditional probability of the observation based on the class P(data|class) is not feasible unless the number of examples is extraordinarily large, e.g. large enough to effectively estimate the probability distribution for all different possible combinations of values. This is almost never the case, we will not have sufficient coverage of the domain ([View Highlight](https://read.readwise.io/read/01gg8x0cpdvj58knbe2e3wbg2s))
	- The Bayes Theorem assumes that each input variable is dependent upon all other variables. This is a cause of complexity in the calculation. We can remove this assumption and consider each input variable as being independent from each other. ([View Highlight](https://read.readwise.io/read/01gg8ydmrsk9zqw306csghs68q))
	- This changes the model from a dependent conditional probability model to an independent conditional probability model and dramatically simplifies the calculation ([View Highlight](https://read.readwise.io/read/01gg8ydtss18f93gkh2yx8ejcr))
	- we calculate P(data|class) for each input variable separately and multiple the results together, for example:
	  
	  •   P(class | X1, X2, …, Xn) = P(X1|class) * P(X2|class) * … * P(Xn|class) * P(class) / P(data) ([View Highlight](https://read.readwise.io/read/01gg8z1ep80c6z99cavmdd3qnr))
	- drop the probability of observing the data as it is a constant for all calculations, for example:
	  
	  •   P(class | X1, X2, …, Xn) = P(X1|class) * P(X2|class) * … * P(Xn|class) * P(class) ([View Highlight](https://read.readwise.io/read/01gg8z1h1gwha74ns3gr03jjs1))
	- The Bayes optimal classifier is a probabilistic model that makes the most likley prediction for a new example, given the training dataset.
	  
	  This model is also referred to as the Bayes optimal learner, the Bayes classifier, Bayes optimal decision boundary, or the Bayes optimal discriminant function. ([View Highlight](https://read.readwise.io/read/01gg8z82fd99kg46fdb5ea2y5w))
	- **Bayes Classifier**: Probabilistic model that makes the most probable prediction for new examples. ([View Highlight](https://read.readwise.io/read/01gg8zcxdjqm4wq2xj1am9z3ry))
	- the Bayes optimal classifier answers the question:
	  
	  > What is the most probable classification of the new instance given the training data? ([View Highlight](https://read.readwise.io/read/01gg8zd31pq971wetk11wkwy29))
	- The equation below demonstrates how to calculate the conditional probability for a new instance (*vi*) given the training data (*D*), given a space of hypotheses (*H*).
	  
	  •   P(vj | D) = sum {h in H} P(vj | hi) * P(hi | D)
	  
	  Where *vj* is a new instance to be classified, *H* is the set of hypotheses for classifying the instance, *hi* is a given hypothesis, *P(vj | hi)* is the posterior probability for *vi* given hypothesis *hi*, and *P(hi | D)* is the posterior probability of the hypothesis *hi* given the data *D*. ([View Highlight](https://read.readwise.io/read/01gg8zgjqmja4edn864zdak8dk))
	- Because the Bayes classifier is optimal, the Bayes error is the minimum possible error that can be made.
	  
	  •   **Bayes Error**: The minimum possible error that can be made when making predictions.
	  
	  It is a theoretical model, but it is held up as an ideal that we may wish to pursue. ([View Highlight](https://read.readwise.io/read/01gg8zm8n0b1b2t7bc5xv3by4j))
	- Global optimization is a challenging problem of finding an input that results in the minimum or maximum cost of a given objective function. ([View Highlight](https://read.readwise.io/read/01gg8zngjcgrm4czvvjb5c0e7g))
	- Bayesian Optimization provides a principled technique based on Bayes Theorem to direct a search of a global optimization problem that is efficient and effective. It works by building a probabilistic model of the objective function, called the surrogate function, that is then searched efficiently with an acquisition function before candidate samples are chosen for evaluation on the real objective function. ([View Highlight](https://read.readwise.io/read/01gg8zpcr6m1p38qqrdam61ceg))
	- Bayesian Optimization is often used in applied machine learning to tune the hyperparameters of a given well-performing model on a validation dataset. ([View Highlight](https://read.readwise.io/read/01gg8zpg75xhb7jh7702f43r9c))
	- Probabilistic models can define relationships between variables and be used to calculate probabilities. ([View Highlight](https://read.readwise.io/read/01gg8zpp580k0p761zwynyv8ah))
	- Simplifying assumptions such as the conditional independence of all random variables can be effective, such as in the case of Naive Bayes, although it is a drastically simplifying step.
	  
	  An alternative is to develop a model that preserves known conditional dependence between random variables and conditional independence in all other cases. Bayesian networks are a probabilistic graphical model that explicitly capture the known conditional dependence with directed edges in a graph model. All missing connections define the conditional independencies in the model. ([View Highlight](https://read.readwise.io/read/01gg8zrztdrzenh6wk2pwmdzq6))
	- The networks are not exactly Bayesian by definition, although given that both the probability distributions for the random variables (nodes) and the relationships between the random variables (edges) are specified subjectively, the model can be thought to capture the “belief” about a complex domain. ([View Highlight](https://read.readwise.io/read/01gg8zssef7wtas6ndf3q99gra))