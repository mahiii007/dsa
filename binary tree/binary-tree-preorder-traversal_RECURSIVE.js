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
 * @return {number[]}
 */
var preorderTraversal = function (root) {
  let res = [];

  // Recursively traverse the tree.
  function traverse(currNode) {
    // If the current node is null,
    // there is nothing to traverse.
    if (!currNode) {
      return;
    }

    // PREORDER: Process the current node first.
    res.push(currNode.val);

    // Then traverse the left subtree.
    traverse(currNode.left);

    // Finally, traverse the right subtree.
    traverse(currNode.right);
  }

  // Start traversal from the root.
  traverse(root);

  return res;
};
