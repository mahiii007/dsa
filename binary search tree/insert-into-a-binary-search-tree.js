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
 * @param {number} val
 * @return {TreeNode}
 */
var insertIntoBST = function (root, val) {
  // If the current node is null, we found the correct position to insert the new node.
  if (!root) return new TreeNode(val);

  // If the value is smaller than the current node, insert it into the left subtree.
  if (root.val > val) {
    root.left = insertIntoBST(root.left, val);
  } else {
    // If the value is greater than or equal to the current node, insert it into the right subtree.
    root.right = insertIntoBST(root.right, val);
  }

  // Return the current node to preserve the existing tree structure.
  return root;
};
