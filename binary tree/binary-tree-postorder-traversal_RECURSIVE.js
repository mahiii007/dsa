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
var postorderTraversal = function (root) {
  let ans = [];

  // Recursively traverse the binary tree.
  function traversal(node) {
    // If the current node is null,
    // there is nothing to traverse.
    if (!node) {
      return;
    }

    // POSTORDER:
    // First visit the left subtree.
    traversal(node.left);

    // Then visit the right subtree.
    traversal(node.right);

    // Finally, process the current/root node.
    ans.push(node.val);
  }

  // Start the traversal from the root.
  traversal(root);

  return ans;
};
