# Object Oriented Programming

## Objectives

- Define what OOP (Object Oriented Programming) is
- Revisit the `new` keyword and understand the four things it does
- User constructor functions to reduce duplication in our code
- Use call and apply to refactor constructor functions

## Defined

- programming model around the idea of objects
- objects are called 'classes' which we can think of like a blueprint.  We call these objects created from classes 'instances'
- we strive to make our classes abstract and modular

## OOP in JavaScript

JavaScript does not have classes built into it, but we can mimic this with functions, objects, and closures.

### Constructor Functions

```js
function House(bedrooms, bathrooms, numSqft) {
    this.bedrooms = bedrooms;
    this.bathrooms = bathrooms;
    this.numSqft = numSqft;
}
```

### Object creation

```js
var firstHouse = new House(2, 2, 1000);
```

`new` does a few things:

1. Creates an empty object
2. Set the keyword `this` to the empty object
3. adds the line `return this` to the end of the function that follows it
4. It adds a property onto the empty object called `__proto__`, which links the prototype property on the constructor function to the empty object

```js
function Dog(name, age) {
    this.name = name;
    this.age = age;

    this.bark = function () {
        return `${this.name} just barked!`;
    }
}

var rusty = new Dog('Rusty', 3);
var fido = new Dog('Fido', 1);

rusty.bark();
fido.bark();
```

### Multiple Constructors

```js
function Car(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    // we can also set properties on the keyword this
    // that are preset values
    this.numWheels = 4;
}

function Motorcycle(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.numWheels = 2;
}
```

This can be refactored to:

```js
function Motorcycle(make, model, year) {
    // using call
    Car.call(this, make, model, year);
    this.numWheels = 2;
}
```

or using .apply():

```js
function Motorcycle(make, model, year) {
    Car.apply(this, [make, model, year]);
    this.numWheels = 2;
}
```

or even:

```js
function Motorcycle(make, model, year) {
    Car.apply(this, arguments);
    this.numWheels = 2;
}
```
