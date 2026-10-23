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
 * @param {number} val
 * @return {TreeNode}
 */
var searchBST = function (root, val) {
  // If the tree is empty, return null
  if (!root) return root;

  // Stores the node where the target value is found
  let ans = null;

  function traversal(curr) {
    // If the current node's value matches the target, store the node
    if (curr.val === val) {
      ans = curr;
    } else {
      // If the target is smaller than the current value,
      // search in the left subtree
      if (curr.val > val) {
        curr.left && traversal(curr.left);
      } else {
        // If the target is greater than the current value,
        // search in the right subtree
        curr.right && traversal(curr.right);
      }
    }
  }

  // Start searching from the root
  traversal(root);

  // Return the node containing the target, or null if not found
  return ans;
};
