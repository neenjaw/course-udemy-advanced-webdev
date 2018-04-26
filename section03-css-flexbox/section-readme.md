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
  - When a row-reverse, Right-Left
  - When a column, Top -> Bottom
  - When a column-reverse, Bottom -> Top
- **Cross Axis** The axis that follows perpendicular axis to the main axis
  - When a row, Top -> Bottom
  - When a row-reverse, Bottom -> Top
  - When a column, Left -> Right
  - When a column-reverse, Right-Left