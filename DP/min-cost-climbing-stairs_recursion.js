/**
 * @param {number[]} cost
 * @return {number}
 */

var minCostClimbingStairs = function (cost) {
  // DP object to cache the minimum cost for each index.
  // Prevents recalculating the same subproblems.
  let dp = {};

  function solve(i) {
    // Base case:
    // Reached or crossed the top of the staircase.
    // No additional cost is required.
    if (i >= cost.length) {
      return 0;
    }

    // Check if the result for the current index is already cached.
    // Calculate only if it has not been computed before.
    if (dp[i] === undefined) {
      // Two possible choices:
      // 1. Take 1 step -> solve(i + 1)
      // 2. Take 2 steps -> solve(i + 2)
      //
      // Add the cost of the current step and choose
      // the path with the minimum future cost.
      dp[i] = cost[i] + Math.min(solve(i + 1), solve(i + 2));
    }

    // Return the cached minimum cost for index i.
    return dp[i];
  }

  // We are allowed to start from either index 0 or index 1.
  // Calculate both possibilities and return the minimum cost.
  return Math.min(solve(0), solve(1));
};
