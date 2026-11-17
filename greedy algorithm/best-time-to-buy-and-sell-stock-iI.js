/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function (prices) {
  // Stores the total profit from all profitable transactions.
  let ans = 0;

  // Start from the second day and compare each price
  // with the previous day's price.
  for (let i = 1; i < prices.length; i++) {
    // Calculate the price difference between consecutive days.
    let profit = prices[i] - prices[i - 1];

    // If today's price is higher than yesterday's,
    // we can make a profit by buying yesterday and selling today.
    if (profit > 0) {
      // Add this profit to our total profit.
      ans = ans + profit;
    }
  }

  // Return the maximum possible profit.
  return ans;
};
