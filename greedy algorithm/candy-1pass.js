/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  let n = ratings.length;

  // Initially give every child 1 candy
  let ans = n;

  let i = 1;

  while (i < n) {
    // Equal ratings don't require additional candies
    if (ratings[i] === ratings[i - 1]) {
      ++i;
      continue;
    }

    // Count the increasing slope (uphill)
    // Each child on the uphill needs one more candy than the previous child
    let up = 0;
    while (i < n && ratings[i] > ratings[i - 1]) {
      up = up + 1;

      // Add the additional candies required for this uphill
      ans = ans + up;
      ++i;
    }

    // Count the decreasing slope (downhill)
    // Each child on the downhill needs one more candy than the next child
    let down = 0;
    while (i < n && ratings[i] < ratings[i - 1]) {
      down = down + 1;

      // Add the additional candies required for this downhill
      ans = ans + down;
      ++i;
    }

    // The peak child is counted in both uphill and downhill calculations.
    // Subtract the smaller slope length to correct the overlapping peak requirement.
    ans = ans - Math.min(up, down);
  }

  // Return the minimum total candies required
  return ans;
};
