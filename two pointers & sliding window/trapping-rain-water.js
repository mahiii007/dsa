**
 * @param {number[]} height
 * @return {number}
 */
 trap = function (height) {
    let l = 0;
    let r = height.length - 1;
    let trappedWater = 0;
    let maxLeft = 0;
    let maxRight = 0;
    while (l < r) {
        if (height[l] < height[r]) {
            if (height[l] >= maxLeft) {
                maxLeft = height[l];
            } else {
                trappedWater += maxLeft - height[l];
            }

            l++;
        } else {
            if (height[r] >= maxRight) {
                maxRight = height[r];
            } else {
                trappedWater += maxRight - height[r];
            }

            r--;
        }
    }
    return trappedWater;
};
