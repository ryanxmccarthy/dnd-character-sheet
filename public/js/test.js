var pass = function(str) {
  if (typeof str === "number") {
    return String(str);
  }
  return str.trim()
};

module.exports = pass;