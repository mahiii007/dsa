/**
 * @param {number[]} arr
 * @param {number} k
 * @param {number} x
 * @return {number[]}
 */
var findClosestElements = function (arr, k, x) {

    /*
     * We need to return k closest elements to x.
     *
     * Since arr is sorted, the answer will always be a
     * CONTIGUOUS subarray/window of size k.
     *
     * Example:
     *
     * arr = [1, 2, 3, 4, 5]
     * k = 3
     *
     * Possible windows:
     * [1,2,3]
     * [2,3,4]
     * [3,4,5]
     *
     * So instead of searching for the elements themselves,
     * we binary-search for the STARTING INDEX of the best window.
     */

    // left = smallest possible starting index
    let left = 0;

    /*
     * If the window has k elements, its starting index
     * cannot go beyond arr.length - k.
     *
     * Example:
     * arr.length = 5, k = 3
     *
     * Possible starting indices = 0, 1, 2
     * Therefore:
     * right = 5 - 3 = 2
     */
    let right = arr.length - k;

    while (left < right) {

        // Find the middle possible starting index.
        const mid = left + Math.floor((right - left) / 2);

        /*
         * We are comparing TWO possible windows:
         *
         * Current window starts at:
         *     mid
         *
         * Next window starts at:
         *     mid + 1
         *
         * Current window:
         * [arr[mid], ........, arr[mid + k - 1]]
         *
         * Next window:
         * [arr[mid + 1], ........, arr[mid + k]]
         *
         * The only elements that change are:
         *
         *   arr[mid]     -> removed
         *   arr[mid + k] -> added
         *
         * Therefore, we only need to compare these two elements.
         */

        /*
         * Distance of arr[mid] from x:
         *     x - arr[mid]
         *
         * Distance of arr[mid + k] from x:
         *     arr[mid + k] - x
         *
         * If the LEFT element is farther from x than the
         * RIGHT element, we should move our window to the right.
         *
         * Example:
         * x = 5
         *
         * arr[mid]     = 1  -> distance = 4
         * arr[mid + k] = 6  -> distance = 1
         *
         * 1 is farther, so remove it and move right.
         */
        if (x - arr[mid] > arr[mid + k] - x) {

            // The next window is better.
            left = mid + 1;

        } else {

            /*
             * The current window is better (or equally good).
             *
             * Keep mid as a possible answer and search
             * towards the left.
             */
            right = mid;
        }
    }

    /*
     * When left === right, we have found the starting index
     * of the best window.
     *
     * Return k elements starting from left.
     */
    return arr.slice(left, left + k);
};
