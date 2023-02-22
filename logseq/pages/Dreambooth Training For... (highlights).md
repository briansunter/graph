title:: Dreambooth Training For... (highlights)
author:: [[@rainisto on Twitter]]
full-title:: "Dreambooth Training For..."
category:: #tweets
url:: https://twitter.com/rainisto/status/1584879548529020929

- Highlights first synced by [[Readwise]] [[Feb 20th, 2023]]
	- Dreambooth training for Stable Diffusion is extremely powerful. You can train a new token to the "person" class to create very convincing looking images of them. I've posted some examples in the past days.
	  
	  But it's not the coolest thing you can do... ([View Tweet](https://twitter.com/rainisto/status/1584879548529020929))
	- You can train the "style" class to create new styles. For instance the "arcane" style is well known - it skews all results to this particular Riot games style.  https://t.co/eZP6pJkHLH
	  
	  But - that's not the coolest thing you can do... ([View Tweet](https://twitter.com/rainisto/status/1584879919057993728))
	- It's ridiculous, but you can just train the "style" class to be photographic. And you get back results that - well, look photographic. 
	  
	  EVERYTHING BECOMES PHOTOGRAPHIC. 
	  
	  #stablediffusion 
	  
	  ![](https://pbs.twimg.com/media/Ff6gQ3rXkAQAM91.jpg) 
	  
	  ![](https://pbs.twimg.com/media/Ff6gQ3sXwAE23h7.jpg) 
	  
	  ![](https://pbs.twimg.com/media/Ff6gQ3sWAAcGLk-.jpg) 
	  
	  ![](https://pbs.twimg.com/media/Ff6gQ3wWIAA6FFx.jpg) ([View Tweet](https://twitter.com/rainisto/status/1584880484945129478))
	- It's the one and same Dreambooth, trained for photographic style. 
	  
	  I didn't train the cars, I didn't train the vegetables, I didn't train the offices, I didn't train the landscapes. 
	  
	  All of that stuff is already in the SD model. The style just makes them photographic! 
	  
	  ![](https://pbs.twimg.com/media/Ff6gjhKX0AAW-sq.jpg) 
	  
	  ![](https://pbs.twimg.com/media/Ff6gjh_WIAAewru.jpg) 
	  
	  ![](https://pbs.twimg.com/media/Ff6gjieXgAId_U9.jpg) 
	  
	  ![](https://pbs.twimg.com/media/Ff6g1OJXgAEe-j6.jpg) ([View Tweet](https://twitter.com/rainisto/status/1584881150165909505))
	- I'm not going to share you my trained model, but I'll tell you how to train your own. Use JoePenna's Dreambooth. https://t.co/H4V19pRMZr
	  
	  Pick training material that is photographic. Invent a token, pick "style" class, train enough. Try different training sets. ([View Tweet](https://twitter.com/rainisto/status/1584881850933456898))
	- It's not even super sensitive to the training material. I've trained two photorealistic styles using different materials. You can fine-tune the style by the training material. I use about 20 training images myself.
	  
	  All the content is in the model already. 
	  #dreambooth 
	  
	  ![](https://pbs.twimg.com/media/Ff6h-uxXEAA1wEV.jpg) 
	  
	  ![](https://pbs.twimg.com/media/Ff6h-wLXwAMH-yr.jpg) 
	  
	  ![](https://pbs.twimg.com/media/Ff6h-wTXkAAgt3I.jpg) 
	  
	  ![](https://pbs.twimg.com/media/Ff6iBKpWQAAv-zB.jpg) ([View Tweet](https://twitter.com/rainisto/status/1584882390043742208))
	- You just prompt usually: "Car on fire, <any modifiers that you like>, zyxyourstylename style"
	  
	  Modifiers = "trending on artstation" or whatever you like. You can use the automatic1111 prompt modifiers to emphasize or de-emphasize things as you see fit. 
	  
	  ![](https://pbs.twimg.com/media/Ff6i1r-XwAUCOcR.jpg) 
	  
	  ![](https://pbs.twimg.com/media/Ff6i1sbXoAAVHje.jpg) 
	  
	  ![](https://pbs.twimg.com/media/Ff6i1tzXoAI6ghi.jpg) 
	  
	  ![](https://pbs.twimg.com/media/Ff6i1t8X0AA1k01.jpg) ([View Tweet](https://twitter.com/rainisto/status/1584883231089782785))
	- This all started from the vegetables. I made funny pictures of a model eating vegetables. Thought that the vegetables look oddly good, prompted for them only. And realized it does this style no matter what I prompt it to do. I'm so dumb I didn't at first even try! 
	  
	  ![](https://pbs.twimg.com/media/Ff6lSo9WIAQAk1_.jpg) 
	  
	  ![](https://pbs.twimg.com/media/Ff6lV-WWIAAkRjh.jpg) ([View Tweet](https://twitter.com/rainisto/status/1584886454228221957))
	- Note #1: I did my Dreambooth training with the SD1.5 model. I'm fortunate enough to have a A6000 card, the training hits 32GB VRAM, at least a few days ago when I did this. I haven't tried this same for SD1.4, I can't say how much better or worse the results are with it. ([View Tweet](https://twitter.com/rainisto/status/1584889111831547905))