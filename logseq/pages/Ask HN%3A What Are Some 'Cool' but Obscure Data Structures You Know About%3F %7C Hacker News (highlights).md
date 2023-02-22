title:: Ask HN: What Are Some 'Cool' but Obscure Data Structures You Know About? | Hacker News (highlights)
author:: [[news.ycombinator.com]]
full-title:: "Ask HN: What Are Some 'Cool' but Obscure Data Structures You Know About? | Hacker News"
category:: #articles
url:: https://news.ycombinator.com/item?id=32186203

- Highlights first synced by [[Readwise]] [[Feb 20th, 2023]]
	- I'm very interested in what types of interesting data structures are out there HN. Totally your preference.
	  I'll start: bloom filters. Lets you test if a value is definitely NOT in a list of pre-stored values (or POSSIBLY in a list - with adjustable probability that influences storage of the values.)
	  
	  Good use-case: routing. Say you have a list of 1 million IPs that are black listed. A trivial algorithm would be to compare every element of the set with a given IP. The time complexity grows with the number of elements. Not so with a bloom filter! A bloom filter is one of the few data structures whose time complexity does not grow with the number of elements due to the 'keys' not needing to be stored ('search' and 'insert' is based on the number of hash functions.)
	  
	  Bonus section: Golomb Coded Sets are similar to bloom filters but the storage space is much smaller. Worse performance though.
	- Cache-Oblivious Data Structures: https://cs.au.dk/~gerth/MassiveData02/notes/demaine.pdf
	  A vaguely related notion is that naive analysis of big-O complexity in typical CS texts ignores over the increasing latency/cost of data access as the data size grows. This can't be ignored, no matter how much we would like to hand-wave it away, because physics gets in the way.
	  A way to think about it is that a CPU core is like a central point with "rings" of data arranged around it in a more-or-less a flat plane. The L1 cache is a tiny ring, then L2 is a bit further out physically and has a larger area, then L3 is even bigger and further away, etc... all the way out to permanent storage that's potentially across the building somewhere in a disk array.
	  In essence, as data size 'n' grows, the random access time grows as sqrt(n), because that's the radius of the growing circle with area 'n'.
	  Hence, a lot of algorithms that on paper have identical performance don't in reality, because one of the two may have an extra sqrt(n) factor in there.
	  This is why streaming and array-based data structures and algorithms tend to be faster than random-access, even if the latter is theoretically more efficient. So for example merge join is faster than nested loop join, even though they have the same performance in theory.
	- Realtime collision detection[1] has a fantastic chapter in this with some really good practical examples if I remember right.
	  Great book, I used to refer to it as 3D "data structures" book which is very much in theme with this thread.
	  [1] https://www.amazon.com/Real-Time-Collision-Detection-Interac...
	  reply
	- The implicit grid data structure from there is a personal favorite of mine. I used it in a game once and it performed incredibly well for our use case.
	  It's a bit too complicated to totally summarize here, but it uses a bit per object in the scene. Then bit-wise operations are used to perform quick set operations on objects.
	  This data structure got me generally interested in algorithms that use bits for set operations. I found the Roaring Bitmap github page has a lot of useful information and references wrt this topic: https://github.com/RoaringBitmap/RoaringBitmap
	  reply
	- Related to bloom filters, xor filters are faster and more memory efficient, but immutable.
	  HyperLogLog is an efficient way to estimate cardinality.
	  Coolest thing I've learned recently was Y-fast trie. If your dataset M is bounded integers (say, the set of all 128 bit numbers), you get membership, predecessor, or successor queries in log log time, not log, like in a normal tree.
	  see: https://www.youtube.com/playlist?list=PLUl4u3cNGP61hsJNdULdu... (6.851 Advanced Data Structures, Erik Demaine)
	  Would love to learn more "stupidly fast at the cost of conceptual complexity" things.
	  edit:
	  (adding) I don't know a name for it, because it's not one thing but a combination, but once can:
	  Use the first N bits from a very quick hash of a key from an unknown distribution (say a file path, or a variable name, or an address, or a binary blob,..) as a way to "shard" this key across M other fast data structures (like a tree) for search/add/remove. By changing M, you can tune the size of the terms in the O(1)+O(log) equation for running time.
	  Trees getting too deep for fast search? Every increase of N moves the computation from the log search of the tree to the space tradeoff of having more trees.
	  Added benefit is you can scale to multiple threads easily. Instead of locking the whole tree, you lock a tiny sub-tree.
	  Very clever. (I first saw in the Aerospike key value store)
	- Spatial hashing.
	  Say that you have data that is identified with points in 2D or 3D space. The standard way that CS students learn in school to represent this is via a quadtree or octree. However, these tree data structures tend to have a lot of "fluff" (needless allocations and pointer chasing) and need a lot of work to be made efficient.
	  Spatial hashing is the stupidly simple solution of just rounding coordinates to a grid and storing nearby objects together in a hash table. As long as your data is reasonably well behaved then you get many of the advantages of a quadtree, and it's completely trivial to implement.
	- TBH even quadkeys are a fun answer to OPs question, many people aren't aware of them.
	  Simple explanation:
	  If you have data with x y coordinates and you know the bounds.
	  To compute the quad key for a point:
	  1. The key starts as the empty string. (I've also seen it start with "Z" to handle points outside the bounds)
	  2. Divide the space into 4 quadrants
	  3. determine which quadrant the point falls in, append a letter (A-D depending on the quadrant) to the key
	  4. Repeat step 3 using the quadrant bounds (i.e. recursively smaller area) until you have desired accuracy
	  This can then be used to efficiently find points within rectangular bounds
	- Finger trees allow you to do amazing things. In essence they let you build an index, or multiple indices, for your dataset and then store them in a single structure.
	  When I go from Haskell back to imperative land I find myself greatly missing this ability. Sure I can make multiple hashmaps or trees or whatever but being able to stuff it all in one data structure is amazing.
	  One structure I built with them that is much more difficult with typical structures is a "block list" structure.
	  In this structure each block has a particular width and they're all stacked side by side.
	  I want to perform a query, "which box is at position X". So if my boxes are of widths 7,20,10, then the lookup for 2 yields the first box, the lookup for 12 yields the second, etc.
	  More interestingly, if add a new box between the second and third, the indices covered by the last box is increased.
	  With finger trees you use a sum monoid. This is easy. In other languages you have to roll your own structure either using a list (with o(n) lookup) or a tree with o(log n) lookup, but o(n) inserts (to translate the indices of future blocks)
	  https://andrew.gibiansky.com/blog/haskell/finger-trees/
	- Some ones I've used recently:
	  The "golden section search" to find a the minimum (or maximum) of a unimodal function. An actual real-world use case for the golden ratio.
	  Exponentially Weighted Moving Average filters. Or how to have a moving average without saving any data points..
	  Some of my classic favorites:
	  Skiplists: they are sorted trees, but the algorithms are low complexity which is nice.
	  Boyer-Moore string search is awesome..
	  Bit twiddling algorithms from Hackers Delight: for example (x &-x) isolates the least significant set bit: basically use the ALU's carry chain to determine priority.
	  Another is compress from Hacker's Delight. It very quickly compresses selected bits (from a bitmask), all to the right of the word. It's useful to make certain hash functions.
	  The humble circular queue. If your circular queue is a power of 2 in size, then the number of bits needed for indexes is at least log2(size) + 1. The + 1 is key- it allows you to distinguish between completely full and completely empty with no effort. So:
	    Empty: (write_index == read_index)
	    Full: (write_index == read_index + size)
	    Count: (write_index - read_index)
	    Insert: queue[write_index++ & (size - 1)] = data
	    Remove: data = queue[read_index++ & (size - 1)];
	  All lossless data compression algorithms are amazing.
	- HNSW, or Hierarchical Navigable Small World is a graph data structure for approximate nearest neighbor search of vectors.
	  https://arxiv.org/abs/1603.09320
	  The problem space of ANN is one of those really deep holes you can go down. It’s a game of balancing time and space, and it’s got plenty of fascinating algorithms and datastructures.
	  Check out http://ann-benchmarks.com/ for a comparison. HNSW is not “the best” but it’s easy to understand and is quite effective.
	- Disjoint-Sets have a very cool implementation whose amortized time complexity is extremely slow growing. It is not quite constant, but even for a disjoint-set with as many elements as there are particles in the universe, the amortized cost of an operation will be less than or equal to 4.
	  https://en.wikipedia.org/wiki/Disjoint-set_data_structure
	- Conflict-free replicated data type (CRDT) is super interesting data type (and algorithm), especially when it is implemented for complex data structures like JSON: A JSON CRDT is "[...] an algorithm and formal semantics for a JSON data structure that automatically resolves concurrent modifications such that no updates are lost, and such that all replicas converge towards the same state (a conflict-free replicated datatype or CRDT)." [1].
	  [1] A Conflict-Free Replicated JSON Datatype (https://arxiv.org/abs/1608.03960) b Martin Kleppmann and Alastair R. Beresford
	- The Suffix Array is surprisingly cool and useful https://en.wikipedia.org/wiki/Suffix_array
	  The Alias Table for sampling a discrete distribution in O(1) time is a very clever idea https://www.keithschwarz.com/darts-dice-coins/
	  
	  The fact that suffix trees/suffix arrays can be built in O(n) is IMO the most surprising and "magical" result in computer science. To me, more surprising than median of medians/quick select.
	  There might be more "magical"/surprising things that are obscure and I am unaware of, but to me, this is it. :)
	- 1. Probabilistic filtering and matching:
	  Since you mentioned bloom filters - other probabilistic data structures like count-min sketches (roughly, streaming bloom filters) are super useful. Approximate kmer methods like minhash and w-shingling use them in really cool ways. Rolling hash methods like Rabin chunking also work really nicely with probabilistic/streaming hash tables - splitting the data stream into chunks that can be consistently filtered or matched is useful in many circumstances! Think NSA-level data harvesting, or realtime genome/geospatial data classification.
	  2. Checking for, locating and counting subsequences in giant string datasets:
	  Wavelet trees, FM-indices, suffix arrays more generally - and structures that allow extreme performance in very niche situations with arbitrary encodings like bitvectors and compressed integer vectors. If you have a million books, or all the genomes ever sequenced, you use the first structures to find where a specific phrase can be found, even if you don't quite spell it right. You can use the latter ones to do super fast comparisons of giant datasets - given a million viruses, how similar is each one to the human genome, and where specifically do they most closely match?
	  3. Reconstructing structured information from (potentially noisy) fragments:
	  De-brujn graphs (and related graphs like string graphs, colored de brujns). This is a way to find all the overlap connections between fragments of information, and then weight the possible traversals of those connections by the evidence. These can be represented using the data structures from #1 (FM-indices for example), and efficiently used in some circumstances with those from #2 to enable some kinds of graph algorithms. If you have a shredded set of documents, or a billion short DNA reads from a genome sequencing experiment, this is how you reconstruct the original.
	  4. Decentralised coordination structures. Merkle-DAGs and Kademlia DHTs in particular. Being able to compare any trees by root-first hashes, and being able to request the content of the subtree for any node hash from an arbitrary set of peers - these structures enable the p2p web infrastructure. Everything from Limewire to bittorrent, IPFS and blockchains, and, most importantly, Sci-Hub.
	  1, 2 and 3 together are some of the fundamentals of computational biology. If you're interested in understanding them, https://rosalind.info/problems/list-view/ is a great starting place.
	- Do you know about:
	  * HyperLogLog? Convenient for doing approximate counting across huge datasets.
	  * SkipList is another probabilistic data structure that allows you to skip ahead N elements in 1 step. I believe ClickHouse uses it.
	  * Bitmap index organizes database pointers into a matrix of bits. The bitmap scans simply skip over the zeros. This type of index gets in trouble if you have high cardinality, though.
	- The Aho-Corasick automaton [0]. You have a bunch of strings, and you want to know if and where they appear in a longer string. You build a search trie from the strings, but add links back from each node to the node representing the longest suffix of the string it represents that is also in the trie, so you can skip backtracking as you scan, yielding linear time complexity in O(length of string being searched + number of results found).
	  [0] https://en.wikipedia.org/wiki/Aho–Corasick_algorithm
	  reply
	- Sparse sets.
	  They're often used in Entity Component System architectures since you have O(1) add/remove/find, & O(n) iteration. Iterations are also packed, which is a bonus for cache efficiency.
	  Can be difficult to implement well, but the concept is simple and a neat example of a useful specialty data structure. Take a look at https://github.com/skypjack/entt
	  reply
	- Treap: https://en.wikipedia.org/wiki/Treap
	  It's like a Red-Black tree in use case, but much faster to implement, which is good for competitive programming. The average case complexity is the same for all operations, but there's an unlikely degeneration to worst-case linked-list behaviour.
	  Lazy Propagation Segment Tree: https://cp-algorithms.com/data_structures/segment_tree.html
	  Like a segment tree in that it supports range queries in logarithmic time, but supports range updates in log time as well.
	  I know a few more fun ones that I occasionally use in contests, but I've never touched otherwise.
	- Speaking of ease of implementation, I just discovered AA trees. They are probably not "obscure" but I think they are worthy of more fame because they perform jsut as well as red-black trees and are easier to implement. Finding clear comprehensive documentation about them was not easy though, so here is for you, the best I could find : https://www.cs.umd.edu/class/fall2019/cmsc420-0201/Lects/lec...
	  And the, unhelpful to me, orginal paper : https://user.it.uu.se/~arnea
	- Disruptor queues are also fun. They are lock free multi-producer multi-consumer circular buffers. I figured out the basics on my own in a vacuum out of need, then discovered a relevant white paper.
	  I used one to implement a fast shared memory pub-sub message bus for communicating across dozens of processes in a simulation framework.
	  reply
	  
	  
	  https://lmax-exchange.github.io/disruptor/disruptor.html#_de...
	  The basic idea is that you maintain two atomically incremented counters. You increment one to allocate some buffer space to write your message into, and you increment the other once the message is written in. There's some tricky details to get right when multiple producers have messages staged up at the same time.
	- Structures good for Geospatial information like rtrees, quadtrees.
	  https://en.m.wikipedia.org/wiki/R-tree
	  Also concurrent data structures.
	  https://youtu.be/jcqGSehrMGU
	  
	  
	  
	  Also LSM trees!
	  
	  
	  
	  I've used quadtrees for some cool stuff I can't really talk about. All the things you think binary trees are good at but with x,y coordinates, or any n-tuple of coordinates as you suggest.
	- Reservoir sampling is a statistical technique used to randomly select a finite number of elements from a population. The elements are chosen such that each element has an equal probability of being selected. This technique is often used when it is impractical to select a random sample of elements from a very large population.
	  To do reservoir sampling, you first need to decide how many items you want in your sample. This number is called the size of the reservoir. Once you have the size of the reservoir, you can fill it by selecting items from the population at random.
	  The code is beautifully simple:
	  for i = k to population.length-1
	    j = random integer between 0 and i, inclusive
	    if j < k
	       reservoir[j] = population[i]
	  return reservoir
	- Resource Description Framework (RDF)
	  The Resource Description Format (RDF) is the W3C standard for web data. It allows for data the be linked, anywhere, and to be "grounded" in semantic descriptions of the data. The core RDF data model is very simple: It is a set of triples orgainzed into a RDF Graph.
	  https://www.w3.org/egov/wiki/Resource_Description_Format
	- Piece tables: a persistent data structure used to represent the current document with relatively efficient editing operations in various text editors, word processors, etc.
	  https://en.wikipedia.org/wiki/Piece_table
	- qwerty3344 3 hours ago | prev | next [–]
	  
	  rope - https://en.wikipedia.org/wiki/Rope_%28data_structure%29 skip list - https://en.wikipedia.org/wiki/Skip_list
	  reply
	  
	  2OEH8eoCRo0 1 hour ago | parent | next [–]
	  
	  Never heard of this one until it came up in a google interview. Totally botched it. I couldn't think of any way to do it to their liking that doesn't require a dynamic cast.
	- The LIFO buffer. Also surfaces as the messy desk, the million email inbox, or ten-thousand browser tabs. It really works at progressively sorting frequently accessed items to the top, even accounting for changing or seasonal habits and preferences.
	- All probabilistic structures are fascinating to me. I'm most enamored with HyperLogLog - estimating the number of distinct elements in extremely large sets of data without having to build a set of seen elements - but the entire field is pretty awesome.
	  The canonical use case for HLL is counting unique visitors. But any large dataset where you only need a good approximation is a valid target :)
	  reply
	  
	  drinkcocacola 2 hours ago | parent | next [–]
	  
	  I used to work for a mobile analytics company, and HLL made things SO much easier and fast that at the time we changed all our queries to be based on HLL. At the time, the ability of being able to sum uniques was like black magic, and still to this day I am quite impressed about HyperLogLog.
	- The Israeli queue.
	  Like a regular queue, but if something new that comes in sees its friend in the queue already, it can jump the queue and go and stand next to her.
	  Useful for when something has a big overhead on top of its own processing, but the overhead can be shared between several similar entries. If you're doing it anyway for the one already in the queue, you get to make the most of it for its friends too.
	  I chose it because I live here and it's totally true :)