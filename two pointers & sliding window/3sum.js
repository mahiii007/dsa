/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function (nums) {
  // Sort the array so that we can use the two-pointer approach.
  nums = nums.sort((a, b) => a - b);

  let res = [];

  // Treat nums[i] as the first number of the triplet.
  // The remaining two numbers will be found using two pointers.
  for (let i = 0; i < nums.length; i++) {
    // Skip duplicate values for the first element
    // to avoid duplicate triplets in the result.
    if (nums[i] !== nums[i - 1]) {
      twoSum(nums, i, res);
    }
  }

  return res;
};

/**
 * Finds two numbers after targetIndex whose sum
 * together with nums[targetIndex] equals 0.
 *
 * @param {number[]} arr
 * @param {number} targetIndex
 * @param {number[][]} ans
 */
var twoSum = function (arr, targetIndex, ans) {
  // Start from the element immediately after targetIndex.
  let i = targetIndex + 1;

  // Start from the end of the array.
  let j = arr.length - 1;

  while (i < j) {
    // Check whether the three numbers add up to 0.
    const val = arr[i] + arr[j] + arr[targetIndex];

    if (val > 0) {
      // Sum is too large, so move the right pointer
      // to a smaller value.
      --j;
    } else if (val < 0) {
      // Sum is too small, so move the left pointer
      // to a larger value.
      ++i;
    } else {
      // Found a valid triplet.
      ans.push([arr[i], arr[j], arr[targetIndex]]);

      // Move both pointers to search for another triplet.
      ++i;
      --j;

      // Skip duplicate values for the left pointer
      // so that we don't add the same triplet again.
      while (i < j && arr[i] === arr[i - 1]) {
        ++i;
      }
    }
  }
};
