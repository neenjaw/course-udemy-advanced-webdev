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