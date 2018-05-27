# Prototypal Inheritance

## What is it?

The passing of methods and properties from one class to another.

## Why?

```js
function Person(firstName, lastName){
    this.firstName = firstName;
    this.lastName = lastName;
}

Person.prototype.sayHi = function(){
    return 'Hello ' + this.firstName + ' ' + this.lastName;
}

function Student(firstName, lastName){
    return Person.apply(this, arguments);
}

Student.prototype.sayHi = function(){
    return 'Hello ' + this.firstName + ' ' + this.lastName;
}
```

This is repetitive. How to refactor?

```js
function Student(firstName, lastName){
    return Person.apply(this, arguments);
}

Student.prototype = Person.prototype; // almost....
```

Since the prototype is an object, it is passed by reference and this would cause inheritance to go the wrong way if we further modified the student prototype.

```js
Student.prototype = Object.create(Person.prototype);
Student.prototype.constructor = Student;
```