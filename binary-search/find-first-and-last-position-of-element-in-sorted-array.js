/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let ans = [-1, -1];

  // Find the FIRST occurrence of target.
  while (left < right) {
    // Use floor so mid stays closer to left.
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] < target) {
      // nums[mid] is smaller than target,
      // so target (if present) must be on the right side.
      left = mid + 1;
    } else {
      // nums[mid] >= target.
      // mid could be the first occurrence,
      // so keep mid and continue searching on the left.
      right = mid;
    }
  }

  // If target exists at the final position,
  // this position is its first occurrence.
  if (nums[left] === target) {
    ans[0] = left;
  }

  // Find the LAST occurrence of target.
  left = 0;
  right = nums.length - 1;

  while (left < right) {
    // Use ceil so mid moves toward the right.
    // This prevents left and mid from getting stuck
    // at the same index (e.g. [3, 3]).
    const mid = left + Math.ceil((right - left) / 2);

    if (nums[mid] > target) {
      // nums[mid] is greater than target,
      // so target (if present) must be on the left side.
      right = mid - 1;
    } else {
      // nums[mid] <= target.
      // mid could be the last occurrence,
      // so keep mid and continue searching on the right.
      left = mid;
    }
  }

  // If target exists at the final position,
  // this position is its last occurrence.
  if (nums[left] === target) {
    ans[1] = left;
  }

  return ans;
};

// Another Approach

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var searchRange = function (nums, target) {
  let left = 0;
  let right = nums.length - 1;
  let ans = [-1, -1];

  // Find the FIRST occurrence of target.
  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) {
      // We found target, but there may be another
      // occurrence further to the left.
      // Store this index and continue searching left.
      ans[0] = mid;
      right = mid - 1;
    } else if (nums[mid] < target) {
      // nums[mid] is smaller than target,
      // so target can only be on the right side.
      left = mid + 1;
    } else {
      // nums[mid] is greater than target,
      // so target can only be on the left side.
      right = mid - 1;
    }
  }

  // Find the LAST occurrence of target.
  left = 0;
  right = nums.length - 1;

  while (left <= right) {
    const mid = left + Math.floor((right - left) / 2);

    if (nums[mid] === target) {
      // We found target, but there may be another
      // occurrence further to the right.
      // Store this index and continue searching right.
      ans[1] = mid;
      left = mid + 1;
    } else if (nums[mid] < target) {
      // nums[mid] is smaller than target,
      // so target can only be on the right side.
      left = mid + 1;
    } else {
      // nums[mid] is greater than target,
      // so target can only be on the left side.
      right = mid - 1;
    }
  }

  return ans;
};
