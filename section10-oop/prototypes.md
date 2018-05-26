# Prototypes

A link is created between the `__proto__` and the object when the `new` keyword is used when the constructor function is invoked.

## Example

```js
function Person(name){
    this.name = name;
}

console.log(Person.prototype) // returns an object, with a constructor function attached.

var elie = new Person('Elie');
var colt = new Person('Colt');

elie.__proto__ === Person.prototype // true
colt.__proto__ === Person.prototype // true

Person.prototype.constructor === Person // true
```

## Prototype Chain

```js
Person.prototype.isInstructor = true;

elie.isInstructor; // true
colt.isInstructor; // true
```

Both of these have the prototypical property because of the prototype chain created with the `new` keyword.

JS will look at the object, and if it cannot find the attached method, it will look up the prototype chain until it reaches it or fails to find it.

## Adding Methods

```js
function Person(name) {
    this.name = name;
    this.sayHi = function() {
        return 'Hi ' + this.name;
    }
}

elie = new Person('Elie');
elie.sayHi(); // Hi Elie

// ******** refactored ********

function Person(name) {
    this.name = name;
}

Person.prototype.sayHi = function() {
    return 'Hi ' + this.name;
}

elie = new Person('Elie');
elie.sayHi(); // Hi Elie
```

## Exercise

```js
function Vehicle (make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    this.isRunning = false;
}

Vehicle.prototype.turnOn = function() {
    this.isRunning = true;
}

Vehicle.prototype.turnOff = function() {
    this.isRunning = false;
}

Vehicle.prototype.honk = function() {
    return (this.isRunning) ? 'beep' : undefined;
}

var v = new Vehicle('Toyota', 'Celica', 1992);

v.honk() // undefined

v.turnOn()

v.honk() // beep

v.turnOff()

v.honk() // undefined
