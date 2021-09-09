module.exports = (...args) => {
  if (args.length < 2) return false;
  if (!args.every((a) => Array.isArray(a))) return false;
  for (let i = 1; i < args.length; i += 1) {
    if (args[i].length !== args[0].length) return false;
  }
  for (let i = 1; i < args.length; i += 1) {
    if (!args[0].every((v, k) => v === args[i][k])) {
      return false;
    }
  }
  return true;
};
