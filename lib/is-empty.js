const isUndef = require('./is-undefined');

/**
 * Checks given arguments whether they are empty.
 * In case of several argumetns, all of them should be empty to get a true.
 * Otherwise function return false.
 * Empty means undefined, null or empty string.
 * @param  {...any} args Arguments to check.
 * @returns {boolean} true if all given arguments are empty, otherwise false.
 */
module.exports = (...args) => args.every((a) => a === null || a === '' || isUndef(a));
