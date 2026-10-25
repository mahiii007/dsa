/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // If both p and q are greater than the current node,
  // their LCA must be in the right subtree
  if (p.val > root.val && q.val > root.val) {
    return lowestCommonAncestor(root.right, p, q);

    // If both p and q are smaller than the current node,
    // their LCA must be in the left subtree
  } else if (p.val < root.val && q.val < root.val) {
    return lowestCommonAncestor(root.left, p, q);
  } else {
    // If p and q are on opposite sides, or one equals the current node,
    // the current node is their Lowest Common Ancestor
    return root;
  }
};
