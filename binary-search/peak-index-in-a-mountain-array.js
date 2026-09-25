/**
 * @param {number[]} arr
 * @return {number}
 */
var peakIndexInMountainArray = function (arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    const mid = left + Math.floor((right - left) / 2);

    if (arr[mid + 1] > arr[mid]) {
      // We are on the increasing side of the mountain.
      // The peak must be somewhere to the right.
      left = mid + 1;
    } else {
      // We are on the decreasing side,
      // or mid itself could be the peak.
      // So keep mid and search on the left side.
      right = mid;
    }
  }

  // left == right, so this index is the peak.
  return left;
};
