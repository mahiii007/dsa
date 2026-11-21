/**
 * @param {number[][]} intervals
 * @return {number}
 */
var eraseOverlapIntervals = function (intervals) {
  // Sort intervals by their ending time in ascending order
  // This allows us to greedily select the interval that finishes earliest
  intervals.sort((a, b) => a[1] - b[1]);

  let count = 0;

  // Tracks the ending time of the last interval we decided to keep
  // Initially -Infinity, so the first interval will always be selected
  let k = -Infinity;

  for (let i = 0; i < intervals.length; i++) {
    // If the current interval starts before the last selected interval ends,
    // they overlap, so we need to remove the current interval
    if (intervals[i][0] < k) {
      ++count;
    } else {
      // No overlap, so keep this interval
      // Update k to its ending time
      k = intervals[i][1];
    }
  }

  // Return the minimum number of intervals to remove
  return count;
};
