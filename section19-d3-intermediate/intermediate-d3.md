# Intermediate D3

## Objectives

- Use D3 to calculate extreme values in a data set
- Use D3 to scale data
- Build scatterplots using D3 and SVG
- Use D3 to add axes and gridlines to graphs
- Add axis labels and titles to graphs
- Build histograms using D3 and SVG
- Build pie charts using D3 and SVG

## Extrema and Scales

- Problems encountered
  - Finding extreme values manually
  - Scaling our data manually

### Extreme Values

`d3.max(dataArr [, callback])`
`d3.min(dataArr [, callback])`

The callback allows you to specify how to associate your data to this.  Like when you have an array of objects.

### Scales

```js
d3.scaleLinear()
    .domain([num1, num2])
    .range([num3, num4])
```

Have a range 1-17 and -4 to 52, can use these functions to work with it;

```js
var scale = d3.scaleLinear()
    .domain([1, 17])
    .range([-4, 52])

scale(1)
> -4
scale(17)
> 52
```

## Exreme Values

Calculates min and max, returns them in an array

```js
d3.extent(dataArr [, callback])
```

## Axes

```js
d3.axisTop(scale)
d3.axisRight(scale)
d3.axisBottom(scale)
d3.axisLeft(scale)
```

## Gridlines

## Scatterplots

ex: life expectancy vs births per capita

```js
var width = 500;
var height = 500;
var padding = 20;

var yMax = d3.max(birthData2011, d => d.lifeExpectancy);
var yMin = d3.max(birthData2011, d => d.lifeExpectancy);

var yScale = d3.scaleLinear()
    // .domain([yMin, yMax])
    .domain(d3.extent(birthData2011, d => d.lifeExpectancy))
    .range([height - padding, padding])

var xScale = d3.scaleLinear()
    .domain(d3.extent(birthData2011, d => d.births / d.population))
    .range([padding,width - padding])

var xAxis = d3.axisBottom(xScale);

var colorScale = d3.scaleLinear()
    .domain(d3.extent(birthData2011, d => d.population / d.area))
    .range(['lightgreen', 'black'])

var radiusScale = d3.scaleLinear()
    .domain(d3.extent(birthData2011, d => d.births))
    .range([2,40])

d3.select('svg')
    .append('g')
      .attr('transform', `translate(0,${height - padding})`)
      .call(xAxis);

d3.select('svg')
    .attr('width', width)
    .attr('height', height)
  .selectAll('circle')
    .data(birthData2011)
    .append('circle')
      .attr('cx', d => xScale(d.births / d.population))
      .attr('cy', d => yScale(d.lifeExpectancy))
      .attr('r', d => radiusScale(d.births))
      .attr('fill', d => colorScale(d.population / d.area))
```