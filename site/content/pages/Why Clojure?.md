---
title: Why Clojure?
url: /blog/why-clojure
date: 2018-09-30
description: What makes Clojure interesting and well suited for modern software development?
tags:
- blog
- programming
- functional
- clojure
socialimage: /assets/Clojure_logo.svg_1660983015847_0.png
categories:
lastMod: 2022-08-20
---
## Intro

![Clojure_logo.svg.png](/assets/clojure_logo.svg_1660983015847_0.png)

Why not the programming language I'm already using or some other language? What makes Clojure uniquely well suited for modern software development?

Pure functions and immutable data are the easiest units of software to reason about

Deep support for immutable data structures

S-Expressions (parens) are re-usable and composable

Great support for destructuring, pattern matching, and working with maps in general

Most "features" from other languages can be added as extensions via macros or in terms of the language itself. Polymorphism, "types", inheritance, pattern matching, "go channels"

Interactive Programming: extremely fast feedback loop and experimentation with the REPL

Powerful and simple testing due to emphasis on pure functions and values

Good interop with the worlds most popular languages: Java and Javascript

Excellent concurrency support: immutability, software transactional memory, "Go Channels" (CSP), agents, everything in the JVM/Java

Subjectively good design - Strong notions of things like time, identity, state, and equality

## Pure Functions and Immutable Data Structures

Instead of mutating objects, Clojure encourages you to use immutable data structures. In many languages you create a mutable array object and append to it.

``` js
var myArray = ['one', 'two', 'three'];

function addOne(item) {
myArray.push(item);
}

myArray
```

We mutate the original array.

``` js
addOne('four');
myArray
```

In Clojure, whenever you "append" to a vector (array) you get a "new" vector and the original does not change. Anyone with a reference to the original can always count on it being the same.

``` clojure
(def my-vector ["one" "two" "three"])
my-vector
```

`conj` returns a new vector with the arguments appended.
``` clojure
(def my-new-vector (conj my-vector "four"))
my-new-vector

```

The original vector is unchanged.
```clojure
my-vector

```
Functions like `reverse` return a new vector, rather than mutating the original.

``` js
const myArray = ["one", "two", "three"];
myArray.reverse();

myArray
```

``` clojure
(def my-vector ["one" "two" "three"])
(reverse my-vector)

```

Our original vector is unchanged.
``` clojure
my-vector
```

This encourages us to use compositions of functions instead of functions that mutate objects. The benefit of this might not be immediately obvious, but this shift encourages writing programs in a way that's simpler. Programs made up of small reusable components are easier to change later. We just need to focus on the scope of the function, the inputs, and the outputs. We don't need to worry about prior state.

# (but (there (are (so (many (parens (🙀)))))))

The first thing you will notice in Clojure is how many parens there are and how dense the code is. It takes some getting used to, but the parens have a lot of benefits.

We can always rewrite syntax repetition with macros and there are plenty of techniques for reducing the number of parens including "threading" operators like `->>`. The following is equivalent to the header.

``` clojure
(->> but
   there
   are
   so
   many
   parens)
```

Function calls are different in Clojure than most languages. It is represented by a list where the first element is the function and the rest are the arguments to that function.

``` clojure

(defn my-function
[arg1 arg2]
(str arg1 arg2))

(my-function "first" "second")
```

The syntax is extremely regular. It's natural to wrap a function in another function.

``` clojure
(my-function (my-function "first" "second") "third")
```

Since all functions including built in functions are called the same way, it's easy to swap any function out with another, including built-ins.

``` clojure
(if (= 42 42) "True" "False")
(my-if (= 42 42) "True" "False")
```
The parens replace a lot of the curly brace notation in other languages.

``` js
function myFunction(arg1, arg2) {
if (arg1) {
  return arg1;
} else {
  return arg2;
}
}
```

``` clojure
(defn my-function
[arg1 arg2]
(if (not (blank? arg1))
   arg1
   arg2))
```

# Macros

Go has support for asynchronous "go channels" due to special syntax baked into the language. Clojure added the same features and syntax as a third party library. In Javascript you have to wait for syntax to be adopted or use a transpiler but in Clojure it could by implemented by anyone as a library.

``` go
messages := make(chan string)
go func() { messages <- "ping" }()
msg := <-messages
fmt.Println(msg)
```

``` go
(def c (chan 10)
(go (>! c "hello"))
(println (<!! c))
```

