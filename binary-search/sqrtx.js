/**
 * @param {number} x
 * @return {number}
 */
var mySqrt = function (x) {
  if (x < 2) return x;
  let right = Math.floor(x / 2);

  let left = 2;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (mid * mid === x) {
      return mid;
    }
    if (mid * mid > x) {
      right = mid - 1;
    } else {
      left = mid + 1;
    }
  }

  return right;
};
