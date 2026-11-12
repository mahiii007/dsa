
/**
 * @param {character[][]} board
 * @param {string} word
 * @return {boolean}
 */
var exist = function(board, word) {

    // Handle empty board
    if (!board.length || !board[0].length) return false;

    let m = board.length;
    let n = board[0].length;

    function backtrack(x, y, nextIndex) {

        // All characters of the word are matched
        if (nextIndex === word.length) {
            return true;
        }

        // Check boundaries and character mismatch
        if (
            x < 0 || x >= m ||
            y < 0 || y >= n ||
            board[x][y] !== word[nextIndex]
        ) {
            return false;
        }

        // Store original character before marking visited
        let original = board[x][y];

        // Mark current cell as visited
        board[x][y] = "#";

        // Explore all four directions
        let found =
            backtrack(x, y + 1, nextIndex + 1) ||  // Right
            backtrack(x, y - 1, nextIndex + 1) ||  // Left
            backtrack(x + 1, y, nextIndex + 1) ||  // Down
            backtrack(x - 1, y, nextIndex + 1);    // Up

        // Restore original character (Backtracking)
        board[x][y] = original;

        return found;
    }

    // Try starting the word from every cell
    for (let i = 0; i < m; i++) {
        for (let j = 0; j < n; j++) {

            if (board[i][j] === word[0]) {

                // Start matching from index 0
                if (backtrack(i, j, 0)) {
                    return true;
                }
            }
        }
    }

    return false;
};
