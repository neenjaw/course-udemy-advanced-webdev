# Transitions

- [MDN Using CSS Transitions](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Transitions/Using_CSS_transitions)
- [Code Pen Example](https://codepen.io/neenjaw/pen/KRMJKX)

## Basics

Allow us to control animation speed when changing CSS properties.

> e.g. double the size of this div over 3 seconds

## 4 transition properties

1. transition-duration
2. transition-property
3. transition-timing-function
4. transition-delay

### transition-duration

- [MDN transition-duration](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-duration)
- [Code Pen Example](https://codepen.io/neenjaw/pen/WJxPwO)

- [MDN <time> data-type](https://developer.mozilla.org/en-US/docs/Web/CSS/time)

Allows to specifiy how long a transition should take to complete.

### transition-property

- [MDN transition-property](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-property)

Allows to specifiy which properties are to be transitioned.

You can write multiple in the same entry:

```css
.block {
    transition-property: background,    border-radius;
    transition-duration: 5s,            1s;
}
```

### transition-delay

- [Code Pen Example](https://codepen.io/neenjaw/pen/BxzMdR)
- [MDN transition-delay](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-delay)

How long until the transition takes place

```css
.block {
    transition-delay: 4s;
    transition-delay: 400ms, 12s;
}
```

### transition-timing-function

- [MDN transition-timing-function](https://developer.mozilla.org/en-US/docs/Web/CSS/transition-timing-function)
- [Easing Function](http://easings.net/)
- [Ceaser - CSS Easing Animation Tool](https://matthewlein.com/tools/ceaser)
- [Cubic Bezier Reference](http://cubic-bezier.com/#.17,.67,.83,.67)

## Transition Shorthand

```css
.block {
    transition: background 1.5s ease-in 1;
}
```

Putting it all together into one concise line. And then for multiple transitions: 

```css
.block {
    transition: background 1.5s ease-in 1,
        color 200ms ease-out 0.5s,
        transform 3s cubic-bezier(0.050, 0.005, 0.000, 0.870) 0ms
}
```

- [MDN transition](https://developer.mozilla.org/en-US/docs/Web/CSS/transition)
- [Code Pen](https://codepen.io/neenjaw/pen/gzMEpX)

## CSS Animation Performance

Two questions: 

1. What can be transitioned?
2. What should be transitioned?

### What can be transitioned?

Lots of things, there is a huge list of properties which can be transitioned.

- [MDN List of Animatable CSS properties](https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_animated_properties)

### What should be transitioned?

Soft rule of thumb is that there are four properties which can be transitioned with good performance:

1. `transform: translate();`
2. `transform: scale();`
3. `transform: rotate();`
4. `opacity`

- [High Performance CSS](https://www.html5rocks.com/en/tutorials/speed/high-performance-animations/)

## Exercise: Art Gallery

- [Colt's Starter](https://codepen.io/Colt/pen/OjJbLo?editors=1100)
- [Colt's Final Product](https://codepen.io/Colt/pen/WOjjJZ)

- [Mine](https://codepen.io/neenjaw/pen/mLEorq?editors=1100)

