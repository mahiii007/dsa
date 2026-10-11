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
 * @return {number}
 */
var maxDepth = function (root) {
  function traversal(curr) {
    // Base case: an empty node contributes 0 depth.
    if (!curr) {
      return 0;
    }

    // Recursively calculate the maximum depth of the left subtree.
    const leftMax = traversal(curr.left);

    // Recursively calculate the maximum depth of the right subtree.
    const rightMax = traversal(curr.right);

    // Add 1 for the current node and take the deeper subtree.
    return 1 + Math.max(leftMax, rightMax);
  }

  // Start the recursion from the root and return its maximum depth.
  return traversal(root);
};
