// Write a function that takes in the root of a
// binary search tree and returns the height.
// You may use your BST implementation to test this out.
function getHeight(root) {
  let counter = 0;
  let currentNode = root
  if (!root) {
    return -1;
  }
  
  while (currentNode.left || currentNode.right) {
    if (currentNode.left) {
      counter++;
      currentNode = currentNode.left
    }
    if (currentNode.right) {
      counter++;
      currentNode = currentNode.right
    }
  }
  return counter
}


module.exports = {
  getHeight
};