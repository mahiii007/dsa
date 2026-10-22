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
 * @return {boolean}
 */
var isValidBST = function (root) {
  // Assume the tree is a valid BST initially
  let ans = true;

  function isBst(curr, low, high) {
    // Check whether the current node violates the BST range
    // curr.val must be strictly greater than low
    // curr.val must be strictly smaller than high
    if (
      (low !== null && curr.val <= low) ||
      (high !== null && curr.val >= high)
    ) {
      ans = false;
    }

    // All nodes in the left subtree must be smaller than curr.val
    // Keep the lower bound unchanged and update the upper bound
    curr.left && isBst(curr.left, low, curr.val);

    // All nodes in the right subtree must be greater than curr.val
    // Update the lower bound and keep the upper bound unchanged
    curr.right && isBst(curr.right, curr.val, high);
  }

  // Start validation with no lower or upper bound
  isBst(root, null, null);

  // Return whether all nodes satisfy the BST rules
  return ans;
};
