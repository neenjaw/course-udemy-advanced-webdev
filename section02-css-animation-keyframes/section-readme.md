# Keyframe Animations

They allow us to build multi component, multi state animations.

- [MDN @keyframes](https://developer.mozilla.org/en-US/docs/Web/CSS/@keyframes)

> transitions allow us to animate a **single state change**

> keyframes allow for more complex, **multi-state animations**

## Basic 

There is an implicit timeline running from 0% to 100%

Can then say:

| Property | 0% | @25% | @50% | @75% | @100% |
|----------|----|------|------|------|-------|
| `color:` | `red` | `orange` | `yellow` | 
| `font-size:` | `20px` | | `40px` | 

## Exercise

- [Codepen Rainbow Text Example](https://codepen.io/neenjaw/pen/jxrgOE?editors=1100)

### Walkthrough

#### 1. Define the Keyframe

```css
@keyframes rainbowtext {
  0% {
    color: red;
    font-size: 20px;
  }
  25% {
    color: orange;
  }
  50% {
    color: yellow;
    font-size: 40px;
  }
  75% {
    color: green;
  }
  100% {
    color: purple;
    font-size: 20px;
  }
}
```

#### 2. Apply the Keyframe using the `animation-` css syntax

```css
.block {
  animation-name: rainbowtext;
  animation-duration: 3s;
  animation-timing-function: linear;
  animation-delay: 0s;
  animation-iteration-count: infinite;
}
```

## CSS `animation-` Properties

- `animation-name: <str>` - which named @keyframes
- `animation-duration: <time>` - how long for the animation to take place over
- `animation-timing-function: <timing-function>` - how to apply the timing
- `animation-delay: <time>` - how much of a delay should their be before the animation starts
- `animation-iteration-count: <int>|infinite` - how many times the animation should repeat
- `animation-fill-mode: forwards|backwards|both|none` - specifies how an animation should apply styles before and after the animation -- e.g. how should the style linger or not linger
  - [Code Pen Example](https://codepen.io/Colt/pen/mMybrx)
- `animation-direction: normal|reverse|alternate|alternate-reverse|initial|inherit` - play the keyframes in the opposite order, with the timing function reversed
- `animation-play-state: paused|running|initial|inherit` - can specify CSS rules to make the animation pause or run

## Exercise

- [Rising and Setting Sun - STARTER](https://codepen.io/Colt/pen/JyPWBE?editors=1100)
- [Rising and Setting Sun - Mine](https://codepen.io/neenjaw/pen/wjWVXK?editors=1100)
- [Rising and Setting Sun - Solution](https://codepen.io/Colt/pen/OgKrRZ?editors=1100)

Notable design deviations, user the transform origin to facilitate using the transform: rotate() function for the sun's movement.

## Animation Shorthand

```css
animation: [duration] [timing-function] [delay] [iteration-count] [direction] [fill-mode] [play-state] [name]
animation: 3s ease-in 1s 2 reverse both paused slidein;

/* The order changes quite a bit, see MDN docs*/
animation: changecolor 3s linear 1s infinite
animation: jiggle 4s;
```

## Exercise

Building a CSS Loader:

- [Examples](https://codepen.io/RRoberts/pen/pEXWEp)

Starter

- [Code Pen Starter](https://codepen.io/Colt/pen/OjPwmL?editors=1100)

Mine

- [Mine](https://codepen.io/neenjaw/pen/XqjrOw?editors=1100)