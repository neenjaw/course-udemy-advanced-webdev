# XHR Requests

## Resources

- [XMLHttpRequest](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest)
- [XMLHttpRequest.readyState](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/readyState)
- [XMLHttpRequest.status](https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/status)
- [HTTP response status codes](https://developer.mozilla.org/en-US/docs/Web/HTTP/Status)

## Syntax

```javascript
var XHR = new XMLHttpRequest();

XHR.onreadystatechange = function() {
    if (XHR.readyState == 4 && XHR.status = 200) {
        console.log(XHR.responseText);
    }
};

XHR.open("GET", "https://api.github.com/zen");
XHR.send();
```

## Example

- [Code Pen](https://codepen.io/neenjaw/pen/rvQwBN?editors=0010#0)

## Problems with XHR

- Ugly, Bulky Syntax
- It's > 16 years old, written with different intentions
- No Streaming

### First AJAX App - Random Dog

- [Code Starter](https://codepen.io/Colt/pen/MvbLdo)
- [Code Final](https://codepen.io/Colt/pen/PKbVxM)
- [Dog API](https://dog.ceo/api/breeds/image/random)