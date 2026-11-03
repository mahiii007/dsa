/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsets = function (nums) {
  let res = [];

  function backtrack(path, start) {
    // Add a copy of the current subset to the result.
    // Every path represents one valid subset.
    res.push([...path]);

    // Explore all remaining elements starting from 'start'.
    for (let i = start; i < nums.length; i++) {
      // Choose: Include the current element in the subset.
      path.push(nums[i]);

      // Explore: Generate subsets using the remaining elements.
      // i + 1 ensures we don't reuse the same element.
      backtrack(path, i + 1);

      // Backtrack: Remove the last element to try another possibility.
      path.pop();
    }
  }

  // Start with an empty subset and index 0.
  backtrack([], 0);

  return res;
};
