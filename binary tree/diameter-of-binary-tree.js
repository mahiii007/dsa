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
var diameterOfBinaryTree = function (root) {
  // Stores the maximum diameter found in the tree
  let maxDiameter = 0;

  function findDepth(curr) {
    // Base case: an empty node has a depth of 0
    if (!curr) return 0;

    // Calculate the height of the left subtree
    let leftDepth = findDepth(curr.left);

    // Calculate the height of the right subtree
    let rightDepth = findDepth(curr.right);

    // Diameter passing through the current node is the sum of both subtree heights
    // Update maxDiameter if this diameter is greater than the previous maximum
    maxDiameter = Math.max(maxDiameter, leftDepth + rightDepth);

    // Return the height of the current subtree
    return 1 + Math.max(leftDepth, rightDepth);
  }

  // Calculate subtree heights and update the maximum diameter
  findDepth(root);

  // Return the maximum diameter, measured in number of edges
  return maxDiameter;
};
