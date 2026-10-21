/**
 * Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function (root) {
  // If the tree is empty, return it as it is
  if (!root) return root;

  function traversal(curr) {
    // Connect the left child to the right child
    // Both children are on the same level
    if (curr.left) {
      curr.left.next = curr.right;
    }

    // If the right child exists and the current node has a next node,
    // connect the right child to the left child of the next node
    // This connects nodes across different parent nodes
    if (curr.right && curr.next) {
      curr.right.next = curr.next.left;
    }

    // Recursively connect nodes in the left subtree
    curr.left && traversal(curr.left);

    // Recursively connect nodes in the right subtree
    curr.right && traversal(curr.right);
  }

  // Start connecting nodes from the root
  traversal(root);

  // Return the modified tree with next pointers connected
  return root;
};
