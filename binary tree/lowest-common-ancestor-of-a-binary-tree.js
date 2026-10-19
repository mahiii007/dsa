/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * @param {TreeNode} root
 * @param {TreeNode} p
 * @param {TreeNode} q
 * @return {TreeNode}
 */
var lowestCommonAncestor = function (root, p, q) {
  // Stores the lowest common ancestor found
  let ans = null;

  function traversal(curr) {
    // Counts how many target nodes (p and q) exist in this subtree
    let count = 0;

    // If the current node is null, no target node is found
    if (!curr) return 0;

    // Recursively count target nodes in the left subtree
    let leftValue = traversal(curr.left);

    // Recursively count target nodes in the right subtree
    let rightValue = traversal(curr.right);

    // If the current node matches p or q, increment the count
    if (curr.val === p.val || curr.val === q.val) {
      ++count;
    }

    // Add the target nodes found in both subtrees
    count = count + leftValue + rightValue;

    // The first (lowest) node whose subtree contains both targets
    // becomes the lowest common ancestor
    if (!ans && count === 2) {
      ans = curr;
    }

    // Return the number of target nodes found in this subtree
    return count;
  }

  // Start the traversal from the root
  traversal(root);

  // Return the lowest common ancestor
  return ans;
};
