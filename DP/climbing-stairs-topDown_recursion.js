/**
 * @param {number} n
 * @return {number}
 */

// Global DP object to store already calculated results (memoization).
// This avoids recalculating the same subproblems again.
let dp = {};

var climbStairs = function (n) {
  // Base case:
  // If there are 0 or 1 steps, there is only 1 possible way.
  if (n <= 1) {
    return 1;
  }

  // Check if the result is already calculated.
  // If not available, calculate and store it in DP.
  if (!dp[n]) {
    // To reach step n, we can either:
    // 1. Take 1 step from (n - 1).
    // 2. Take 2 steps from (n - 2).
    //
    // Total ways = ways(n - 1) + ways(n - 2)
    dp[n] = climbStairs(n - 1) + climbStairs(n - 2);
  }

  // Return the previously calculated or newly calculated result.
  return dp[n];
};
