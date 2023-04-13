const { Tree } = require('./binaryTree/tree.js');
// const { appendFileSync } = require('node:fs');

// const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
class BinarySearchTree {
  constructor() {
    this.tree = new Tree();
  }

  root() {
    return this.tree.root;
  }

  add(data) {
    //     appendFileSync('add.txt', `tree.add1(${data})
    // `, { flag: 'a' });
    this.tree.add(data);
  }

  has(data) {
    //     appendFileSync('has.txt', `console.log(tree.has(${data}))
    // `, { flag: 'a' });
    let has = this.tree.has(data);
    //     appendFileSync('hasValue.txt', `ishas(${data})=${has}
    // `, { flag: 'a' });
    return has;
  }

  find(data) {
    return this.tree.find(data);
  }

  remove(data) {
    //     appendFileSync('remove.txt', `tree.remove(${data})
    // `, { flag: 'a' });
    //     appendFileSync('hasRemoved.txt', `console.log(tree.has(${data}))
    // `, { flag: 'a' });
    this.tree.remove(data)
  }

  min() {
    return this.tree.min();
  }

  max() {
    return this.tree.max();
  }
}

module.exports = {
  BinarySearchTree
};
