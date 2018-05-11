# The Stack and the Heap

## Objectives

- Describe what the stack is
- Describe a stack frame
- Describe the heap

## What is the stack

- Ordered data structure
- Keeps track of fxn invocations
- Part of the JS runtime
  - Not accessed directly, done by the engine

## How your code changes the stack

- Whenever you invoke a function, the details of the invocation are saved to the top of the stack (pushed to the top)
- Whenever a function returns, the information about the function is removed from the top of the stack

## Stack Frame contents

Contains:

1. the function that was invoked
2. the parameters that were passed to the function
3. current line number

## The Heap

- the area in memory where data is stored
- objects that are created in the heap are stored by reference in varaibles.