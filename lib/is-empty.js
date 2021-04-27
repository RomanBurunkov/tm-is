const isUndef = require('./is-undefined');

module.exports = (v) => v === null || isUndef(v) || v === '';
