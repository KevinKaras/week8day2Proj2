const { TreeNode, BST } = require('./01-bst');

// const TreeNode = require("./01-bst.js");
// Write a function that takes in the root of a
// binary search tree and returns the minimum value.
// You may use your BST implementation to test this out.
function findMin(root) {
    if (!root) {
      return null
    } else if (!root.left && !root.right) {
      return root
    } else if (!root.left && root.right) {
      return root
    }

    while (root.left) {
      root = root.left
    }
    return root
}

// let newBst = new BST()
// newBst.insert(10)
// console.log(newBst)

module.exports = {
  findMin
};