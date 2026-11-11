/**
 * @param {string} s
 * @return {string[][]}
 */
var partition = function (s) {
  let res = [];

  function backtrack(path, remainingStr) {
    // Base case: If no characters are left,
    // we have found a valid palindrome partition.
    if (!remainingStr.length) {
      // Store a copy of the current partition.
      res.push([...path]);
    }

    // Try every possible prefix of the remaining string.
    for (let i = 1; i <= remainingStr.length; i++) {
      // Select a substring starting from index 0
      // and ending just before index i.
      let choice = remainingStr.substring(0, i);

      // Skip the substring if it is not a palindrome.
      if (!isPalindrome(choice)) {
        continue;
      }

      // Choose: Add the palindrome substring to the path.
      path.push(choice);

      // Explore: Continue partitioning the remaining string
      // after removing the selected substring.
      backtrack(path, remainingStr.substring(i));

      // Backtrack: Remove the last selected substring
      // to try another possible partition.
      path.pop();
    }
  }

  // Start with an empty partition and the complete string.
  backtrack([], s);

  return res;
};

function isPalindrome(str) {
  let i = 0;
  let j = str.length - 1;

  // Compare characters from both ends moving towards the center.
  while (i < j) {
    // If characters don't match, the string is not a palindrome.
    if (str[i] !== str[j]) {
      return false;
    }

    i++;
    j--;
  }

  // All characters matched, so the string is a palindrome.
  return true;
}
