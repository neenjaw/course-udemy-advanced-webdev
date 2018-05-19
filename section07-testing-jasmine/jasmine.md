# Testing with Jasmine

## Objectives

* Understand what Jasmine and unit testing are
* Define: describe, it, matchersm and spies
* Write better tests with before and after hooks
* Write asynchronous tests with clocks and done callbacks
* Compare and contrast TDD and BDD and differentiate between unit and other kind of tests.

## Why Test

> Because everyone makes mistakes. And some are preventable!

## How

### Unit Testing

Unit tests, test parts of an application. Very commonly, each unit is tested individually and independently to ensure an application is running as expected.

### What we need

* a framework to write tests (Jasmine, Mocha)
* a way of describing the code we are testing
* a tool where we can make assertions or expectations about our code

## Jasmine - Introduction

* Comes with everything we need to test our code!
* Works well all kinds of JavaScript environments
* Simple syntax to quickly get up and running with

## Jasmine - How it works

1. Create an html file
2. Link CSS and JavaScript tags
3. Start writing tests!

### Starter

```html
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Jasmine Tests</title>
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/jasmine/2.6.2/jasmine.css">
</head>
<body>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/2.6.2/jasmine.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/2.6.2/jasmine-html.js"></script>
  <script src="https://cdnjs.cloudflare.com/ajax/libs/jasmine/2.6.2/boot.js"></script>
</body>
</html>
```

## Jasmine - Keywords

* describe: 'let me describe \_\_\_ to you'
* it: 'let me tell you about \_\_\_'
* expect: 'here's what I expect'

### Conceptual Exercise

```js
describe("Earth");
it("is round");
expect(earth.isRound.toBe(true));
```

### Code

```js
var earth = {
  isRound: true,
  numberFromSun: 3
};

describe("Earth", function() {
  it("is round", function() {
    expect(earth.isRound).toBe(true);
  });

  it("is the third planet from the sun", function() {
    expect(earth.numberFromSun).toBe(3);
  });
});
```

## Jasmine - Matchers

* toBe / not.toBe
* toBeCloseTo
* toBeDefined
* toBeFalsey/toBeTruthy
* toBeGreaterThan/toBeLessThan
* toContain
* toEqual
* Jasmine.any()

```js
describe("Jasmine Matchers", function() {
  it("allows for === and deep equality", function() {
    expect(1 + 1).toBe(2);
    expect([1, 2, 3]).toEqual([1, 2, 3]);
  });
  it("allows for easy precision checking", function() {
    expect(3.1415).toBeCloseTo(3.14, 2);
  });
  it("allows for easy truthy / falsey checking", function() {
    expect(0).toBeFalsy();
    expect([]).toBeTruthy();
  });
  it("allows for easy type checking", function() {
    expect([]).toEqual(jasmine.any(Array));
    expect(function() {}).toEqual(jasmine.any(Function));
  });
  it("allows for checking contents of an object", function() {
    expect([1, 2, 3]).toContain(1);
    expect({ name: "Elie", job: "Instructor" }).toEqual(
      jasmine.objectContaining({ name: "Elie" })
    );
  });
});
```

## Jasmine - Hooks

### beforeEach

* runs before each `it` callback
* allows refactoring of code to simplify

### afterEach

* runs after each `it` callback
* useful for teardown

### beforeAll / afterAll

* runs before/after all of the tests

### nested describe blocks

* allows complex tests to be broken down to smaller descriptive blocks.

### Pending tests

* Pending tests do not run but their names will show up in the results as `pending`
* Declared 3 ways:
  1. tests declared with `xit` rather than `it`
  2. tests declared with `it` but there is no function body
  3. tests declared with `it` but call the `pending()` method

### disabling describe

* can disable grouped tests in a describe by declaring it as `xdescribe` rather than `describe`

### One or more expect

```js
describe("Earth", function() {
  it("is round and is the third planet from the sun", function() {
    expect(earth.isRound).toBe(true);
    expect(earth.numberFromSun).toBe(3);
  });
});
```

You can do this, but it looks messy. The original is better.

## Spies

> a 'mock' is a fixed object that poses as a function without having to go through the overhead of creating the real object.

In Jasmine, mocking is done through 'Spies'.  A Spy can stub or mimic any functionality and track calls to the function and all of its arguments.

### How to make

#### spyOn

```js
function add(a,b,c) {
    return a+b+c;
}

describe("add", function() {
    var addSpy, result;

    beforeEach(function(){
        addSpy = spyOn(window, 'add');
        result = addSpy();
    });

    it("can have params tested", function() {
        expect(addSpy).toHaveBeenCalled();
    });
});

// Can also test parameters:
describe("add", function() {
    var addSpy, result;

    beforeEach(function(){
        addSpy = spyOn(window, 'add');
        result = addSpy(1,2,3);
    });

    it("can have params tested", function() {
        expect(addSpy).toHaveBeenCalled();
        expect(addSpy).toHaveBeenCalledWith(1,2,3);
    });
});

//Can test results
describe("add", function() {
    var addSpy, result;

    beforeEach(function(){
        addSpy = spyOn(window, 'add');
        result = addSpy(1,2,3);
    });

    it("can have params tested", function() {
        expect(result).toEqual(6);
    });
});

//can test function frequency
describe("add", function() {
    var addSpy, result;

    beforeEach(function(){
        addSpy = spyOn(window, 'add').and.callThrough();
        result = addSpy(1,2,3);
    });

    it("can have params tested", function() {
        expect(addSpy.calls.count()).toBe(1);
        expect(addSpy.calls.any()).toBe(true);
        expect(result).toEqual(6)
    });
});
```

#### Spying on Ajax

* [Screencast](https://blog.codeship.com/jasmine-spyon/)

## Jasmine - Clock

```js
describe('a simple setTimeout', function() {
    var sample;

    beforeEach(function() {
        sample = jasmine.createSpy('sampleFunction');
        jasmine.clock().install();
    });

    afterEach(function() {
        jasmine.clock().uninstall();
    });

    it('is only invoked after 1000 milliseconds', function() {
        setTimeout(function() {
            sample();
        }, 1000);

        jasmine.clock().tick(999);
        expect(sample).not.toHaveBeenCalled();

        jasmine.clock().tick(1);
        expect(sample).toHaveBeenCalled();
    });
});

describe('a simple interval', function() {
    var dummyFunction;

    beforeEach(function(){
        dummyFunction = jasmine.createSpy('dummyFunction');
        jasmine.clock().install();
    });

    afterEach(function(){
        jasmine.clock().uninstall();
    });

    it('checks to see the number of times the function is invoked', function(){
        setInterval(function() {
            dummyFunction();
        }, 1000);

        jasmine.clock().tick(999);
        expect(dummyFunction.calls.count()).toBe(0);

        jasmine.clock().tick(1000);
        expect(dummyFunction.calls.count()).toBe(1);

        jasmine.clock().tick(1);
        expect(dummyFunction.calls.count()).toBe(2);
    });
});
```

## Jasmine - Testing Async Code

```js

```