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
 * @return {boolean}
 */
var isBalanced = function (root) {
  // Assume the tree is balanced initially
  let ans = true;

  function calcHeight(curr) {
    // Base case: an empty node has height 0
    if (!curr) return 0;

    // Recursively calculate the height of the left subtree
    let leftHeight = calcHeight(curr.left);

    // Recursively calculate the height of the right subtree
    let rightHeight = calcHeight(curr.right);

    // A node is unbalanced if the height difference exceeds 1
    if (Math.abs(leftHeight - rightHeight) > 1) {
      ans = ans && false;
    }

    // Return the height of the current subtree
    return 1 + Math.max(leftHeight, rightHeight);
  }

  // Calculate subtree heights and check the balance condition at every node
  calcHeight(root);

  // Return whether the entire tree is balanced
  return ans;
};
