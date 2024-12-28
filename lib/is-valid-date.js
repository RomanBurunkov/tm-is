const isEmpty = require('./is-empty');

/**
 * Checks given arguments whether they are valid dates,
 * which could be passed to the new Date constructor.
 * In case of several argumetns, all of them should be valid dates to get a true.
 * Otherwise or if no arguments given, function will return false.
 * @param  {...any} args Arguments to check.
 * @returns {boolean} true if all given arguments are valid dates, otherwise false.
 */
module.exports = (...args) => (args.length
  ? args.every((a) => !isEmpty(a) && !Number.isNaN(new Date(a).getTime()))
  : false
);
