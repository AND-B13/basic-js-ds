const { NotImplementedError } = require('../extensions/index.js');
const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class BinarySearchTree {
  constructor() {
    this.branch = null;
  }

  root() {
    return this.branch;
  }

  add(data) {
    const newNode = new Node(data);
  
    if (this.branch === null) {
      this.branch = newNode;
    } else {
      this.insertNode(this.branch, newNode);
    }
  }

  insertNode(node, newNode) {
    if (newNode.data < node.data) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.insertNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.insertNode(node.right, newNode);
      }
    }
  }

  has(data) {
    return this.searchNode(this.branch, data) !== null;
  }
  
  searchNode(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      return this.searchNode(node.left, data);
    } else if (data > node.data) {
      return this.searchNode(node.right, data);
    } else {
      return node;
    }
  }

  find(data) {
    return this.searchNode(this.branch, data);
  }

  remove(data) {
    this.branch = this.removeNode(this.branch, data);
  }
  
  removeNode(node, data) {
    if (node === null) {
      return null;
    } else if (data < node.data) {
      node.left = this.removeNode(node.left, data);
      return node;
    } else if (data > node.data) {
      node.right = this.removeNode(node.right, data);
      return node;
    } else {
      if (node.left === null && node.right === null) {
        return null;
      } else if (node.left === null) {
        return node.right;
      } else if (node.right === null) {
        return node.left;
      } else {
        const minRightNode = this.findMinNode(node.right);
        node.data = minRightNode.data;
        node.right = this.removeNode(node.right, minRightNode.data);
        return node;
      }
    }
  }
  
  findMinNode(node) {
    if (node.left === null) {
      return node;
    } else {
      return this.findMinNode(node.left);
    }
  }

  min() {
    if (this.branch === null) {
      return null;
    }
  
    let currentBranch = this.branch;

    while (currentBranch.left !== null) {
      currentBranch = currentBranch.left;
    }
  
    return currentBranch.data;
  }

  max() {
    if (this.branch === null) {
      return null;
    }
  
    let currentBranch = this.branch;

    while (currentBranch.right !== null) {
      currentBranch = currentBranch.right;
    }
  
    return currentBranch.data;
  }
}

module.exports = {
  BinarySearchTree
};