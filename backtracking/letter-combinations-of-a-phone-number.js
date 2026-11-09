/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  // If the input is empty, return an empty array.
  if (!digits.length) return [];

  let res = [];

  // Mapping each digit to its corresponding letters.
  let letters = {
    2: "abc",
    3: "def",
    4: "ghi",
    5: "jkl",
    6: "mno",
    7: "pqrs",
    8: "tuv",
    9: "wxyz",
  };

  function backtrack(path, index) {
    // Base case: If we have processed all digits,
    // we have formed one complete letter combination.
    if (digits.length === index) {
      // Join the characters and store the combination.
      res.push(path.join(""));
      return;
    }

    // Get all possible letters for the current digit.
    let choices = letters[digits[index]];

    // Try every possible letter for the current digit.
    for (let i = 0; i < choices.length; i++) {
      // Choose: Add the current letter to the path.
      path.push(choices[i]);

      // Explore: Move to the next digit.
      backtrack(path, index + 1);

      // Backtrack: Remove the last letter
      // to try another possible letter.
      path.pop();
    }
  }

  // Start with an empty path and process the first digit (index 0).
  backtrack([], 0);

  return res;
};
