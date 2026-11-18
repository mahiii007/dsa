/**
 * @param {number[][]} intervals
 * @param {number[]} newInterval
 * @return {number[][]}
 */
var insert = function (intervals, newInterval) {
  let ans = [];
  let n = intervals.length;

  let i = 0;

  // Phase 1: Add all intervals that end before newInterval starts.
  // These intervals cannot overlap with newInterval, so we add them directly.
  while (i < n && intervals[i][1] < newInterval[0]) {
    ans.push(intervals[i]);
    ++i;
  }

  // Phase 2: Merge all intervals that overlap with newInterval.
  // An interval overlaps if its starting point is <= newInterval's ending point.
  // Update newInterval's start and end to cover the entire merged range.
  while (i < n && intervals[i][0] <= newInterval[1]) {
    newInterval[0] = Math.min(intervals[i][0], newInterval[0]);
    newInterval[1] = Math.max(intervals[i][1], newInterval[1]);
    ++i;
  }

  // Add the merged newInterval after all non-overlapping intervals before it.
  ans.push(newInterval);

  // Phase 3: Add all remaining intervals.
  // These intervals occur after the merged interval and cannot overlap with it.
  while (i < n) {
    ans.push(intervals[i]);
    ++i;
  }

  return ans;
};
