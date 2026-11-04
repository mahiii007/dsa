/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
  let res = [];

  function backtrack(path, start) {
    // Base case: If the current combination contains k elements,
    // we have found one valid combination.
    if (path.length === k) {
      // Store a copy of the current combination.
      res.push([...path]);
      return;
    }

    // Explore numbers from 'start' to n.
    for (let i = start; i <= n; i++) {
      // Choose: Add the current number to the combination.
      path.push(i);

      // Explore: Recursively select the next number.
      // i + 1 ensures that we don't reuse the same number.
      backtrack(path, i + 1);

      // Backtrack: Remove the last selected number
      // so we can try another combination.
      path.pop();
    }
  }

  // Start building combinations from number 1.
  backtrack([], 1);

  return res;
};
