
/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function(candidates, target) {

    // Stores all valid combinations
    let res = [];

    // Sort candidates to:
    // 1. Handle duplicate elements
    // 2. Enable early pruning when the remaining sum becomes negative
    candidates.sort((a, b) => a - b);

    function backtrack(rem, path, start) {

        // Base case: Target sum is achieved
        // Store a copy of the current combination
        if (rem === 0) {
            res.push([...path]);
        }

        // If remaining sum is zero or negative,
        // no further elements need to be explored
        if (rem <= 0) {
            return;
        }

        // Explore candidates starting from the given index
        for (let i = start; i < candidates.length; i++) {

            // Skip duplicates at the same recursion level
            // This prevents generating duplicate combinations
            if (i > start && candidates[i - 1] === candidates[i]) {
                continue;
            }

            // Choose the current candidate
            path.push(candidates[i]);

            // Explore the next candidate
            // i + 1 ensures each array element is used only once
            backtrack(rem - candidates[i], path, i + 1);

            // Backtrack: remove the last chosen element
            // and explore other possible combinations
            path.pop();
        }
    }

    // Start backtracking with the full target and index 0
    backtrack(target, [], 0);

    // Return all unique combinations
    return res;
};
