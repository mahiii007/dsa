/**
 * @param {number[][]} matrix
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (matrix, k) {
  // Get the number of columns in the matrix.
  let n = matrix[0].length;

  // Create a Min Priority Queue based on val.
  // The smallest value will always be at the front.
  let pq = new MinPriorityQueue((x) => x.val);

  // Insert the first element of every row into the priority queue.
  // Each element also stores its row and column position.
  for (let i = 0; i < Math.min(n, k); i++) {
    pq.enqueue({ val: matrix[i][0], row: i, col: 0 });
  }

  // Remove the smallest element k-1 times.
  for (let count = 0; count < k - 1; count++) {
    // Extract the smallest element and its position.
    let { val, row, col } = pq.dequeue();

    // If there are more elements in the current row,
    // insert the next element from that row.
    if (col < n - 1) {
      pq.enqueue({
        val: matrix[row][col + 1],
        row,
        col: col + 1,
      });
    }
  }

  // After removing k-1 smallest elements,
  // the smallest element remaining is the kth smallest.
  const { val, row, col } = pq.dequeue();

  return val;
};
