var insertIntoBST = function (root, val) {
  // If the tree is empty, the new node becomes the root.
  if (!root) return new TreeNode(val);

  // If the value is smaller, move to the left subtree.
  if (val < root.val) {
    // If the left child is empty, insert the node directly.
    if (!root.left) {
      root.left = new TreeNode(val);
    } else {
      // Otherwise, continue traversing the left subtree.
      insertIntoBST(root.left, val);
    }
  } else {
    // If the right child is empty, insert the node directly.
    if (!root.right) {
      root.right = new TreeNode(val);
    } else {
      // Otherwise, continue traversing the right subtree.
      insertIntoBST(root.right, val);
    }
  }

  // Return the original root; insertion was done directly.
  return root;
};
