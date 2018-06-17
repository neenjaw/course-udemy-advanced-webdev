# D3 and Data

## Objectives

- Join data to a d3 selection using the data method
- target nodes to append to the DOM via the enter selection
- target nodes to remove from the DOM via the exit selection
- perform more advanced data joins by using a key function
- update existing DOM elements with new data
- merge update an enter selections, and describe D3's general update pattern

## Resources

- [D3 In Depth -- Enter/Exit](http://d3indepth.com/enterexit/)
- [Code](https://bl.ocks.org/mmmaaatttttt/17616c80b7ecaaca5316f0218c19897a)
- [Live Site](http://bl.ocks.org/mmmaaatttttt/raw/17616c80b7ecaaca5316f0218c19897a/)

## Basic Data Joins

| HTML Structure | JS Data |
|+---------------|+--------|
| `<ul>`         | `var data = [` |
| `<li></li>`    | `{ key: 'value' },` |
| `<li></li>`    | `{ key: 'another value' },` |
| `<li></li>`    | `{ key: 'third value' },` |
| `</ul>`        | `];` |

How to join the model to the view?

- `selection.data()`
- `selection.enter()`

### selection.data()

This creates a new selection object with two additional functions attached:

- enter()
- exit()

### selection.enter()

This creates `n` number of dummy nodes without elements attaced which then can be used with the `.append()` method to create DOM elements using the data

Then, when manipulating a selection, you can use the data that is stored in d3's virtual dom to programmatically repond to the node's data:

- `selection.text(function callback(data, index) { return 'text to display'; })`
- `selection.style('style-name', function callback(data, index) { return 'style value'; })`

### selection.exit()

From a data selection, creates an exit selection which consists of elements to be removed from the DOM.  Usually followed by `.remove()`

If the data selection is shorter in length from the `.exit()` selection, the `.remove()` method will remove the surplus elements.

#### Initial

```html
<div id="content">
  <div></div>
  <div></div>
  <div></div>
</div>
```

#### D3 manipulation

```js
var myData = ['A'];

d3.select('#content')
  .selectAll('div')
  .data(myData)
  .exit()
  .remove();
```

#### Result

```html
<div id="content">
  <div></div>
</div>
```

## General Update Pattern

1. Grab the update selection, make any changes unique to that selection, store it in a variable.
2. Grab the exit selection an remove any unnecessary elements.
3. Grab the enter selection and make any changes unique to that selection.
4. Merge the enter and update selections, and make any changes that you want to be shared across both selections.