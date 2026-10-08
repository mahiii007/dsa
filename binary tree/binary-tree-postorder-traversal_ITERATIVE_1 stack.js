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
 * @return {number[]}
 */
var postorderTraversal = function(root) {
    // Stack is used to simulate the recursive call stack.
    let stack = [];

    // Start traversal from the root.
    let curr = root;

    // Stores the nodes in postorder: Left -> Right -> Root.
    let res = [];

    // Keeps track of the last node that was completely processed.
    // This helps us determine whether a right subtree has already been visited.
    let lastVisited = null;

    // Continue while there are nodes to process or curr is not null.
    while (stack.length || curr) {

        // Keep moving to the leftmost node.
        // Push each node onto the stack so we can process it later.
        while (curr) {
            stack.push(curr);
            curr = curr.left;
        }

        // The node at the top of the stack is the next candidate to process.
        const peekNode = stack[stack.length - 1];

        // If the node has a right child and that right subtree
        // has not been visited yet, traverse the right subtree.
        if (peekNode.right && lastVisited !== peekNode.right) {
            curr = peekNode.right;
        } else {
            // Both left and right subtrees have been processed,
            // so we can now process the current node.
            res.push(peekNode.val);

            // Remove the processed node from the stack.
            lastVisited = stack.pop();
        }
    }

    // Return the nodes in postorder: Left -> Right -> Root.
    return res;
};
