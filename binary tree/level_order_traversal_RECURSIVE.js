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
 * @return {number[][]}
 */
var levelOrder = function (root) {
  // If the tree is empty, return an empty array.
  if (!root) return [];

  let ans = [];

  // Traverse the tree recursively while tracking
  // the level of each node.
  function traversal(curr, level) {
    // If this is the first node encountered at this level,
    // create an array to store its values.
    if (!ans[level]) {
      ans[level] = [];
    }

    // Add the current node's value to its corresponding level.
    ans[level].push(curr.val);

    // Visit the left subtree at the next level.
    if (curr.left) {
      traversal(curr.left, level + 1);
    }

    // Visit the right subtree at the next level.
    if (curr.right) {
      traversal(curr.right, level + 1);
    }
  }

  // Start traversal from the root at level 0.
  traversal(root, 0);

  return ans;
};
