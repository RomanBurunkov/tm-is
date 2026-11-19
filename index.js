const isEmpty = require('./lib/is-empty');
const isObject = require('./lib/is-object');
const isFunction = require('./lib/is-function');
const isUndefined = require('./lib/is-undefined');
const isValidDate = require('./lib/is-valid-date');
const isEqualArrays = require('./lib/is-equal-arrays');
const isNotEmptyArray = require('./lib/is-not-empty-array');
const isUUID = require('./lib/is-uuid');

exports.isEmpty = isEmpty;

exports.isObject = isObject;
exports.isObj = isObject;

exports.isFunction = isFunction;
exports.isFunc = isFunction;

exports.isUndefined = isUndefined;
exports.isUndef = isUndefined;

exports.isValidDate = isValidDate;
exports.isDate = isValidDate;
exports.isValDate = isValidDate;

exports.isEqualArrays = isEqualArrays;
exports.isEqArr = isEqualArrays;
exports.isEqualArr = isEqualArrays;

exports.isNotEmptyArray = isNotEmptyArray;
exports.isNotEmptyArr = isNotEmptyArray;

exports.isUUID = isUUID;
