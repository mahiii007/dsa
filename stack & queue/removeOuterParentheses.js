/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let stack = [];
  let ans = "";

  for (const str of s) {
    if (str === "(") {
      stack.push(str);
      if (stack.length > 1) {
        ans = ans + str;
      }
    } else {
      if (stack.length > 1) {
        ans = ans + str;
      }
      stack.pop();
    }
  }

  return ans;
};
