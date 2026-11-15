/**
 * @param {number[]} g
 * @param {number[]} s
 * @return {number}
 */
var findContentChildren = function (g, s) {
  // Sort children's greed factors in ascending order.
  g.sort((a, b) => a - b);

  // Sort cookie sizes in ascending order.
  s.sort((a, b) => a - b);

  // Count the number of children who receive cookies.
  let contentChildren = 0;

  // Pointer to iterate through the available cookies.
  let j = 0;

  // Continue while there are cookies available.
  while (j < s.length) {
    // Check whether the current cookie can satisfy
    // the greed factor of the current child.
    if (s[j] >= g[contentChildren]) {
      // Assign this cookie to the child
      // and move to the next child.
      ++contentChildren;
    }

    // Move to the next cookie.
    ++j;
  }

  // Return the total number of content children.
  return contentChildren;
};
