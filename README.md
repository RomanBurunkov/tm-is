# tm-is

[![codecov](https://codecov.io/gh/RomanBurunkov/tm-is/branch/main/graph/badge.svg?token=64HIR1FX0Z)](https://codecov.io/gh/RomanBurunkov/tm-is)

JavaScript basic 'is' functions.

## Installation

```
npm i tm-is
```

## Functions

- isObject: returns true/false. true if passed argument is an object except null.
- isFunction: returns true/false. true if passed argument is a function.

## Example

```
const { isObject, isFunction } = require('tm-is');

console.log(isObject({})); // true
console.log(isObject(null)); // false
console.log(isObject('string')); // false

console.log(isFunction('null')); // false
console.log(isFunction('string')); // false
console.log(isFunction(() => { })); // true

```
