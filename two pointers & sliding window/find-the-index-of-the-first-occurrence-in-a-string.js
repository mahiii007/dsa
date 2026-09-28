/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function (haystack, needle) {
  const m = haystack.length;
  const n = needle.length;

  // Try every possible starting position in haystack.
  // We only need to check positions where the remaining
  // characters are enough to contain the entire needle.
  for (let i = 0; i <= m - n; i++) {
    let j;

    // Compare needle with the substring starting at index i.
    for (j = 0; j < n; j++) {
      // If characters don't match, stop checking this position
      // and move to the next starting position.
      if (haystack[i + j] !== needle[j]) {
        break;
      }
    }

    // If we matched all characters of needle,
    // i is the starting index of needle in haystack.
    if (j === n) {
      return i;
    }
  }

  // Needle was not found in haystack.
  return -1;
};
