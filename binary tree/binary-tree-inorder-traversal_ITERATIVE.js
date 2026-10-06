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
  let res = [];
  let stack = [];

  // curr points to the node we are currently exploring.
  let curr = root;

  // Continue while there is either:
  // 1. A current node to explore, or
  // 2. A node waiting in the stack.
  while (curr || stack.length) {
    // Keep moving to the leftmost node.
    // Store every node in the stack because we need
    // to process them after their left subtree is completed.
    while (curr) {
      stack.push(curr);
      curr = curr.left;
    }

    // We have reached the leftmost node.
    // Take the most recently stored node from the stack.
    curr = stack.pop();

    // INORDER: process the current node
    // after its left subtree.
    res.push(curr.val);

    // Now move to the right subtree.
    // The next iteration will again go as far left as possible.
    curr = curr.right;
  }

  return res;
};
