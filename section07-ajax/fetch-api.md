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

