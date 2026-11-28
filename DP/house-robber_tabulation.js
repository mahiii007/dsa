/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  // DP array:
  // dp[i] represents the maximum amount of money we can rob
  // from houses 0 to i without robbing two adjacent houses.
  let dp = [];

  let n = nums.length;

  // Edge case:
  // If there is only one house, rob that house.
  if (n === 1) {
    return nums[0];
  }

  // Base case:
  // If we have only the first house, rob it.
  dp[0] = nums[0];

  // For the first two houses, choose the one with more money.
  // We cannot rob both because they are adjacent.
  dp[1] = Math.max(nums[0], nums[1]);

  // Calculate the maximum money for every remaining house.
  for (let i = 2; i < n; i++) {
    // We have two choices:
    //
    // Option 1: Rob the current house.
    // Add nums[i] to the maximum money robbed up to house i-2.
    //
    // Option 2: Skip the current house.
    // Keep the maximum money calculated up to house i-1.
    //
    // Choose whichever option gives more money.
    dp[i] = Math.max(nums[i] + dp[i - 2], dp[i - 1]);
  }

  // Return the maximum money that can be robbed
  // from all houses without robbing adjacent houses.
  return dp[n - 1];
};
