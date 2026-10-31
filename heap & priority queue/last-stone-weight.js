/**
 * @param {number[]} stones
 * @return {number}
 */
var lastStoneWeight = function (stones) {
  // Create a Max Priority Queue to always get the heaviest stone first.
  let pq = new MaxPriorityQueue();

  // Insert all stones into the priority queue.
  for (let i = 0; i < stones.length; i++) {
    pq.enqueue(stones[i]);
  }

  // Continue until we have at most one stone remaining.
  while (pq.size() > 1) {
    // Remove the two heaviest stones.
    let stone1 = pq.dequeue();
    let stone2 = pq.dequeue();

    // If both stones have different weights,
    // push their difference back into the queue.
    if (stone1 - stone2 > 0) {
      pq.enqueue(stone1 - stone2);
    }
    // If both stones have equal weights, both are destroyed.
  }

  // Return the weight of the remaining stone.
  // If no stone remains, return 0.
  return pq.dequeue() || 0;
};
