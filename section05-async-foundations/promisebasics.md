# Promise Basics

## Objective

- define a promise
- add a .then callback to a promise
- add a .catch callback to a promise
- wrap a setTimeout call in a promise

## Concepts

A promise is an object that represents a task that will be completed in the future.

Analogy: Taking a number at a government office before you can get helped.  The piece of paper you get is like your promise.  The help you get back from the goverment is the fulfillment of the contract.

## Creation

```js
const promise1 = new Promise(function(resolve, reject) {
    let problem = (Math.random() < 0.5);

    if (problem) {
        reject("Error");
    } else {
        resolve([1,2,3,4]);
    }
});

promise1
    .then(function(arr) {
        console.log("Promise p1 resolved with data:", arr);
    })
    .catch(function(err) {
        console.log("Promise p1 was rejected with data:", err);
    });
```

## Wrap setTimeout with Promise

```js
const promise = new Promise(function(resolve, reject) {
    setTimeout(function() {
        const randomInt = Math.floor(Math.random() * 10);
        resolve(randomInt);
    }, 4000);
});

promise.then(function(data) {
    console.log("Random int passed to resolve:", data);
});
```