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
var isSymmetric = function (root) {
  function isSame(left, right) {
    // If both nodes are null, they are symmetric
    if (!left && !right) return true;

    // If only one node is null, the trees are not symmetric
    if (!left || !right) return false;

    // Values must match, and opposite subtrees must be symmetric:
    // left's left  <-> right's right
    // left's right <-> right's left
    return (
      left.val === right.val &&
      isSame(left.left, right.right) &&
      isSame(left.right, right.left)
    );
  }

  // Compare the left and right subtrees of the root
  return isSame(root.left, root.right);
};
