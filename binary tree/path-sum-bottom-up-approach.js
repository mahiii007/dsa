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
  // If the current node is null, no valid path exists
  if (!root) return false;

  // Check whether the current node is a leaf node
  if (!root.left && !root.right) {
    // At a leaf, the path is valid if its value equals the remaining target sum
    return root.val === targetSum;
  }

  // Subtract the current node's value to calculate the remaining target sum
  const remainingSum = targetSum - root.val;

  // Recursively check whether the left subtree contains a valid path
  const left = hasPathSum(root.left, remainingSum);

  // Recursively check whether the right subtree contains a valid path
  const right = hasPathSum(root.right, remainingSum);

  // Return true if either the left or right subtree has a valid path
  return left || right;
};
