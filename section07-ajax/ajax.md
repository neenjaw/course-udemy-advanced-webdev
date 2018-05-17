# AJAX

- A: Asynchronous
- J: Javascript
- A: and
- X: XML

> AJAX is not a technology or a framework, it is a method of structuring software
>
> With AJAX, websites can send and request data from a server in the background without disturbing the current page

## Making Requests with Javascript

1. XML-HTTP Request (XHR)
2. Fetch API
3. 3rd party libraries
    - jQuery, Axios, etc.

## JSON and XML

Ajax requests should return data, not structure. So we use formats like XML and JSON to represent data and relationships.

### XML

XML is syntactically similar to HTML, but it does not describe presentation like HTML does.

```XML
<pin>
    <title>Adorable Maine Coon</title>
    <author>Cindy S</author>
    <num-saves>1800</num-saves>
</pin>
```

### JSON

> Javascript Object Notation

JSON looks almost exactly like Javascript Objects

```json
'pin':{
    'title': 'Adorable Maine Coon',
    'author': 'Cindy S',
    'num-saves': 1800
}
```

JSON is more commonly used just because of the popularity of JavaScript.

## References

- [Adaptive Path - AJAX](http://adaptivepath.org/ideas/ajax-new-approach-web-applications/)
- [View Reddit as JSON](https://www.reddit.com/.json)
