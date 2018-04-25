# Keyframe Animations

They allow us to build multi component, multi state animations.

> transitions allow us to animate a **single state change**

> keyframes allow for more complex, **multi-state animations**

## Basic 

There is an implicit timeline running from 0% to 100%

Can then say:

| Property | 0% | @25% | @50% | @75% | @100% |
|----------|----|------|------|------|-------|
| `color:` | `red` | `orange` | `yellow` | 
| `font-size:` | `20px` | | `40px` | 