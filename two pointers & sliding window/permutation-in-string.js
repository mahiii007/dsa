/**
 * @param {string} s1
 * @param {string} s2
 * @return {boolean}
 */
var checkInclusion = function (s1, s2) {
  // If s1 is longer than s2, it is impossible for s2
  // to contain any permutation of s1.
  if (s1.length > s2.length) return false;

  // Store character frequencies for:
  // 1. Current window in s2
  // 2. Characters in s1
  //
  // Index 0 -> 'a'
  // Index 1 -> 'b'
  // ...
  // Index 25 -> 'z'
  let windowHash = Array(26).fill(0);
  let stringHash = Array(26).fill(0);

  const window_length = s1.length;

  // Create the initial window in s2 with the same
  // length as s1.
  for (let i = 0; i < window_length; i++) {
    // Add character frequency from s2's initial window.
    ++windowHash[s2.charCodeAt(i) - 97];

    // Add character frequency from s1.
    ++stringHash[s1.charCodeAt(i) - 97];
  }

  // i -> left boundary of the sliding window
  // j -> right boundary of the sliding window
  let i = 0;
  let j = window_length - 1;

  // Continue while the window is inside s2.
  while (j < s2.length) {
    // If both frequency arrays are equal,
    // the current window is a permutation of s1.
    if (isHashSame(windowHash, stringHash)) {
      return true;
    }

    // Remove the character that is leaving
    // from the left side of the window.
    --windowHash[s2.charCodeAt(i) - 97];

    // Move the left pointer forward.
    ++i;

    // Move the right pointer forward.
    ++j;

    // Add the new character entering the window.
    ++windowHash[s2.charCodeAt(j) - 97];
  }

  // No window was found whose character frequencies
  // matched s1.
  return false;
};

/**
 * Compares two frequency arrays.
 *
 * @param {number[]} hash1
 * @param {number[]} hash2
 * @return {boolean}
 */
var isHashSame = function (hash1, hash2) {
  // Compare the frequency of every character from 'a' to 'z'.
  for (let i = 0; i < 26; i++) {
    // If any character has a different frequency,
    // the two strings/windows cannot be permutations.
    if (hash1[i] !== hash2[i]) {
      return false;
    }
  }

  // All 26 character frequencies are equal.
  return true;
};
