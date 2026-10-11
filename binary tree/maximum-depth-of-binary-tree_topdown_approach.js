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
  // An empty tree has a depth of 0.
  if (!root) return 0;

  // Stores the maximum depth found so far.
  let maxDepth = 0;

  // Traverse the tree while keeping track of the current depth.
  function traversal(curr, depth) {
    // Update the maximum depth whenever we visit a node.
    maxDepth = Math.max(depth, maxDepth);

    // Visit the left child at the next depth level.
    if (curr.left) {
      traversal(curr.left, depth + 1);
    }

    // Visit the right child at the next depth level.
    if (curr.right) {
      traversal(curr.right, depth + 1);
    }
  }

  // The root node is at depth 1.
  traversal(root, 1);

  return maxDepth;
};
