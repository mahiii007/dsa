
/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} root
 * @return {number[][]}
 */
var zigzagLevelOrder = function(root) {

    // If the tree is empty, return an empty array
    if (!root) return [];

    // Initialize the queue with the root node for BFS
    let q = [root];

    // Tracks the current level (0-based indexing)
    // Even levels: left to right
    // Odd levels: right to left
    let level = 0;

    // Stores the final zigzag level order traversal
    let ans = [];

    // Continue until all nodes have been processed
    while (q.length) {

        // Stores values of nodes at the current level
        let levelArr = [];

        // Capture the number of nodes at this level
        // before adding children to the queue
        let levelSize = q.length;

        // Process all nodes belonging to this level
        for (let i = 0; i < levelSize; i++) {

            // Remove the front node from the queue
            let curr = q.shift();

            // For odd levels, insert at the beginning
            // to reverse the order of values
            if (level % 2 !== 0) {
                levelArr.unshift(curr.val);
            } else {
                // For even levels, maintain normal order
                levelArr.push(curr.val);
            }

            // Add the left child to the queue if it exists
            curr.left && q.push(curr.left);

            // Add the right child to the queue if it exists
            curr.right && q.push(curr.right);
        }

        // Add the completed current level to the result
        ans.push(levelArr);

        // Move to the next level and alternate direction
        ++level;
    }

    // Return the zigzag level order traversal
    return ans;
};
