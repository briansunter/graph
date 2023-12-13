---
url: /blog/why-clojure
date: 2018-09-30
description: What makes Clojure interesting and well suited for modern software development?
tags:
- blog
- programming
- functional programming
- clojure
coverimage: /assets/clojure_logo.svg_1660983015847_0.png
title: Why Clojure?
categories:
lastMod: 2023-10-28
---
## Intro


![Clojure_logo.svg.png](/assets/Clojure_logo.svg_1660983015847_0.png)

Why not the programming language I'm already using or some other language? What makes Clojure uniquely well-suited for modern software development?

Pure functions and immutable data are the most straightforward units of software to reason about

Deep language level support for immutable data structures

S-Expressions (parenthesis) are re-usable and composable.

Interactive Programming: high-speed feedback loop and experimentation with the REPL

Powerful and straightforward testing due to emphasis on pure functions and values

Good interop with the world's most popular languages: Java and Javascript

Excellent concurrency support: immutability, software transactional memory, "Go Channels" (CSP), agents, everything in the JVM/Java

Subjectively good design - Strong notions of things like time, identity, state, and equality

## Pure Functions and Immutable Data Structures


Instead of mutating objects, Clojure encourages you to use immutable data structures.

In most other languages, you create a mutable array object and append items to it.

``` js
var myArray = ['one', 'two', 'three'];

function addOne(item) {
myArray.push(item);
}
```

When we append to this array, everyone who references this array will see the change.

``` js
addOne('four');
```

In Clojure, whenever you "append" to a vector (array), you get a "new" vector, and the original does not change. Anyone who references the original array can always count on it being the same.

``` clojure
(def my-vector ["one" "two" "three"])
```

`conj` returns a new vector with the arguments appended.

``` clojure
(def my-new-vector (conj my-vector "four"))
```

The original vector is unchanged.

In most languages, the `reverse` function changes the original array. Everyone who references the original array

``` js
const myArray = ["one", "two", "three"];
myArray.reverse();
```

In Clojure, functions like `reverse` return a new vector rather than mutating the original.

``` clojure
(def my-vector ["one" "two" "three"])
(def reversed-vector (reverse my-vector))
```

This encourages us to use compositions of functions instead of functions that mutate objects. The benefit of this might take some time to grasp, but this shift enables writing programs in a simpler way. Programs made up of small reusable components are easier to change later. We only need to focus on the scope of the function, the inputs, and the outputs. We don't need to worry about prior state or other parts of the program modifying our data in unpredictable ways.

# (but (there (are (so (many (parens (🙀)))))))


The first thing you will notice in Clojure is how many parentheses there are and how dense the code is. It takes some getting used to, but the parenthesis style of function calls (S-expressions) has many benefits.

We can always rewrite syntax repetition with macros, and there are plenty of techniques for reducing the number of parens, including "threading" operators like `-->`. The following is equivalent to the header.

``` clojure
(->> but
there
are
so
many
parens)
```

Function calls are different in Clojure than in most languages. It is represented by a list where the first element is the function, and the rest are the arguments to that function.

``` clojure
(defn my-function
[arg1 arg2]
(str arg1 arg2))
(my-function "first" "second")
```

The syntax is highly regular. It's natural to wrap a function in another function.

``` clojure
(my-function (my-function "first" "second") "third")
```

Since all functions, including built-in functions, are called the same way, swapping any function out is easy. You can easily use your custom functions in place of the built-in functions and language features.

``` clojure
(if (= 42 42) "True" "False")
(my-if (= 42 42) "True" "False")
```
The parens replace a lot of the curly brace syntax in other languages.

``` js
function myFunction(arg1, arg2) {
if (arg1) {
return arg1;
} else {
return arg2;
}
}
```

You can see the Clojure function has a similar amount of syntax as curly brace languages, and looks similar.

``` clojure
(defn my-function
[arg1 arg2]
(if (not (blank? arg1))
arg1
arg2))
```

# Macros


Go supports asynchronous "go channels" due to special syntax baked into the language. Clojure added the same features and syntax as a third-party library. In Javascript, you have to wait for syntax to be adopted or use a transpiler, but in Clojure, it could be implemented by anyone as a library.

This is the syntax to create an asynchronous channel in Golang. It's built into the language, so you can't change how it looks, and only the language authors can create syntax like this.

``` go
messages := make(chan string)
go func() { messages <- "ping" }()
msg := <-messages
fmt.Println(msg)
```

In Clojure, anyone can create syntax like this through macros.

``` go
(def c (chan 10)
(go (>! c "hello"))
(println (<!! c))
```

# Maps and Destructuring


Clojure is good at extracting data from maps and sequences. It is perfect for "data programs" that mainly call an API, transform a sequence, and call another API.

## Positional Destructuring

``` clojure
(def large-list '(1 2 3 4 5 6 7 8 9 10))
(let [[a b c] large-list]
(str a b c))
```

## Destructuring with named optional parameters and defaults


``` clojure
(defn configure [val options]
(let [{:keys [debug verbose]
   :or {debug false, verbose false}} options]
(str "val=" val " debug="debug " verbose="verbose)))

(configure "foo!" {:debug true})
```

# Interactive Programming


Having a fast feedback loop is crucial to be productive. When I first started programming, I would write some code, compile it, then manually test my changes, maybe with a debugger. Then I discovered TDD with an auto test runner, which gave me a faster feedback loop since I could be reasonably confident my program worked without recompiling for every change.

