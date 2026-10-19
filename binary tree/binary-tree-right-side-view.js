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
var rightSideView = function (root) {
  // If the tree is empty, return an empty array
  if (!root) return [];

  // Stores the visible node values from each level
  let ans = [];

  // Initialize the queue with the root node
  let q = [root];

  // Traverse the tree level by level
  while (q.length) {
    // Store the number of nodes at the current level
    let levelSize = q.length;

    for (let i = 0; i < levelSize; i++) {
      // Remove the next node from the queue
      let curr = q.shift();

      // Since right children are added first, the first node
      // processed at each level is the rightmost node
      if (i === 0) {
        ans.push(curr.val);
      }

      // Add the right child first so it is processed before the left child
      curr.right && q.push(curr.right);

      // Add the left child after the right child
      curr.left && q.push(curr.left);
    }
  }

  // Return the right-side view of the tree
  return ans;
};
