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
var inorderTraversal = function (root) {
  let ans = [];

  // Recursively traverse the binary tree.
  function traversal(currNode) {
    // If the current node is null,
    // there is nothing to traverse.
    if (!currNode) {
      return;
    }

    // INORDER: First visit the left subtree.
    traversal(currNode.left);

    // Then process the current/root node.
    ans.push(currNode.val);

    // Finally, visit the right subtree.
    traversal(currNode.right);
  }

  // Start traversal from the root.
  traversal(root);

  return ans;
};
