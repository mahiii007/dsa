/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);
    if (nums[mid] === target) {
      return mid;
    }
    if (nums[mid] >= nums[left]) {
      //left sorted

      if (target >= nums[left] && target < nums[mid]) {
        // check if target falls under left sorted
        right = mid - 1;
      } else {
        left = mid + 1; // else move to right window
      }
    } else {
      //right sorted
      if (target > nums[mid] && target <= nums[right]) {
        // check if target falls under right sorted
        left = mid + 1;
      } else {
        right = mid - 1; //else move to left window
      }
    }
  }
  return -1;
};
