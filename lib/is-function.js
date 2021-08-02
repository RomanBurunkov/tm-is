/**
 * Checks given arguments whether they are functions.
 * In case of several argumetns, all of them should be functions to get a true.
 * Otherwise or if no arguments given, function will return false.
 * @param  {...any} args Arguments to check.
 * @returns {boolean} true if all given arguments are functions, otherwise false.
 */
module.exports = (...args) => (args.length
  ? args.every((a) => a && typeof a === 'function')
  : false
);
