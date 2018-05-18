# Fetch API

```js
fetch(url)
    .then(function(res) {
        console.log(res);
    })
    .catch(function(err) {
        console.error(err);
    });

fetch(url)
    .then(function(res) {
        return res.json();
    })
    .then(function(data) {
        console.log(data);
    })
    .catch(function(err) {
        console.error(err);
    })
```

- [Streaming Fetch Example](https://domenic.github.io/streams-demo/)

> If this was done with XHR, it would require the entire string to be loaded consuming a lot of memory, if not overloading the buffer.

## Fetch Options

```js
fetch(url, {
    method: 'POST',
    body: JSON.stringify({
        name: 'blue',
        login: 'bluecat'
    })
})
.then(function(data) {
    console.log(data);
})
.catch(function(err) {
    console.error(err);
})
```

## Error Handling

- [Code Pen Example](https://codepen.io/neenjaw/pen/LmXBGb?editors=0011)

### What does .catch() do in the fetch API

Will catch errors and thrown exceptions.

Examples:

- When the internet isn't connected
- Errors thrown in the then() block

```js
fetch(url)
    .then((response) => {
        //Error checking in first block
        if (!response.ok) {
            throw Error('problem!');
        }

        return response;
    })
    .then((response) => {
        //Process the response
    })
    .catch((err) => {
        console.error(err);
    });

// Can refactor this for clarity:
fetch(url)
    .then(handleErrors)
    .then((response) => {
        //Process the response
    })
    .catch((err) => {
        console.error(err);
    });

function handleErrors(response) {
    //Error checking in first block
    if (!response.ok) {
        throw Error('problem!');
    }

    return response;
}
```

## Problem with Fetch

- Biggest issue is **browser support**
  - This is especially true for internet explorer

## Reference

- [Fetch API - fetch()](https://developer.mozilla.org/en-US/docs/Web/API/WindowOrWorkerGlobalScope/fetch)