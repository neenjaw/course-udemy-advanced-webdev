# Javascript Async Foundations

## Objectives

- Define callback functions
- define higher order functions
- use a callback function to make your code more general
- create callbacks using anonymous functions

## Callbacks

> callback is a function that is passed into another function as a parameter then invoked by that other function.

```js
function callback() {
    console.log("Coming from callback");
}

function higherOrder(fn) {
    console.log("About to call callback");
    fn();
    console.log("Callback has been invoked");
}

higherOrder(callback);
```

> a higher order function is a function that accepts a callback as a parmeter

### What are call backs used for

> callbacks are a very common design pattern in javascript

- Advancd Array Methods
- Browser events
- AJAX Requests
- React Development

### Duplicate Code without Callbacks

- Before:

```js
function sendMessageConsole(msg) {
    console.log(msg);
}

function sendMessageAlert(msg) {
    alert(msg);
}

function sendMessageConfirm(msg) {
    return confirm(msg);
}
```

- After:

```js
function sendMessage(message, callback) {
    return callback(message);
}

sendMessage("msg", console.log);

sendMessage("msg", alert);

var answer = sendMessage("msg", confirm);
```

### Another Example

```js
function greet(name, formatter) {
    return "Hello, " + formatter(name);
}

function upperCaseName(name) {
    return name.toUpperCase();
}

greet("Tim", upperCaseName);

greet("Tim", function(name) {
    return name.toUpperCase();
});
```

## setTimeout() and setInterval()

### setTimeout()

- a function that asynchronously invikes a callback after a delay in milliseconds

```js
const timerID = setTimeout(function() {
    console.log("Runs in approx. 2000ms");
}, 2000);

//timerID can be used to cancel the timer
clearTimeout(timerID);
```

### setInterval()

- a function with continually invokes a callback every X milliseconds

```js
let num = 0;
setInterval(function() {
    num++;
    console.log("num:", num);
}, 1000);
```

## Assignment

```js
function countDown(seconds) {
    let timeLeft = seconds;
    const intervalId = setInterval(function() {
        timeLeft = timeLeft - 1;
        if (timeLeft <= 0) {
            clearInterval(intervalId);
            console.log("Ring Ring Ring!!!");
        } else {
            console.log(timeLeft);
        }
    }, 1000);
}
```