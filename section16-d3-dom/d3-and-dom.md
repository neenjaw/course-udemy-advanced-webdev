# D3 and DOM Stucture

## Resources

- [D3 Website](https://d3js.org/)
- [D3 Gallery Github](https://github.com/d3/d3/wiki/Gallery)
- [NYT Interactives](https://www.nytimes.com/interactive/2016/12/28/us/year-in-interactive-graphics.html?mcubz=3)
- [NYT _____](https://www.nytimes.com/interactive/2015/05/28/upshot/you-draw-it-how-family-income-affects-childrens-college-chances.html)
- [Pudding - Film Trends](https://pudding.cool/2017/06/film-trends/)
- [Pudding - office](https://pudding.cool/2017/08/the-office/)

## Selections

### Select elements in the DOM

#### d3.select 

```js
d3.select("p") // Can be any sort of CSS selector
```

```js
d3.select('.outer')
    .style('color', 'purple')
  .select('.inner')
    .style('font-size', '30px')
    .style('background-color', 'orange')
  .select('div')
    .style('border', '8px solid blue')
```

#### d3.selectAll

```js
d3.selectAll("p") // Can be any sort of CSS selector
```

#### Accessing Nodes

```js
let x = d3.selectAll("p");
x.node() // a single node
x.nodes() // all of the selected nodes
```

### Setting attributes, innerText, Style Props

```js
let x = d3.select('p')
    .style("background-color", "#00feab") // sets the background-color
    .style("color", "blue") // sets the color of the font
    .text("d3 is cool") // sets the innerText
    .attr("attribute", value) //set the attribute to the value
```

#### Get attr's and prop's values

```js
let x = d3.select('p')
    .style("background-color") // gets current value
    .style("color")  // gets current value
    .text() // gets current innerText
    .attr("attribute")  // gets current value of attribute
```

### Passing callbacks

- `selection.style(property [, callback])`
- `selection.attr(property [, callback])`
- `selection.text([callback])`
- `selection.html([callback])`

#### Callback structure

```js
function (_, idx) {
    //code
}

let x = d3.selectAll('p')
            .style('font-size', function(_,idx){
                if (idx % 2 === 0) {
                    return '6px';
                } else {
                    return '20px';
                }
            });
```

### Adding event listeners

```js
//add
d3.select('h1').on('click', function() {
    console.log('event listeners are sweet!');
});

//remove
d3.select('h1').on('click', null);

d3.select('#new-note').on('submit', function() {
    d3.event.preventDefault();

    const input = d3.select('input');

    d3.select('#notes')
        .append('p')
            .classed('note', true)
            .text(input.property('value'));

    input.property('value', '');
});

d3.selectAll('p').remove()
```