/**
 * Checks given arguments whether they are objects(except null).
 * In case of several argumetns, all of them should be objects to get a true.
 * Otherwise or if no arguments given, function will return false.
 * @param  {...any} args Arguments to check.
 * @returns {boolean} true if all given arguments are objects, otherwise false.
 */
module.exports = (...args) => (args.length
  ? args.every((a) => a !== null && typeof a === 'object')
  : false
);
