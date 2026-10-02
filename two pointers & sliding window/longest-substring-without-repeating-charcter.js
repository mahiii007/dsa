/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    // Left pointer of the sliding window
    let i = 0;

    // Right pointer of the sliding window
    let j = 0;

    // Stores the most recent index of each character
    const map = new Map();

    // Stores the maximum length found so far
    let maxWs = 0;

    // Expand the sliding window using the right pointer
    for (j = 0; j <= s.length - 1; j++) {

        // If the current character was already seen
        // and its previous index is inside the current window,
        // move the left pointer just after that duplicate.
        if (map.has(s[j]) && map.get(s[j]) >= i) {
            i = map.get(s[j]) + 1;
        }

        // Update the latest index of the current character
        map.set(s[j], j);

        // Current window length = right pointer - left pointer + 1
        const currWs = j - i + 1;

        // Keep track of the longest window found so far
        maxWs = Math.max(currWs, maxWs);
    }

    return maxWs;
};
