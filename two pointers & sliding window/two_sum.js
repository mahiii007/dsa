/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
  const map = new Map();

  for (let i = 0; i < nums.length; i++) {
    // Find the number we need to complete the target sum.
    const complement = target - nums[i];

    if (map.has(complement)) {
      // Complement was already seen.
      // Return its index and the current index.
      return [map.get(complement), i];
    }

    // Store the current number and its index
    // so it can be used as a complement for future numbers.
    map.set(nums[i], i);
  }
};
