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
 * @param {TreeNode} subRoot
 * @return {boolean}
 */
var isSubtree = function (root, subRoot) {
  // Convert both trees into strings using preorder traversal
  let rootHash = createHash(root);
  let subRootHash = createHash(subRoot);

  // If the subtree's hash exists in the main tree's hash,
  // consider subRoot to be a subtree of root
  return rootHash.includes(subRootHash);
};

var createHash = function (root) {
  // Stores the serialized representation of the tree
  let hash = "";

  function traversal(curr) {
    // Add a marker for null nodes to preserve the tree structure
    if (!curr) {
      hash = hash + "-#";
      return;
    }

    // Add the current node's value to the hash
    hash = hash + "-" + curr.val;

    // Traverse the left subtree first
    traversal(curr.left);

    // Traverse the right subtree next
    traversal(curr.right);
  }

  // Start preorder traversal from the root
  traversal(root);

  // Return the serialized tree representation
  return hash;
};
