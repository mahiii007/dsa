/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function (cost) {
  let n = cost.length;

  // DP array:
  // dp[i] represents the minimum cost required to reach step i.
  //
  // Base cases:
  // dp[0] = 0 -> We can start from step 0 without paying anything.
  // dp[1] = 0 -> We can also start directly from step 1.
  let dp = [0, 0];

  // Start calculating from step 2 until the top (n).
  for (let i = 2; i <= n; i++) {
    // We have two possible ways to reach step i:
    //
    // Option 1: Come from step (i - 1).
    // Pay cost[i - 1] + minimum cost to reach (i - 1).
    //
    // Option 2: Come from step (i - 2).
    // Pay cost[i - 2] + minimum cost to reach (i - 2).
    //
    // Choose the path with minimum cost.
    dp[i] = Math.min(dp[i - 1] + cost[i - 1], dp[i - 2] + cost[i - 2]);
  }

  // Return minimum cost to reach the top of the staircase.
  // The top is represented by index n (not n - 1).
  return dp[n];
};
