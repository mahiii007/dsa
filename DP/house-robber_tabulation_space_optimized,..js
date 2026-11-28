/**
 * @param {number[]} nums
 * @return {number}
 */
var rob = function (nums) {
  let n = nums.length;

  // Edge case:
  // If there is only one house, rob that house.
  if (n === 1) {
    return nums[0];
  }

  // p1 = Maximum money robbed up to the previous house (i - 1).
  let p1 = Math.max(nums[0], nums[1]);

  // p2 = Maximum money robbed up to the house before previous (i - 2).
  let p2 = nums[0];

  // Start from the third house because the first two states are initialized.
  for (let i = 2; i < n; i++) {
    // Two choices:
    // 1. Rob current house -> nums[i] + p2.
    // 2. Skip current house -> p1.
    //
    // Choose the option that gives maximum money.
    let curr = Math.max(nums[i] + p2, p1);

    // Move the DP states forward:
    // Previous house's result becomes the result for i - 2.
    let temp = p1;

    // Current result becomes the result for i - 1.
    p1 = curr;

    // Old p1 becomes the result for i - 2.
    p2 = temp;
  }

  // p1 contains the maximum money robbed from all houses.
  return p1;
};
