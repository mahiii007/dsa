/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  // Sort intervals based on their starting point
  intervals.sort((a, b) => a[0] - b[0]);

  // Initialize ans with the first interval
  let ans = [intervals[0]];

  // n represents the current length of ans
  let n = ans.length;

  // Traverse the remaining intervals
  for (let i = 1; i < intervals.length; i++) {
    // Check if the current interval overlaps with the last interval in ans
    if (intervals[i][0] <= ans[n - 1][1]) {
      // If overlapping, merge them by updating the ending point
      // Take the maximum ending point between both intervals
      ans[n - 1][1] = Math.max(ans[n - 1][1], intervals[i][1]);
    } else {
      // If there is no overlap, add the current interval as a new interval
      ans.push(intervals[i]);
    }
  }

  // Return the merged intervals
  return ans;
};
