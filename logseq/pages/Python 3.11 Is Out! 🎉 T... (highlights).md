title:: Python 3.11 Is Out! 🎉 T... (highlights)
author:: [[@marktenenholtz on Twitter]]
full-title:: "Python 3.11 Is Out! 🎉 T..."
category:: #tweets
url:: https://twitter.com/marktenenholtz/status/1584927749168250881

- Highlights first synced by [[Readwise]] [[Feb 20th, 2023]]
	- Python 3.11 is out! 🎉
	  
	  This is one of the most exciting releases in a while, including significant speed upgrades and better error messages.
	  
	  Here's what's new: ([View Tweet](https://twitter.com/marktenenholtz/status/1584927749168250881))
	- 1. Faster CPython!
	  
	  Python 3.11 is anywhere between 10-60% faster than Python 3.10, and on average it's 25% faster.
	  
	  This includes faster startup times and more efficient use of/communication with C.
	  
	  Here are the individual operations that are notably faster: 
	  
	  ![](https://pbs.twimg.com/media/Ff7LZLRVEAckQWJ.png) ([View Tweet](https://twitter.com/marktenenholtz/status/1584927757896597504))
	- 2. Better error messages
	  
	  Anyone who has used a language like Rust knows that Python left something to be desired when it came to error messages.
	  
	  Well, now Python has error messages that highlight the specific location of the problem! 
	  
	  ![](https://pbs.twimg.com/media/Ff7LZm9VUAABk0F.png) 
	  
	  ![](https://pbs.twimg.com/media/Ff7LZyZUYAA3PbS.png) 
	  
	  ![](https://pbs.twimg.com/media/Ff7LZ_MVsAEoDi4.png) ([View Tweet](https://twitter.com/marktenenholtz/status/1584927770399846403))
	- 3. Grouped exceptions
	  
	  We now have the introduction of the "except*" clase, which allows you to have more flexible error handling.
	  
	  You can create a group of exceptions that may partial match with multiple of these except* clauses. 
	  
	  ![](https://pbs.twimg.com/media/Ff7LaVDVsAE6kSY.png) ([View Tweet](https://twitter.com/marktenenholtz/status/1584927776255012865))
	- 4. Added notes on exceptions
	  
	  Sometimes, when you're catching an error, it's helpful to leave an extra note to the user as to exactly *why* the error was raised. Many libraries (like Keras) spend a lot of time trying to enhance this.
	  
	  Well, the .add_note() method now allows this! 
	  
	  ![](https://pbs.twimg.com/media/Ff7LaqrVQAEiaVx.png) ([View Tweet](https://twitter.com/marktenenholtz/status/1584927782621937664))
	- 5. A bunch of type hint stuff
	  
	  There's now support for a Self type and marking TypedDict items as required or not.
	  
	  But, the most exciting one for me are "variadic generics". Check this one out if you use libraries like NumPy: https://t.co/6z4uVg8U2n
	  
	  In english... 
	  
	  ![](https://pbs.twimg.com/media/Ff7LbCrUAAA0S65.png) ([View Tweet](https://twitter.com/marktenenholtz/status/1584927788733112320))
	- The speed upgrade alone is exciting enough.
	  
	  But it's just the first stop on a longer roadmap to make Python faster (and maybe JIT compiled?).
	  
	  There's a master plan out there for Python 3.12 and beyond that has me extremely bullish on Python going forward https://t.co/xpP8T1vfrJ ([View Tweet](https://twitter.com/marktenenholtz/status/1584927791757172737))