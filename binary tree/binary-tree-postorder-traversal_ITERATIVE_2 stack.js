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
var postorderTraversal = function (root) {
  // If the tree is empty, return an empty array.
  if (!root) return [];

  // s1 is used to traverse the tree.
  // s2 stores nodes in reverse postorder.
  let s1 = [root];
  let s2 = [];

  while (s1.length) {
    // Take the top node from s1.
    let curr = s1.pop();

    // Store the node in s2.
    s2.push(curr);

    // Push LEFT first...
    curr.left && s1.push(curr.left);

    // ...then RIGHT.
    // Since stack is LIFO, RIGHT will be processed first.
    curr.right && s1.push(curr.right);
  }

  let res = [];

  // Reverse the order stored in s2.
  // This gives us the actual postorder:
  // LEFT → RIGHT → ROOT
  while (s2.length) {
    res.push(s2.pop().val);
  }

  return res;
};
