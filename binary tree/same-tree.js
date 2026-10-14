/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */

/**
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {boolean}
 */
var isSameTree = function (p, q) {
  // If both nodes are null, their subtrees are identical
  if (!p && !q) return true;

  // If only one node is null, the trees are different
  if (!p || !q) return false;

  // Check whether:
  // 1. Both current node values are equal
  // 2. Their left subtrees are identical
  // 3. Their right subtrees are identical
  return (
    p.val === q.val &&
    isSameTree(p.left, q.left) &&
    isSameTree(p.right, q.right)
  );
};
