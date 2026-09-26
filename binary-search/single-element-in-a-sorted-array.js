/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNonDuplicate = function(nums) {
    let left = 0;
    let right = nums.length - 1;

    /*
     * Important observation:
     *
     * Before the single element:
     *   pairs start at EVEN indices
     *   Example: [1,1,2,2,3,3,4]
     *             0 1 2 3 4 5 6
     *
     * After the single element:
     *   this pairing pattern breaks.
     *
     * So, we use binary search to find the position
     * where this pattern changes.
     */

    while (left <= right) {
        // Find the middle index safely.
        const mid = left + Math.floor((right - left) / 2);

        /*
         * If mid is EVEN:
         *
         * In the normal/pairing portion, nums[mid] should
         * be equal to nums[mid + 1].
         *
         * Example:
         * index:  0  1  2  3  4  5
         * value:  1  1  2  2  3  3
         *         ^     ^
         *       pairs start at even indices.
         *
         * If nums[mid] === nums[mid + 1],
         * the single element is somewhere to the RIGHT.
         *
         * Otherwise, the single element is at mid or to the LEFT.
         */
        if (mid % 2 === 0) {

            if (nums[mid] === nums[mid + 1]) {
                // Pair is correct -> single is on the right.
                left = mid + 1;
            } else {
                // Pair is broken -> single is at mid or on the left.
                right = mid - 1;
            }

        } else {

            /*
             * If mid is ODD:
             *
             * In the normal pairing portion, nums[mid]
             * should be equal to nums[mid - 1].
             *
             * If they are equal, the pairs before mid are valid,
             * so the single element must be to the RIGHT.
             *
             * Otherwise, the pair is broken, meaning the single
             * element is at mid or somewhere to the LEFT.
             */
            if (nums[mid] === nums[mid - 1]) {
                // Pair is correct -> single is on the right.
                left = mid + 1;
            } else {
                // Pair is broken -> single is at mid or on the left.
                right = mid - 1;
            }
        }
    }

    /*
     * When the loop ends:
     *
     * left points to the first index where the normal
     * pair pattern is broken.
     *
     * Therefore, nums[left] is the single element.
     */
    return nums[left];
};
