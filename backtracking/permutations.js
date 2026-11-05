/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let res = [];

  function backtrack(path) {
    // Base case: If the path contains all elements,
    // we have found one complete permutation.
    if (path.length === nums.length) {
      // Store a copy of the current permutation.
      res.push([...path]);
    }

    // Try every element as the next element in the permutation.
    for (let i = 0; i < nums.length; i++) {
      // Skip the element if it is already present in the current path.
      // This ensures that each element is used only once.
      if (!path.includes(nums[i])) {
        // Choose: Add the current element to the path.
        path.push(nums[i]);

        // Explore: Recursively build the remaining permutation.
        backtrack(path);

        // Backtrack: Remove the last element
        // to explore another possible arrangement.
        path.pop();
      }
    }
  }

  // Start generating permutations with an empty path.
  backtrack([]);

  return res;
};
