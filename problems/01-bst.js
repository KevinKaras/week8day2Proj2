class TreeNode {
  constructor(val) {
    this.val = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
    // Initialize an empty binary search tree
    constructor() {
        this.root = null;
    }

    // Insert a node into the binary search tree
    insert(val, currentNode=this.root) {

        if (currentNode === null) {
            this.root = new TreeNode(val)
            return
        }
        if (val < currentNode.val) {
            if (!currentNode.left) {
                currentNode.left = new TreeNode(val)
            } else {
                this.insert(val, currentNode.left)
            }     
        } else {
            if (!currentNode.right) {
                currentNode.right = new TreeNode(val)
            } else {
                this.insert(val, currentNode.right)
            }
        }
        // try implementing iterative solution (with while loop)     
    }

    // Perform a recursive search through the binary search tree
    searchRecur(val, currentNode=this.root) {
        if (currentNode === null) {
            return false
        }   else if (currentNode === val) {
            return true
        }
        if (currentNode > val) {
            if (!currentNode.left) {
                return false
            } else {
                this.searchRecur(val, currentNode.left)
            }
        } else {
            if (!currentNode.right) {
                return false;
            } else {
                this.searchRecur(val, currentNode.right) 
            }
        }

        // if (currentNode !== val && (!currentNode.left) && (!currentNode.right)) {
        //     return false
        // }
    }

    // Perform an iterative search through the binary search tree
    searchIter(val) {
        // Your code here
    }
}

module.exports = {
    TreeNode,
    BST
};