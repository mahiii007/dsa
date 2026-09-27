/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isSubsequence = function (s, t) {
  let i = 0;
  let j = 0;

  while (i < s.length && j < t.length) {
    if (s[i] === t[j]) {
      // Match found, move to the next character in s.
      i++;
    }

    // Always move forward in t.
    j++;
  }

  // If we matched all characters of s,
  // then s is a subsequence of t.
  return i === s.length;
};
