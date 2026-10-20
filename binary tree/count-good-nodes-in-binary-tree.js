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
 * @return {number}
 */
var goodNodes = function (root) {
  // Stores the total number of good nodes
  let ans = 0;

  function traversal(curr, maxSeenSoFar) {
    // A node is good if its value is greater than or equal to
    // the maximum value encountered on the path from the root
    if (curr.val >= maxSeenSoFar) {
      ++ans;
    }

    // Update the maximum value seen on the current path
    let maxValue = Math.max(curr.val, maxSeenSoFar);

    // Recursively traverse the left subtree with the updated maximum
    curr.left && traversal(curr.left, maxValue);

    // Recursively traverse the right subtree with the updated maximum
    curr.right && traversal(curr.right, maxValue);
  }

  // Start traversal from the root with negative infinity,
  // so the root is always counted as a good node
  traversal(root, -Infinity);

  // Return the total number of good nodes
  return ans;
};
