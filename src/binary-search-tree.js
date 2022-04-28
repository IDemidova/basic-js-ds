const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.rootNode = null;
  }

  root() {
    return this.rootNode;
  }

  add(data) {
    this.rootNode = addNode(this.rootNode, data);

    function addNode(node, data) {
      if (!node) {
        return new Node(data);
      }

      if (data == node.data) {
        return node;
      }

      if (data > node.data) {
        node.right = addNode(node.right, data);
        return node;
      }

      if (data < node.data) {
        node.left = addNode(node.left, data);
        return node;
      }
    }
  }

  has(data) {
    return checkNode(this.rootNode, data);

    function checkNode(node, data) {
      if (!node) {
        return false;
      }

      if (data == node.data) {
        return true;
      }

      if (data > node.data) {
        return checkNode(node.right, data);
      }

      if (data < node.data) {
        return checkNode(node.left, data);
      }
    }
  }

  find(data) {
    return findNode(this.rootNode, data);

    function findNode(node, data) {
      if (!node) {
        return null;
      }

      if (data == node.data) {
        return node;
      }

      if (data > node.data) {
        return findNode(node.right, data);
      }

      if (data < node.data) {
        return findNode(node.left, data);
      }
    }
  }

  remove(data) {
    this.rootNode = removeNode(this.rootNode, data);

    function removeNode(node, data) {
      if (!node) {
        return null;
      }

      if (data > node.data) {
        node.right = removeNode(node.right, data);
        return node;
      }

      if (data < node.data) {
        node.left = removeNode(node.left, data);
        return node;
      }

      if (data == node.data) {
        if (!node.right && !node.left) {
          return null;
        }

        if (!node.right) {
          node = node.left;
          return node;
        }

        if (!node.left) {
          node = node.right;
          return node;
        }

        if (node.right && node.left) {
          let maxLeftNode = node.left;
          while (maxLeftNode.right) {
            maxLeftNode = maxLeftNode.right;
          }
          node.data = maxLeftNode.data;
          node.left = removeNode(node.left, maxLeftNode.data);
          return node;
        }
      }
    }
  }

  min() {
    if (!this.rootNode) {
      return null;
    }

    let rootNode = this.rootNode;

    while (rootNode.left) {
      rootNode = rootNode.left;
    }

    let minValue = rootNode.data;

    return minValue;
  }

  max() {
    if (!this.rootNode) {
      return null;
    }

    let rootNode = this.rootNode;

    while (rootNode.right) {
      rootNode = rootNode.right;
    }

    let maxValue = rootNode.data;

    return maxValue;
  }
}

module.exports = {
  BinarySearchTree
};