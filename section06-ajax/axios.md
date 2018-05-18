# Axios

## CDN

[Axios CDN](https://cdnjs.cloudflare.com/ajax/libs/axios/0.18.0/axios.min.js)

## Get

```js
axios.get(url)
    .then(function(res){
        //
    })
    .catch(function(err){
        //
    });
```

## Error Handling

- [Example](https://codepen.io/Colt/pen/qXpNGN?editors=1010)

```js
function handleErrors(err) {
    if (err.response) {
        console.log("Problem With Response ", err.response.status);
    } else if (err.request) {
        console.log("Problem With Request!");
    } else {
        console.log('Error', err.message);
    }
}
```

## Resources

- [GitHub Repo](https://github.com/axios/axios)
- [Axios basic get](https://codepen.io/Colt/pen/rzpLqE)
- [Open Trivia DB](https://opentdb.com/api.php?amount=1)
- [JSONPlaceholder](https://jsonplaceholder.typicode.com/)