const { Node } = require('../extensions/list-tree.js');

class BinarySearchTree {
  constructor() {
    this.treeRoot = null;
  }

  root() {
    return this.treeRoot;
  }

  add(data) {
    const newNode = new Node(data);
  
    if (this.treeRoot === null) {
      this.treeRoot = newNode;
    } else {
      this.insertNode(this.treeRoot, newNode);
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
    return this.searchNode(this.treeRoot, data) !== null;
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
    return this.searchNode(this.treeRoot, data);
  }

  remove(data) {
    this.treeRoot = this.removeNode(this.treeRoot, data);
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
    if (this.treeRoot === null) {
      return null;
    }
  
    let currentNode = this.treeRoot;

    while (currentNode.left !== null) {
      currentNode = currentNode.left;
    }
  
    return currentNode.data;
  }

  max() {
    if (this.treeRoot === null) {
      return null;
    }
  
    let currentNode = this.treeRoot;
    
    while (currentNode.right !== null) {
      currentNode = currentNode.right;
    }
  
    return currentNode.data;
  }
}

module.exports = {
  BinarySearchTree
};