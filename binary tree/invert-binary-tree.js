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
 * @return {TreeNode}
 */
var invertTree = function (root) {
  // Base case: if the current node is null, nothing needs to be inverted
  if (!root) return root;

  // Swap the left and right children of the current node
  let temp = root.left;
  root.left = root.right;
  root.right = temp;

  // Recursively invert the left subtree
  invertTree(root.left);

  // Recursively invert the right subtree
  invertTree(root.right);

  // Return the root of the inverted tree
  return root;
};
