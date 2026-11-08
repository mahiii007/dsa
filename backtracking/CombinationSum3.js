
/**
 * @param {number} k
 * @param {number} n
 * @return {number[][]}
 */
var combinationSum3 = function(k, n) {

    // Stores all valid combinations
    let res = [];

    function backtrack(rem, path, start) {

        // Base case: Remaining sum is 0 AND
        // exactly k numbers have been selected
        if (path.length === k) {
             if (rem === 0) res.push([...path]);
             return;
            }

        // Pruning: If remaining sum becomes negative,
        // the current combination cannot be valid
        if (rem <= 0) {
            return;
        }

        // Explore numbers from start to 9
        // Only numbers 1 to 9 are allowed
        for (let i = start; i <= 9; i++) {

            // Choose the current number
            path.push(i);

            // Explore the next number
            // i + 1 ensures numbers are not reused
            backtrack(rem - i, path, i + 1);

            // Backtrack: Remove the last chosen number
            // to explore other possible combinations
            path.pop();
        }
    }

    // Start with:
    // Remaining target = n
    // Empty combination
    // Starting number = 1
    backtrack(n, [], 1);

    // Return all valid combinations
    return res;
};
