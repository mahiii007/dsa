/**
 * @param {number[][]} grid
 * @return {number}
 */
var orangesRotting = function (grid) {
  const m = grid.length;
  const n = grid[0].length;
  let queue = [];
  let maxTime = 0;
  // add the rotten element index to queue with initial time-0
  for (let i = 0; i < m; i++) {
    for (j = 0; j < n; j++) {
      if (grid[i][j] === 2) {
        queue.push([i, j, 0]);
      }
    }
  }

  while (queue.length) {
    let [x, y, time] = queue.shift();
    if (x > 0 && grid[x - 1][y] === 1) {
      grid[x - 1][y] = 2;
      queue.push([x - 1, y, time + 1]);
    }

    if (x < m - 1 && grid[x + 1][y] === 1) {
      grid[x + 1][y] = 2;
      queue.push([x + 1, y, time + 1]);
    }

    if (y > 0 && grid[x][y - 1] === 1) {
      grid[x][y - 1] = 2;
      queue.push([x, y - 1, time + 1]);
    }

    if (y < n - 1 && grid[x][y + 1] === 1) {
      grid[x][y + 1] = 2;
      queue.push([x, y + 1, time + 1]);
    }

    maxTime = Math.max(maxTime, time);
  }
  // check if any good oranges present
  for (let i = 0; i < m; i++) {
    for (j = 0; j < n; j++) {
      if (grid[i][j] === 1) {
        return -1;
      }
    }
  }

  return maxTime;
};
