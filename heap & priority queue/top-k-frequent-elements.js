/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function (nums, k) {
  let res = [];

  // Store the frequency of each number.
  let map = {};
  for (let i = 0; i < nums.length; i++) {
    map[nums[i]] = (map[nums[i]] || 0) + 1;
  }

  // Create a Min Priority Queue based on frequency.
  // The element with the smallest frequency stays at the front.
  let pq = new MinPriorityQueue((x) => x.freq);

  // Iterate through each unique number in the frequency map.
  for (key in map) {
    // Insert the number and its frequency into the priority queue.
    pq.enqueue({ val: key, freq: map[key] }); // O(log k)

    // Maintain the heap size at most k.
    if (pq.size() > k) {
      // Remove the number with the smallest frequency.
      pq.dequeue(); // O(log k)
    }
  }

  // Return the numbers stored in the priority queue.
  // Convert val from string to number because object keys are strings.
  return pq.toArray().map((x) => Number(x.val));
};
