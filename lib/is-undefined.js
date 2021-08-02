/**
 * Checks given arguments whether they are undefined.
 * In case of several argumetns, all of them should be undefined to get a true.
 * Otherwise function return false.
 * @param  {...any} args Arguments to check.
 * @returns {boolean} true if all given arguments are undefined, otherwise false.
 */
module.exports = (...args) => args.every((a) => typeof a === 'undefined');
