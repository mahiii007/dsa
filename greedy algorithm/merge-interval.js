/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
  // Sort intervals based on their starting value
  intervals.sort((a, b) => a[0] - b[0]);

  // Initialize ans with the first interval
  let ans = [intervals[0]];

  // Traverse remaining intervals
  for (let i = 1; i < intervals.length; i++) {
    // Check if current interval overlaps with the last interval in ans
    if (intervals[i][0] <= ans[ans.length - 1][1]) {
      // If overlapping, merge by extending the ending value
      ans[ans.length - 1][1] = Math.max(
        ans[ans.length - 1][1],
        intervals[i][1],
      );
    } else {
      // If there is no overlap, add the interval to ans
      ans.push(intervals[i]);
    }
  }

  // Return the merged intervals
  return ans;
};
