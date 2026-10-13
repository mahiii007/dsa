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
var isSymmetric = function (root) {
  // Initialize the queue with the root's left and right children
  let queue = [root.left, root.right];

  // Process pairs of nodes until the queue becomes empty
  while (queue.length) {
    // Remove two nodes that should be mirror images of each other
    let p1 = queue.shift();
    let p2 = queue.shift();

    // If both nodes are null, this pair is symmetric; check the next pair
    if (!p1 && !p2) continue;

    // If only one node is null, the tree is not symmetric
    if (!p1 || !p2) return false;

    // If the node values differ, the tree is not symmetric
    if (p1.val !== p2.val) return false;

    // Compare the outer children: left node's left vs right node's right
    queue.push(p1.left, p2.right);

    // Compare the inner children: left node's right vs right node's left
    queue.push(p1.right, p2.left);
  }

  // All pairs matched, so the tree is symmetric
  return true;
};
