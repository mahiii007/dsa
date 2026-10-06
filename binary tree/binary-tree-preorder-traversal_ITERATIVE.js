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
var preorderTraversal = function (root) {
  // If the tree is empty, return an empty array.
  if (!root) return [];

  // Stack is used to simulate recursion.
  let stack = [root];

  let ans = [];

  while (stack.length) {
    // Take the top node from the stack.
    const curr = stack.pop();

    // PREORDER: Process the current node first.
    ans.push(curr.val);

    // Stack follows LIFO (Last In, First Out).
    // Push RIGHT first so that LEFT is processed first.
    if (curr.right) {
      stack.push(curr.right);
    }

    // Push LEFT last so that it comes out of the stack first.
    if (curr.left) {
      stack.push(curr.left);
    }
  }

  return ans;
};
