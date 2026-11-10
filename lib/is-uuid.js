const UUID_PATTERN = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-8][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i;

/**
 * Checks given arguments whether they are valid UUID strings.
 * In case of several arguments, all of them should be valid UUIDs to get a true.
 * Otherwise or if no arguments given, function will return false.
 * Supports UUID versions 1 to 8, excluding Nil and Max UUIDs.
 * @param  {...any} args Arguments to check.
 * @returns {boolean} true if all given arguments are valid UUIDs, otherwise false.
 */
module.exports = (...args) => (args.length
  ? args.every((a) => typeof a === 'string' && a.length === 36 && UUID_PATTERN.test(a))
  : false
);
