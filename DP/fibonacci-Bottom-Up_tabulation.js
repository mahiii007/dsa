/**
 * @param {number} n
 * @return {number}
 */

var fib = function (n) {
  // DP array:
  // dp[i] represents the Fibonacci number at index i.
  //
  // Base cases:
  // fib(0) = 0
  // fib(1) = 1
  let dp = [0, 1];

  // Start from index 2 because the first two values are already known.
  for (let i = 2; i <= n; i++) {
    // Fibonacci recurrence relation:
    // Current number = Previous number + Number before previous.
    dp[i] = dp[i - 1] + dp[i - 2];
  }

  // Return the Fibonacci number at index n.
  return dp[n];
};
