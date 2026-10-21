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
var maxPathSum = function (root) {
  // Stores the maximum path sum found anywhere in the tree
  // Start with -Infinity because all node values can be negative
  let maxPath = -Infinity;

  function traversal(curr) {
    // An empty node contributes 0 to the path sum
    if (!curr) return 0;

    // Get the maximum contribution from the left subtree
    // Ignore negative sums because they would reduce the path sum
    let maxLeft = Math.max(traversal(curr.left), 0);

    // Get the maximum contribution from the right subtree
    // Ignore negative sums because they would reduce the path sum
    let maxRight = Math.max(traversal(curr.right), 0);

    // Calculate the maximum path sum passing through the current node
    // This path can include both the left and right subtrees
    let currMax = curr.val + maxLeft + maxRight;

    // Update the overall maximum path sum if the current path is greater
    maxPath = Math.max(currMax, maxPath);

    // Return the maximum one-sided path sum to the parent
    // A parent can extend the path through only one child
    return curr.val + Math.max(maxLeft, maxRight);
  }

  // Traverse the tree and calculate path sums
  traversal(root);

  // Return the maximum path sum found
  return maxPath;
};
