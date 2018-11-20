# D3js and SVG

## Objectives

- Compare and contrast raster and vector graphics
- create svg elements in the DOM
- Draw lines using SVG
- Draw Rectangles, Polygons, and Circles using SVG
- Write text on SVG
- Draw paths on SVG
- use D3js to build SVG bar chart

## SVG

- Scalable Vector Graphics
- Vector, no raster
  - Raster images use pixels
  - raster img examples are: .gif, .jpg, .png
  - Difference is best seen when zooming in. SVG is lossless because it is computed, where pixels are resized.

- [CodePen](https://codepen.io/neenjaw/pen/vQWXNr?editors=1100)

### Coordinates in SVG

- (0,0) is in the upper left corner by default
- y values increase as they go down
- x values increase as they go right

### g Elements

Allows you to group elements, styles

```html
<g stroke-width="5px" stroke="blue">
    <line x1="100" y1="100" x2="700" y2="350">
    <line x1="200" y1="100" x2="800" y2="350">
</g>
```

### Line

- Draws a line between two points: `(x1, y1)`, `(x2, y2)`
- must set `stroke-width` as it defaults to `0`
- can set the color with `stroke`

```html
<line x1="100" y1="100" x2="700" y2="350" stroke-width="5px" stroke="blue">
```

### Rectangle Elements

- `x` coordinate of th eupper-left corner
- `y` coordinate of th eupper-left corner
- `width` of the rectangle
- `height` of the rectangle
- `rx` x-radius of the rounded corner
- `ry` y-radius of the rounded corner

```html
<rect x="100" y="100" width="750" height="250" fill="#ffc107" stroke="blue" stroke-width="blue" rx="2" ry="2">
```

### Polygon

- `points` list of space delimited x,y coordinates

```html
<polygon
    fill="yellow"
    stroke="purple"
    stroke-width="4px"
    points=" 400,21.5 450.5,177 614,177 481.5,273 532.5,428.5 400,332.5 267.5,428.5 318.5,273 186,177 349.5,177"
/>
```

### Circle

- `cx`
- `cy`
- `r`

```html
<circle cx="400" cy="250" r="60" fill="black">
<circle cx="400" cy="235" r="65" fill="yellow">
<circle cx="370" cy="210" r="10" fill="black">
<circle cx="430" cy="210" r="10" fill="black">
```

### Text

- `x` bottom-left corner of the text
- `y`
- `dx` shift the anchor point
- `dy`

CSS property:

- `text-anchor`: `start|middle|end`
- `alignment-baseline`: `hanging|middle|baseline`
- and other css properties

```html
<text x="400" y="170" text-anchor="middle" font-size="3em" font-family="sans-serif" fill="white" stroke-width="1px" stroke="gray" transform="rotate(-10 400,150)">Starry Night!</text>
```

### SVG Path

- Have a lot of power, but hard to do by hand
- `d` attribute commands
  - uppercase commands move to the `(x,y)` specified while lowercase commands move the `dx`, `dy` from the line's current position
  - move command -- `[m|M] x y` -- moves the cursor
  - line command -- `[l|L] x y` -- draws a line from cursors current position, will end at `(x,y)`, can be chained
  - close command -- `[z|Z]` -- closes the path with a line
  - horizontal command -- `[h|H] x` -- draws a horizontal line from the cursor
  - vertical command -- `[v|V] y` -- draws a vertical line from the cursor
  - curve commands
    - quadratic curve -- `Q cx cy, x y`
    - cubic bezier curve -- `C cx1 cy1, cx2 cy2, x y`
    - circular arc command -- `A rx ry rotate largeArc sweep x y`

```html
<path
    d="M 400 100
       L 500 300
       L 300 300
       L 400 100"
    stroke="purple"
    stroke-width="3px"
/>


<path
    d="m 400 100
       l 100 200
       l -200 000
       l 100 -200"
    stroke="magenta"
    stroke-width="4px"
/>
```