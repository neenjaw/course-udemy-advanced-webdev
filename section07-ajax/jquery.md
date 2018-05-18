# jQuery

- Most popular javascript library
- The "Write Less, Do More" Library

## Objectives

Review 4 jQuery methods:

- $.ajax
- $.get
- $.post
- $.getJSON

How to include jQuery:

1. go to jquery.net
2. get CDN link
3. include it in your html.

- [Example of how to include jQUery](https://codepen.io/Colt/pen/eEymav)

## $.ajax

```js
$.ajax({
    method: "GET",
    url: "some.api.com",
})
.done(function(res) {
    //something
})
.fail(function() {
    //something
})
```

This is the basic form and all you need to get started.  There are lots of options, and the method has changed over the development of jQuery.

```js
//This returns a parsed JSON from the endpoint because it has intelligently guessed from the MIME type
$.ajax({
    method: "GET",
    url: "https://baconipsum.com/api/?type=meat-and-filler"
})
.done(function(data) {
    console.log(data);
});

//This is explicitly specifying the return type as a JSON and will parse it accordingly.
$.ajax({
    method: "GET",
    url: "https://baconipsum.com/api/?type=meat-and-filler",
    dataType: "json"
})
.done(function(data) {
    console.log(data);

    $('p').text(data[0]);
})
.fail(function() {
    //will catch bad internet conn
    //will catch fail HTTP status codes
});
```

### Links

- [jQuery Doc for $.ajax](http://api.jquery.com/jQuery.ajax/)
- [$.ajax Example](https://codepen.io/Colt/pen/brYLvg)
- [Bacon Ipsum API](https://baconipsum.com/api/?type=meat-and-filler)

## Resources

- [jQuery CDNs](https://code.jquery.com/)