The fastest feedback loop I've discovered is the Clojure REPL with editor integration. With Emacs and CIDER, I can execute code in my editor as I write it. A fast feedback loop for exploratory coding before writing tests helps me be more productive and write higher-quality code. Other languages also have REPLs, but I feel Clojure is uniquely well suited to this workflow because of its immutable functional nature.

# Testing


Testing is simpler when most things are maps and pure functions. This is an example from the "[Gilded Rose Kata](https://github.com/emilybache/GildedRose-Refactoring-Kata)." This is an exercise where you refactor a messy piece of code using tests.

Here's an example of tests in Java.

``` java
@Test 
public void shouldNeverIncreaseQualityToMoreThanFifty() {
BackstagePassQualityControl qualityControl = new BackstagePassQualityControl();
Item backstagePass = anItem()
  	.withName(BACKSTAGE_PASS_ITEM_NAME)
      .withQuality(50)
    	.withSellInDays(5)
      .build()
  qualityControl.updateQualityFor(backstagePass);
  assertThat(backstagePass.getQuality(), is(50));
}
```

``` clojure
(deftest test-backstage-pass-peak
(def max-quality-pass 
    {:name BACKSTAGE_PASS_ITEM_NAME :quality 50 :sell-in 5})
(testing "Quality never goes over 50"
(is (= 50 (:quality (i/update-item max-quality-pass))))))
```

# Java and Javascript Interop


Clojure has good interop with the world's most popular languages. You can tap into the Java ecosystem for foundational libraries like the AWS SDK or database clients. Clojurescript has an excellent wrapper around React called Reagent. You can write your entire stack in Clojure, meaning a single person can be highly productive. The interop story could be better, though: although it works technically, the difference between the programming models does have some friction. This can usually be solved by writing a wrapper. You need to understand the host language as well as Clojure to interop effectively

``` clojure
(System/getProperty "java.vm.version")
```

# Concurrency


Now that Moore's Law is ending, we can't rely on speed increases of a single core anymore. We need to write code that can take advantage of multiple cores and correctly run in parallel.

I feel bad about using languages like Python or Javascript that are single inherently single-threaded. Languages like Java or C++, which weren't designed with concurrency, are hard to use correctly.

Clojure's data structures are thread-safe by default, and it has numerous concurrency primitives. The language design de-emphasis the use of state and emphasizes using values instead, which makes concurrency much simpler.

# I must have types


Initially, I was not too fond of Clojure because I was used to semi strongly typed languages like Java and C++.  If you use types, you should consider their downsides and the cost of the coupling introduced by type information flowing through your program.

# Good Design


The design choices and tradeoffs in Clojure were made deliberately. There are much fewer sharp edges and historical accidents in Clojure than in any other language I've used. Clojure is opinionated on how you write software, but if you buy into that opinion using pure functions and immutable data structures, the experience is very streamlined.

I remember learning the difference between comparing primitives and objects in Java. Code like this feels unintuitive.

## Equality


``` java
Integer a = new Integer(1);
Integer b = new Integer(1);

if (a == b){
System.out.println("True")
} else {
System.out.println("False")
}

if (a.equals(b)){
System.out.println("True")
} else {
System.out.println("False")
}
```

Comparing object equality is almost never what I want to do and I don't think it's a good default behavior.

Consider comparing values in Javascript

``` js
({foo: "bar"} === {foo: "bar"})
// false, these objects are not equal
```

In Clojure, there is only `=` for structural equality and no `=` assignment operator.

``` clojure
(= {:foo "bar"} {:foo "bar"})
```

This code in Clojure behaves the way I want, comparing equality of values, and I don't need to know the difference between `=`, `equals`, `==`, `===`, `deepEqual`, and `deepStrictEqual`.

The only falsy values in Clojure are `nil` and `false`; everything else is truthy.

## Polymorphism without classes


Clojure is described as having "polymorphism a la carte," which means it has the benefits of inheritance and interfaces without being forced to use them and without many of their downsides.

In Java, we could do something like this to represent a shape that can be extended in other parts of the program.

``` java
abstract class Shape {
public double area() {
    return 0;
}
}

class Rectangle extends Shape {
protected int width, height;

public Rectangle(int width, int height) {
    this.width = width; this.height = height;
}

public double area() {
    return width * height;
}
}

class Triangle extends Shape {
protected int a, b, c;

public Triangle(int a, int b, int c) {
    this.a = a; this.b = b; this.c = c;
}

public double area() {
    double s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}
}

class Circle extends Shape {
protected int r;

public Circle(int r) {
    this.r = r;
}

public double area() {
    return Math.PI * r * r;
}
}
```

One downside of this approach is we need to think hard ahead of time about the relationship of our data.

In Clojure, we can start with the data and add "multiple dispatch" semantics if needed.

``` clojure
(def triangle {:shape :triangle :point-a 1 :point-b 2 :point-c 3})
(def rect {:shape :rect :width 3 :height 4})
(def circle {:shape :circle :radius 5})
(defmulti area :shape)
(defmethod area :rect [r]
(* (:width r) (:height r)))
(defmethod area :circle [c]
(* Math/PI (* (:radius c) (:radius c))))
(defmethod area :default [x] :error)

(area circle)
```

These are some of the reasons Clojure is one of my favorite languages. I highly encourage you to try it, even if you don't use it professionally, because the ideas in Clojure and Lisp will make you a better programmer.
