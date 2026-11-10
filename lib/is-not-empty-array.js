/**
 * Checks given arguments whether they are non-empty arrays.
 * In case of several arguments, all of them should be non-empty arrays to get a true.
 * Otherwise or if no arguments given, function will return false.
 * An array is non-empty if its length is greater than zero.
 * @param  {...any} args Arguments to check.
 * @returns {boolean} true if all given arguments are non-empty arrays, otherwise false.
 */
module.exports = (...args) => (args.length
  ? args.every((a) => Array.isArray(a) && a.length > 0)
  : false
);
