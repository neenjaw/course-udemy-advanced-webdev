# D3 and Data

## Objectives

- Join data to a d3 selection using the data method
- target nodes to append to the DOM via the enter selection
- target nodes to remove from the DOM via the exit selection
- perform more advanced data joins by using a key function
- update existing DOM elements with new data
- merge update an enter selections, and describe D3's general update pattern

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

## selection.data()

This creates a new selection object with two additional functions attached:

- enter()
- exit()

### selection.enter()

This creates `n` number of dummy nodes without elements attaced which then can be used with the `.append()` method to create DOM elements using the data

Can then use the `.text()` function with a callback to then use the data associated with the enter node.