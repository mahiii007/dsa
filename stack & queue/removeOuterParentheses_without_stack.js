/**
 * @param {string} s
 * @return {string}
 */
var removeOuterParentheses = function (s) {
  let count = 0;
  let ans = "";

  for (const str of s) {
    if (str === "(") {
      ++count;
      if (count > 1) {
        ans = ans + str;
      }
    } else {
      if (count > 1) {
        ans = ans + str;
      }
      --count;
    }
  }

  return ans;
};
