/**
 * @param {number} n
 * @return {number}
 */

// Global DP object to store already calculated Fibonacci numbers.
// This avoids recalculating the same subproblems.
let dp = {};

var fib = function (n) {
  // Base case:
  // Fibonacci(0) = 0
  // Fibonacci(1) = 1
  if (n <= 1) {
    return n;
  }

  // Check if the result is already calculated.
  // If not cached, calculate and store it.
  if (!dp[n]) {
    // Fibonacci recurrence relation:
    // fib(n) = fib(n - 1) + fib(n - 2)
    dp[n] = fib(n - 1) + fib(n - 2);
  }

  // Return the cached or newly calculated result.
  return dp[n];
};
