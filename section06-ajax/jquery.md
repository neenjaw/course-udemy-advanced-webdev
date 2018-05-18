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

## $.get()

```js
  $.get('https://api.github.com/users/colt')
   .done(function(data){
     console.log(data);
   })
   .fail(function(){
     console.log("ERROR!");
   })
```

## $.post()

```js
var data = {name: "Charlie", city: "Florence"};

$.post("www.catsarecoolandsoaredogs.com", data)
 .done(function(data){
     console.log("HI!");
 })
 .fail(function(){
     console.log("ERROR!");
 })
```

## $.getJSON()

```js
$.getJSON("https://api.github.com/users/colt")
 .done(function(data){
     console.log(data);
 })
 .fail(function(){
     console.log("PROBLEM!");
 })
```


### Links

- [jQuery Doc for $.ajax](http://api.jquery.com/jQuery.ajax/)
- [jQuery Doc for $.get](https://api.jquery.com/jQuery.get/)
- [jQuery Source for Ajax](https://github.com/jquery/jquery/blob/731c501155ef139f53029c0e58409b80f0af3a0c/src/ajax.js)
- [jQuery Source for XHR](https://github.com/jquery/jquery/blob/731c501155ef139f53029c0e58409b80f0af3a0c/src/ajax/xhr.js)
- [$.ajax Example](https://codepen.io/Colt/pen/brYLvg)
- [Shorthand Examples](https://codepen.io/Colt/pen/braVVr?editors=1010)
- [Bacon Ipsum API](https://baconipsum.com/api/?type=meat-and-filler)

## Resources

- [jQuery CDNs](https://code.jquery.com/)