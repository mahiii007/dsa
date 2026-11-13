
var solveNQueens = function(n) {

    let result = [];

    // Create an n x n board filled with "."
    let board = Array.from(
        { length: n },
        () => Array(n).fill(".")
    );

    let backtrack = (board, row, colSet, digSet, antiDigSet) => {

        // Base case: All n queens have been placed
        if (row === n) {
            result.push(transform(board));
            return;
        }

        // Try placing a queen in every column of the current row
        for (let col = 0; col < n; col++) {

            // Check whether the column or diagonals are already occupied
            if (
                colSet.has(col) ||
                digSet.has(row - col) ||
                antiDigSet.has(row + col)
            ) {
                continue;
            }

            // Choose: Place queen at current row and column
            board[row][col] = "Q";

            // Mark column and diagonals as occupied
            colSet.add(col);
            digSet.add(row - col);
            antiDigSet.add(row + col);

            // Explore: Move to the next row
            backtrack(board, row + 1, colSet, digSet, antiDigSet);

            // Backtrack: Remove the queen
            board[row][col] = ".";

            // Remove column and diagonals from occupied sets
            colSet.delete(col);
            digSet.delete(row - col);
            antiDigSet.delete(row + col);
        }
    };

    // Start placing queens from row 0
    backtrack(board, 0, new Set(), new Set(), new Set());

    return result;
};

// Convert 2D board into an array of strings
let transform = (board) => {

    let newBoard = [];

    for (let i = 0; i < board.length; i++) {
        newBoard.push(board[i].join(""));
    }

    return newBoard;
};
