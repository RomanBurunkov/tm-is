# tm-is

[![npm](https://img.shields.io/npm/v/tm-is.svg)](https://www.npmjs.org/package/tm-is)
[![codecov](https://codecov.io/gh/RomanBurunkov/tm-is/branch/main/graph/badge.svg?token=64HIR1FX0Z)](https://codecov.io/gh/RomanBurunkov/tm-is)

JavaScript basic 'is' functions.

## Installation

```
npm i tm-is
```

## Functions

- `isEmpty`: returns true/false. true if passed argument is null, empty string or undefined.
- `isObject`/`isObj`: returns true/false. true if passed argument is an object except null.
- `isFunction`/`isFunc`: returns true/false. true if passed argument is a function.
- `isUndefined`/`isUndef`: returns true/false. true if passed argument is undefined.

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
