/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var maxSlidingWindow = function (nums, k) {
  let i = 0;
  let j = 0;

  let res = [];

  // Monotonic decreasing queue.
  // The largest element is always at the front.
  let q = [];

  while (j < nums.length) {
    // Remove all smaller elements from the back.
    // They can never become the maximum while nums[j]
    // is inside the current window.
    while (q.length && nums[j] > q[q.length - 1]) {
      q.pop();
    }

    // Add the current element to the queue.
    q.push(nums[j]);

    // Once we have a window of size k,
    // the front of the queue contains the maximum.
    if (j >= k - 1) {
      // q[0] is the maximum element of the current window.
      res.push(q[0]);

      // If the element leaving the window is also
      // the maximum element, remove it from the queue.
      if (nums[i] === q[0]) {
        q.shift();
      }

      // Move the left pointer to shrink the window.
      ++i;
    }

    // Expand the window.
    ++j;
  }

  return res;
};
