/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  let stack = [];
  const set = new Set(["+", "*", "/", "-"]);
  for (const token of tokens) {
    if (set.has(token)) {
      const elem2 = stack.pop();
      const elem1 = stack.pop();
      const res = Math.trunc(eval(`${elem1} ${token} ${elem2}`));
      stack.push(res);
    } else {
      stack.push(token);
    }
  }
  return Number(stack.pop());
};
