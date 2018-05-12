# Promise Chaining

## Objectives

- Describe the disadvantages of using nested callbacks
- Return a promise from a .then callback function
- Use a promise to make async code seem sequential

## Nested Async Callbacks

```js
var counter = 0;
setTimeout(function() {
    counter++;
    console.log("Counter:", counter);
    setTimeout(function() {
        counter++;
        console.log("Counter:", counter);
        setTimeout(function() {
            counter++;
            console.log("Counter:", counter);
        }, 3000)
    }, 2000)
}, 1000)
```

 This is very messy, difficult to read, logic is difficult to reason, hard to maintain in the long run, not modular.

## Promise chaining

Means using sequential `.then` calls.

```js
var promise = new Promise(function(resolve, reject) {
    setTimeout(function () {
        const randomInt = Math.floor(Math.random() * 10);
        resolve(randomInt);
    }, 500);
});

//returns a promise, so useful in chaining aynchronous tasks
promise.then(function(data) {
    console.log("Random int passed to resolve:", data);
    return new Promise(function(resolve, reject) {
        setTimeout(function() {
            resolve(Math.floor(Math.random() * 10));
        }, 3000);
    });
}).then(function(data) {
    console.log("Second random int passed to resolve:", data);
});

//can also chain data
promise.then(function(data) {
    return data * 2;
}).then(function(data) {
    return data + 20;
}).then(function(data) {
    console.log(data);
});
```

## Refactored nexted callbacks

```js
var counter = 0;

function incrementCounter() {
    counter++;
    console.log("Counter:", counter);
}

function runLater(callback, timeInMs) {
    var promise = new Promise(function(resolve, reject) {
        setTimeout(function() {
            var res = callback();
            resolve(res);
        }, timeInMs);
    });

    return promise;
}

runLater(incrementCounter, 1000)
    .then(function() {
        return runLater(incrementCounter, 2000);
    })
    .then(function() {
        return runLater(incrementCounter, 3000);
    })
    .then(function() {
        // final .then not necessary, but could go on.
    })
```

