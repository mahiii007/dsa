/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  let left = 0;
  let right = numbers.length - 1;

  while (left < right) {
    const sum = numbers[left] + numbers[right];

    if (sum === target) {
      // +1 because the problem uses 1-based indexing.
      return [left + 1, right + 1];
    } else if (sum < target) {
      // Sum is too small.
      // Move left forward to get a larger number.
      left++;
    } else {
      // Sum is too large.
      // Move right backward to get a smaller number.
      right--;
    }
  }
};

//  Approach - 2 - O(n), space(O(n))

/**
 * @param {number[]} numbers
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (numbers, target) {
  const map = new Map();

  for (let i = 0; i < numbers.length; i++) {
    const val = target - numbers[i];
    if (map.has(val)) {
      return [map.get(val) + 1, i + 1];
    } else {
      map.set(numbers[i], i);
    }
  }
};
