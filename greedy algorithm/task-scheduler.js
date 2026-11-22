/**
 * @param {character[]} tasks
 * @param {number} n
 * @return {number}
 */
var leastInterval = function (tasks, n) {
  // Frequency array to store the count of each task (A-Z)
  let freq = Array(26).fill(0);

  // Tracks the maximum frequency of any task
  let maxFreq = 0;

  // Count the frequency of each task and find the maximum frequency
  for (let i = 0; i < tasks.length; i++) {
    let curr = tasks[i].charCodeAt() - 65; // Map 'A'-'Z' to 0-25
    freq[curr]++;

    // Update maxFreq whenever the current task's frequency increases
    maxFreq = Math.max(maxFreq, freq[curr]);
  }

  // Count how many tasks have the same maximum frequency
  let countMaxFreq = 0;
  for (let i = 0; i < 26; i++) {
    if (freq[i] === maxFreq) {
      countMaxFreq++;
    }
  }

  // Calculate the minimum intervals required by arranging
  // the most frequent tasks with cooldown gaps between them
  let cycles = (maxFreq - 1) * (n + 1) + countMaxFreq;

  // If there are enough different tasks to fill the cooldown gaps,
  // total task count will be the answer.
  // Otherwise, idle slots are needed, and cycles will be larger.
  return Math.max(tasks.length, cycles);
};