# Maps and Destructuring

Clojure is really good at extracting data from maps and sequences. It is a really good for "data programs", that are mostly calling an API, transforming a sequence, and calling another API.

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

Having a fast feedback loop is crucial to be productive. When I first started programming I would write some code, compile, then manually test my changes, maybe with a debugger. Then I discovered TDD with an auto test runner, which gave me a faster feedback loop, since I could be reasonably confident my program worked without having to recompile for every change. The fastest feedback loop I've discovered so far is the Clojure REPL with editor integration. With Emacs and CIDER I can execute code in my editor as I write it. Having a fast feedback loop for exploratory coding before writing tests helps me be a lot more productive and write higher quality code. Other languages also have REPLs but I feel Clojure is uniquely well suited to this workflow because of its immutable functional nature.

# Testing

Testing is simpler when most things are maps and pure functions. This is an example from the "Gilded Rose Kata".

``` java
  @Test public void
      BackstagePassQualityControl qualityControl = new BackstagePassQualityControl();

  shouldNeverIncreaseQualityToMoreThanFifty() {
Item backstagePass = anItem()
              .withName(BACKSTAGE_PASS_ITEM_NAME)
              .build()
      backstagePass.setSellIn(FIVE_DAYS);
      backstagePass.setQuality(50);

      qualityControl.updateQualityFor(backstagePass);

      assertThat(backstagePass.getQuality(), is(50));
  }
```

``` clojure
(def max-quality-pass
{:quality 50
 :sell-in 5})

 (deftest test-backstage-pass-peak
(testing "Quality never goes over 50"
  (is (= 50 (:quality (i/update-item max-quality-pass))))))
```

# Java and Javascript Interop

Clojure has good interop with the worlds most popular languages. You can tap into the Java ecosystem for foundational libraries like the AWS SDK or database clients. Clojurescript has an excellent wrapper around React called Reagent. You can write your entire stack in Clojure, meaning a single person can be extremely productive. The interop story isn't perfect though: although it works technically, the difference between the programming models does have some friction. This can usually be solved by writing a wrapper.

``` clojure
(System/getProperty "java.vm.version")
```

# Concurrency

Now that Moore's Law is ending, we can't rely on speed increases of a single core anymore. We need to write code that can take advantage of multiple cores and that can correctly run in parallel. I don't feel good about using some languages like Python or Javascript that are single inherently single threaded. Languages like Java or C++, which weren't designed with concurrency in mind are hard to use correctly. Clojure's data structures are thread safe by default and it has numerous concurrency primitives. The language design de-emphasis the us of state and emphasizes the use of values instead.

# I must have types

I initially disliked clojure coming from my semi strongly typed Java and C++.  If you use types you have to consider their downsides and the cost of the coupling introduced by type information flowing through your program. After using Clojure, I find things like the "builder pattern" contrived. There is usually only a few types of true "data" and the rest of the program are subsets and combinations of the data, which don't always deserve an explicit name or type. I feel using languages that encourage classes encourages you to make abstractions too early, and making the wrong abstraction is much worse than repetition. A lot of the "bugs" you catch at compile time are often self inflicted bookeeping mistakes due to the increased complexity. I think testing is a much stronger form of software validation and will catch the errors that types would have.

# Good Design

The design choices and tradeoffs in Clojure were made deliberately. There are much fewer sharp edges and historical accidents in Clojure than any other language I've used. Clojure is opinionated on the way you write software but if you buy into that opinion, using pure functions and immutable data structures, the experience is very streamlined.


I remember having to learn the difference between comparing primitives and objects in Java. Code like this feels unintuitive.

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

``` js
// ==?
({foo: "bar"} === {foo: "bar"})
```

This does what I expect, and I don't need to know the difference between `=`, `equals`, `{{< logseq/mark >}}`, `{{< / logseq/mark >}}=`, `deepEqual`, and `deepStrictEqual`.

``` clojure
(= {:foo "bar"} {:foo "bar"})
```
There is only `=` for structural equality and no assignment operator.

The only falsy values are `nil` and `false` and everything else is truthy.

## Polymorphism without classes

Clojure is described as having "polymorphism a la carte", which means it has the benefits of inheritance and interface without being forced to use it and without many of the downsides.

In Java, we could do something like this to represent a shape that can be extended in other areas of the program.
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

In Clojure we can start with the data and add multiple dispatch if or when we need it.
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
