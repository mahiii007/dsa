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
 * @param {number} targetSum
 * @return {boolean}
 */
var hasPathSum = function (root, targetSum) {
  // If the tree is empty, no root-to-leaf path exists
  if (!root) return false;

  // Stores whether any valid root-to-leaf path is found
  let ans = false;

  function traversal(curr, currSum) {
    // Add the current node's value to the running sum
    const newSum = currSum + curr.val;

    // Check whether the current node is a leaf node
    if (!curr.left && !curr.right) {
      // If the leaf's path sum matches targetSum, mark the answer as true
      if (newSum === targetSum) {
        ans = ans || true;
      }
    }

    // Recursively traverse the left subtree with the updated sum
    curr.left && traversal(curr.left, newSum);

    // Recursively traverse the right subtree with the updated sum
    curr.right && traversal(curr.right, newSum);
  }

  // Start traversal from the root with an initial sum of 0
  traversal(root, 0);

  // Return whether a valid root-to-leaf path was found
  return ans;
};
