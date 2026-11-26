/**
 * @param {number} n
 * @return {number}
 */

var climbStairs = function (n) {
  // DP array:
  // dp[i] represents the number of distinct ways to reach step i.
  //
  // Base cases:
  // dp[1] = 1 -> Only one way to reach step 1.
  // dp[2] = 2 -> Two ways: (1+1) or (2).
  let dp = [0, 1, 2];

  // Start from step 3 because results for steps 1 and 2 are already known.
  for (let i = 3; i <= n; i++) {
    // To reach step i, we can:
    // 1. Take 1 step from step (i - 1).
    // 2. Take 2 steps from step (i - 2).
    //
    // Total ways = ways to reach (i - 1) + ways to reach (i - 2).
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  // Return the total number of ways to reach step n.
  return dp[n];
};
