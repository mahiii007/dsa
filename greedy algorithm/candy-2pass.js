/**
 * @param {number[]} ratings
 * @return {number}
 */
var candy = function (ratings) {
  let ans = 0;

  // Initialize every child with at least 1 candy
  let ltr = Array(ratings.length).fill(1);

  // First pass: Left to Right
  // If the current child has a higher rating than the left neighbor,
  // they must receive at least one more candy than the left neighbor.
  for (let i = 1; i < ratings.length; i++) {
    if (ratings[i] > ratings[i - 1]) {
      ltr[i] = ltr[i - 1] + 1;
    }
  }

  // Initialize another array with 1 candy for every child
  let rtl = Array(ratings.length).fill(1);

  // Second pass: Right to Left
  // If the current child has a higher rating than the right neighbor,
  // they must receive at least one more candy than the right neighbor.
  for (let i = ratings.length - 2; i >= 0; i--) {
    if (ratings[i] > ratings[i + 1]) {
      rtl[i] = rtl[i + 1] + 1;
    }
  }

  // Take the maximum of both arrays because a child must satisfy
  // both left-side and right-side candy requirements.
  for (let i = 0; i < ratings.length; i++) {
    ans = ans + Math.max(ltr[i], rtl[i]);
  }

  // Return the minimum total candies required
  return ans;
};
