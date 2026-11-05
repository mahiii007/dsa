/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  // Sort the array so that duplicate elements are next to each other.
  nums.sort();

  let res = [];

  function backtrack(path, start) {
    // Add a copy of the current subset to the result.
    // Every path represents one valid subset.
    res.push([...path]);

    // Explore all remaining elements starting from 'start'.
    for (let i = start; i < nums.length; i++) {
      // Skip duplicate elements at the same recursion level.
      // This prevents generating duplicate subsets.
      if (i > start && nums[i - 1] === nums[i]) {
        continue;
      }

      // Choose: Include the current element in the subset.
      path.push(nums[i]);

      // Explore: Generate subsets using the remaining elements.
      backtrack(path, i + 1);

      // Backtrack: Remove the last element to try another possibility.
      path.pop();
    }
  }

  // Start with an empty subset and index 0.
  backtrack([], 0);

  return res;
}; /**
 * @param {number[]} nums
 * @return {number[][]}
 */
var subsetsWithDup = function (nums) {
  // Sort the array so that duplicate elements are next to each other.
  nums.sort();

  let res = [];

  function backtrack(path, start) {
    // Add a copy of the current subset to the result.
    // Every path represents one valid subset.
    res.push([...path]);

    // Explore all remaining elements starting from 'start'.
    for (let i = start; i < nums.length; i++) {
      // Skip duplicate elements at the same recursion level.
      // This prevents generating duplicate subsets.
      if (i > start && nums[i - 1] === nums[i]) {
        continue;
      }

      // Choose: Include the current element in the subset.
      path.push(nums[i]);

      // Explore: Generate subsets using the remaining elements.
      backtrack(path, i + 1);

      // Backtrack: Remove the last element to try another possibility.
      path.pop();
    }
  }

  // Start with an empty subset and index 0.
  backtrack([], 0);

  return res;
};
