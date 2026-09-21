/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
  const symbolMap = {
    "]": "[",
    ")": "(",
    "}": "{",
  };
  const stack = [];
  for (const str of s) {
    if (symbolMap[str]) {
      if (symbolMap[str] !== stack.pop()) {
        return false;
      }
    } else {
      stack.push(str);
    }
  }

  return stack.length === 0;
};
