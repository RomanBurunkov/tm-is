const methods = [
  { name: 'isEmpty', file: 'is-empty' },
  { name: 'isObject', file: 'is-object', aliases: ['isObj'] },
  { name: 'isFunction', file: 'is-function', aliases: ['isFunc'] },
  { name: 'isUndefined', file: 'is-undefined', aliases: ['isUndef'] },
  { name: 'isValidDate', file: 'is-valid-date', aliases: ['isDate', 'isValDate'] },
  { name: 'isEqualArrays', file: 'is-equal-arrays', aliases: ['isEqArr', 'isEqualArr'] },
];

methods.forEach((method) => {
  // eslint-disable-next-line global-require, import/no-dynamic-require
  exports[method.name] = require(`./lib/${method.file}`);
  if (Array.isArray(method.aliases) && method.aliases.length) {
    method.aliases.forEach((alias) => {
      exports[alias] = exports[method.name];
    });
  }
});
