# tm-is

[![npm](https://img.shields.io/npm/v/tm-is.svg)](https://www.npmjs.org/package/tm-is)
[![codecov](https://codecov.io/gh/RomanBurunkov/tm-is/branch/main/graph/badge.svg?token=64HIR1FX0Z)](https://codecov.io/gh/RomanBurunkov/tm-is)

JavaScript basic 'is' functions for Node.

## Installation

```
npm i tm-is
```

## Description

Module provides a bunch of functions which return true or false.
All functions support zero or more arguments.
If several arguments passed, all of them should meet function conditions.
Conditions for each function described in the Functions section.

E.g.

```js
  isObject({}); // true
  isObject({}, {}); // true
  isObject({}, 'str'); // false, since not all arguments are objects.
```

## Functions

- `isEmpty`: Returns true if passed argument is null, empty string or undefined.
- `isObject`/`isObj`: Returns true if passed argument is an object except null.
- `isFunction`/`isFunc`: Returns true if passed argument is a function.
- `isUndefined`/`isUndef`: Returns true if passed argument is undefined.
- `isEqualArrays`/`isEqArr`: Returns true if passed arguments are equal arrays.
- `isValidDate`/`isDate`: Returns true if passed arguments are valid date string or number.

## Examples

```js
const { isObject, isFunction } = require('tm-is');

console.log(isObject({})); // true
console.log(isObject(null)); // false
console.log(isObject('string')); // false

console.log(isFunction('null')); // false
console.log(isFunction('string')); // false
console.log(isFunction(() => { })); // true

console.log(isValidDate(null)); // false
console.log(isValidDate('qwertyuiop')); // false
console.log(isValidDate('2024-12-27')); // true

```
