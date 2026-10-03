/**
 * @param {string} s
 * @param {number} k
 * @return {number}
 */
var characterReplacement = function (s, k) {
  let i = 0;
  let j = 0;
  let maxSubstr = 0;

  const map = new Map();

  while (j < s.length) {
    // Add the current character to the window.
    map.set(s[j], (map.get(s[j]) || 0) + 1);

    // Check whether the current window can be made
    // valid by replacing at most k characters.
    if (validWindow(map, k)) {
      // Current window is valid.
      // Update the maximum length found so far.
      maxSubstr = Math.max(maxSubstr, j - i + 1);

      // Expand the window.
      ++j;
    } else {
      // Window is invalid, so remove the character
      // at the left side of the window.
      map.set(s[i], map.get(s[i]) - 1);

      // Shrink the window from the left.
      ++i;
      ++j;
    }
  }

  return maxSubstr;
};

/**
 * Checks whether the current window can be converted
 * into a string containing the same character using
 * at most k replacements.
 *
 * @param {Map} map
 * @param {number} k
 * @return {boolean}
 */
var validWindow = function (map, k) {
  let totalWindow = 0;
  let maxWindow = 0;

  // Find:
  // 1. Total number of characters in the window.
  // 2. Frequency of the most frequent character.
  for (let i = 0; i < 26; i++) {
    const char = String.fromCharCode(i + 65);

    if (map.has(char)) {
      const frequency = map.get(char);

      totalWindow += frequency;
      maxWindow = Math.max(maxWindow, frequency);
    }
  }

  // Characters that need to be replaced:
  //
  // total characters - most frequent character
  //
  // If this number is <= k, the window is valid.
  return totalWindow - maxWindow <= k;
};
