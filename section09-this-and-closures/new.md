# The 'new' keyword

This is the 4th way to set the context of the keyword `this` using the `new` keyword.  It does quite a bit more as well which will be discussed futher in respect to OOP.

```js
function Person(firstName, lastName) {
    this.firstName = firstName;
    this.lastName = lastName;
}

var elie = new Person("Elie", "Schoppik");
```

`new` creates a new object, and it implicitly returns the created object. So, the `this` in the function block will refer to the object created, not to the global scope.s