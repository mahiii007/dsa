/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permuteUnique = function (nums) {
  let res = [];

  // Sort the array so duplicate numbers are next to each other.
  nums.sort((a, b) => a - b);

  function backtrack(path, choices) {
    // Base case: If path contains all elements,
    // we have found one complete unique permutation.
    if (path.length === nums.length) {
      // Store a copy of the current permutation.
      res.push([...path]);
      return;
    }

    // Iterate through all available choices.
    for (let i = 0; i < choices.length; i++) {
      // Skip duplicate choices at the same recursion level.
      // This prevents generating duplicate permutations.
      if (i > 0 && choices[i - 1] === choices[i]) {
        continue;
      }

      // Choose: Add the current number to the permutation.
      path.push(choices[i]);

      // Explore: Create a new choices array without the selected element.
      // This ensures that the selected element cannot be reused.
      backtrack(path, [...choices.slice(0, i), ...choices.slice(i + 1)]);

      // Backtrack: Remove the last selected number
      // to try another possible permutation.
      path.pop();
    }
  }

  // Start with an empty path and all numbers as available choices.
  backtrack([], nums);

  return res;
};
