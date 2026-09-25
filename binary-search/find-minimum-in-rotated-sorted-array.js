/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function (nums) {
  let left = 0;
  let right = nums.length - 1;

  while (left <= right) {
    //check if array is already sorted. If so then 1st element is the starting/rotation point
    if (nums[right] >= nums[left]) {
      return nums[left];
    }
    const mid = left + Math.floor((right - left) / 2);

    //if mid is smaller than its prev, then mid is the roatation point
    if (nums[mid - 1] > nums[mid]) {
      return nums[mid];
    }

    // As sorted array part handled in 1st condition, we have check in unsorted part
    if (nums[left] > nums[mid]) {
      // left unsorted, right sorted
      right = mid - 1;
    } else {
      //left sorted, right unsorted
      left = mid + 1;
    }
  }
};
