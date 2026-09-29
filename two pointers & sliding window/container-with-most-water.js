/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
  // Start with the widest possible container:
  // left pointer at the beginning and right pointer at the end.
  let i = 0;
  let j = height.length - 1;

  let maxArea = 0;

  while (i < j) {
    // The container height is limited by the shorter line.
    // Width is the distance between the two pointers.
    const area = Math.min(height[i], height[j]) * (j - i);

    // Keep track of the maximum area found so far.
    maxArea = Math.max(area, maxArea);

    // Move the pointer pointing to the shorter line.
    // Moving the taller line cannot increase the area
    // because the height is still limited by the shorter line,
    // while the width decreases.
    if (height[i] < height[j]) {
      i++;
    } else {
      j--;
    }
  }

  return maxArea;
};
