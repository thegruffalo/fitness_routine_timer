module.exports = function(value1, value2, options) {
  if (!options) {
    // When used as a subexpression, just return the boolean result
    return value1 === value2;
  }
  // When used as a block helper, call fn/inverse
  return value1 === value2 ? options.fn(this) : options.inverse(this);
};
