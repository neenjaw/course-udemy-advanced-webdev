# Closures and the Keyword 'this'

## Objectives

1. Understand what a closure is what it is not
2. Use a closure to emulate private variables
3. List use cases for closures in the real world

## Closures Defined

> A closure is a function that makes use of variables defined in outer functions that have previously returned

- Example 1:

```js
function outer() {
    var start = 'closures are';

    return function inner() {
        return start + ' ' + 'awesome';
    }
}

outer() // returns the inner function
outer()() // 'closures are awesome'
```

- Example 2:

```js
function outer(a) {
    return function inner(b) {
        return a + b;
    }
}

outer(5)(5); // 10
var store = outer(5);
store(10); //15
```

## Note

Only variables used in the inner function are remembered!

```js
function outerFn() {
    var data = 'something from outerFn';
    var fact = 'remember me!';

    return innerFn() {
        debugger;

        return fact;
    }
}
```

## Using Closures