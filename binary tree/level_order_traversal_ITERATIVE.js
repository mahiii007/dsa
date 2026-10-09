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
var levelOrder = function (root) {
    // If the tree is empty, return an empty array
    if (!root) return [];

    // Initialize the queue with the root node
    let queue = [root];

    // Stores the values of nodes level by level
    let ans = [];

    // Continue until all nodes have been processed
    while (queue.length) {
        // Stores the values of the current level
        let levelArr = [];

        // Capture the number of nodes at the current level
        let level = queue.length;

        // Process only the nodes belonging to the current level
        for (let i = 0; i < level; i++) {
            // Remove the first node from the queue
            const curr = queue.shift();

            // Add the left child to the queue if it exists
            curr.left && queue.push(curr.left);

            // Add the right child to the queue if it exists
            curr.right && queue.push(curr.right);

            // Store the current node's value
            levelArr.push(curr.val);
        }

        // Add the current level's values to the final result
        ans.push(levelArr);
    }

    // Return the level-order traversal
    return ans;
};
