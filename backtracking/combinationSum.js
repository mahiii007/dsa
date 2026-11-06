/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
  let res = [];

  function backtrack(remainingSum, path, start) {
    // Base case: If remainingSum becomes 0,
    // we have found a valid combination.
    if (remainingSum === 0) {
      // Store a copy of the current combination.
      res.push([...path]);
    }

    // If remainingSum becomes negative or zero,
    // there is no need to explore further.
    if (remainingSum <= 0) {
      return;
    }

    // Explore candidates starting from 'start'.
    for (let i = start; i < candidates.length; i++) {
      // Choose: Add the current candidate to the path.
      path.push(candidates[i]);

      // Calculate how much target is still remaining.
      let remainingValue = remainingSum - candidates[i];

      // Explore: Use the same index i again because
      // each candidate can be selected multiple times.
      backtrack(remainingValue, path, i);

      // Backtrack: Remove the last candidate
      // to try another possible combination.
      path.pop();
    }
  }

  // Start with the original target, an empty path,
  // and index 0.
  backtrack(target, [], 0);

  return res;
};
