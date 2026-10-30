/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findKthLargest = function (nums, k) {
  // Create a Min Priority Queue
  let pq = new MinPriorityQueue();

  // Iterate through all elements in the array
  for (let i = 0; i < nums.length; i++) {
    // Add the current element to the priority queue
    pq.enqueue(nums[i]);

    // Maintain the size of the priority queue to at most k
    if (pq.size() > k) {
      // Remove the smallest element from the queue
      // This ensures that only the k largest elements remain
      pq.dequeue();
    }
  }

  // The smallest element among the k largest elements
  // is the Kth largest element in the original array
  return pq.front();
};
