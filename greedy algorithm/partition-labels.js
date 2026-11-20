/**
 * @param {string} s
 * @return {number[]}
 */
var partitionLabels = function (s) {
  let ans = [];

  // Store the first occurrence of every character
  let first = Array(26).fill(-1);

  // Store the last occurrence of every character
  let last = Array(26).fill(-1);

  // First pass: find the first and last positions of each character
  for (let i = 0; i < s.length; i++) {
    let curr = s.charCodeAt(i) - 97;

    // Set the first occurrence only once
    if (first[curr] < 0) {
      first[curr] = i;
    }

    // Update the last occurrence every time the character appears
    last[curr] = i;
  }

  // start = starting index of the current partition
  // end = farthest index that the current partition must reach
  let start = (end = 0);

  // Second pass: determine partition boundaries
  for (let i = 0; i < s.length; i++) {
    let curr = s.charCodeAt(i) - 97;

    // If the current character starts after the current partition's end,
    // then the previous partition can safely be closed.
    if (end < first[curr]) {
      // Store the length of the completed partition
      ans.push(end - start + 1);

      // Start a new partition from the current index
      start = end = i;
    }

    // Extend the current partition to include the last occurrence
    // of the current character.
    // This ensures that the character doesn't appear in another partition.
    end = Math.max(end, last[curr]);
  }

  // Add the length of the final partition
  if (end - start + 1 > 0) {
    ans.push(end - start + 1);
  }

  // Return the lengths of all partitions
  return ans;
};
