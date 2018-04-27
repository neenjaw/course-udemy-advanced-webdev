# Advanced CSS: Layout with Flexbox

What is **Flexbox**?

> It's a more efficient way to lay out, align and distribute space among items in a container (even if the size is unknown)

## Resources

- [CSS Tricks - Flexbox](https://css-tricks.com/snippets/css/a-guide-to-flexbox/)
- [Flexbox Froggy](http://flexboxfroggy.com/)

| Container Properties | Flex Item Properties |
|------------|------------|
|`flex-direction`|`order`|
|`justify-content`|`flex`|
|`flex-wrap`|`flex-grow`|
|`align-items`|`flex-shrink`|
|`align-content`|`align-self`|

## The Magic of `display: flex`

- [Code Pen Example](https://codepen.io/Colt/pen/MvwVJe)

```css
.container {
    display: flex;
}
```

## Basic Flexbox Terminology

- **Flex Container** Whichever container that has the `display: flex` property
- **Flex Items** Whichever elements are the children of the *Flex Container*
- **Main Axis** The axis that follows the direction of the flex container
  - When a row, Left -> Right
  - When a row-reverse, Right -> Left
  - When a column, Top -> Bottom
  - When a column-reverse, Bottom -> Top
- **Cross Axis** The axis that follows perpendicular axis to the main axis
  - When a row, Top -> Bottom
  - When a row-reverse, Top -> Bottom
  - When a column, Left -> Right
  - When a column-reverse, Left -> Right

## `flex-direction`

Sets the direction of the main axis

`flex-direction: row|column|row-reverse|column-reverse`

## `flex-wrap`

Can the items wrap to the next line? or should they be all on the same line?

`flex-wrap: wrap|nowrap|wrap-reverse`

## `justify-content`

How should content and space be distributed along the main axis

`justify-content: center|flex-start|flex-end|space-between|space-around`

## Exercise: Flexbox Sidebar

- [Codepen Start](https://codepen.io/Colt/pen/GvpNEE?editors=1100)
- [Codepen Mine](https://codepen.io/neenjaw/pen/qYaYgM?editors=1100)

## `align-items`

How should content and space be distributed along the cross axis.

`align-items: center|flex-start|flex-end|stretch|baseline`

## `align-content`

Defines how space is distributed *between rows* in flex container along the cross axis

From CSS Tricks:

> This aligns a flex container's lines within when there is extra space in the cross-axis, similar to how justify-content aligns individual items within the main-axis.
> *Note: this property has no effect when there is only one line of flex items.*

`align-content: flex-start|flex-end|stretch|center|space-between|space-around`

## Exercise: Nav Bar

- [Code Pen](https://codepen.io/neenjaw/pen/erdozz?editors=1100)
- [Code Pen Solution](https://codepen.io/Colt/pen/WEQQwq)

## `align-self`

Allows an individual box to be aligned independently from the rest on the cross axis

`align-self: flex-start|flex-end|stretch|center|baseline`

## `order`

Specifies the order used to lay out items in the flex container. By default everything has an order of '0'.

The order in the flexbox goes from least to greatest order.

`order: <int>`

## `flex`

A short hand for these three properties:

1. `flex-basis`
2. `flex-grow`
3. `flex-shrink`

Can be combined into this shorthand:

`flex: <grow> <shrink> <basis<`

### `flex-basis`

Sort of like `width` but not really.  Specifies the ideal size of a flex item *BEFORE* it's placed into a flex container.

`flex-basis: <measurement>`

- [Geddski on flexbasis](http://gedd.ski/post/the-difference-between-width-and-flex-basis/)

### `flex-grow`

How does the unused space in the flexbox get used?

`flex-grow: 0|<int ratio>`

- *0* means don't grow
- *ratio* means that the space will be weighted

- [CSS Tricks Resource - flex-grow](https://css-tricks.com/flex-grow-is-weird/)

### `flex-shrink`

How does the flex-box item react when there isnt enough space in the container

`flex-shrink: 0|<int ratio>`

- *0* means don't shrink
- *ratio* means that the space will be weighted

## Exercise: Polygon Widget

- [Code Pen](https://codepen.io/neenjaw/pen/vjydbO?editors=1100)
- [Code Pen Solution](https://codepen.io/Colt/pen/oexwvb)

## Exercise: Holy Grail Layout

- [Wikipedia: Holy Grail (web design)](https://en.wikipedia.org/wiki/Holy_grail_(web_design))
- [Code Pen](https://codepen.io/neenjaw/pen/PebRPp?editors=1100)

## Browser Support

- [Medium: How to deal with older browsers?](https://medium.com/css-mine/flexbox-how-to-deal-with-older-browsers-fbf6eb8c7a65)
- [CSS Tricks: mixing old and new flexbox](https://css-tricks.com/using-flexbox/)