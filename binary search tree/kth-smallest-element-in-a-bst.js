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
 * @param {number} k
 * @return {number}
 */
var kthSmallest = function (root, k) {
  let ans = null;
  let count = k;

  function traversal(curr) {
    // Stop traversing once we have found the kth smallest element.
    if (ans !== null) return;

    // Visit the left subtree first because smaller values are on the left.
    curr.left && traversal(curr.left);

    // Visit the current node after its left subtree.
    --count;

    // When k becomes zero, the current node is the kth smallest element.
    if (count === 0) {
      ans = curr.val;
      return;
    }

    // Visit the right subtree after processing the current node.
    curr.right && traversal(curr.right);
  }

  // Start the inorder traversal from the root.
  traversal(root);

  // Return the kth smallest value found.
  return ans;
};
