class TreeElem {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }

}

class Tree {
  constructor() {
    this.root = null;
  }

  createNode(node, data) {
    let newNode = new TreeElem(data);
    if (node.data - data > 0) {
      node.left = newNode;
    } else node.right = newNode;
    return newNode;
  }

  comparePredicate(node, data) {
    return data - node.data;
  }

  getVal(node) {
    return node;
  }

  goThrough(curNode, compareData, comparePredicate = this.comparePredicate, notFound = this.createNode, getVal = this.getVal, parent = null) {
    if (!curNode) {
      return notFound(curNode, compareData, parent)//(curNode = new TreeElem(compareData));
    } else {
      let res = comparePredicate(curNode, compareData);
      let node;
      if (res > 0) { node = curNode.right }
      else if (res < 0) { node = curNode.left }
      else {
        return getVal(curNode, parent);
      }
      return this.goThrough(node, compareData, comparePredicate, notFound, getVal, curNode);
    }
  }

  has(data) {
    return this.goThrough(this.root, data, this.comparePredicate, () => false) ? true : false;
  }

  find(data) {
    return this.goThrough(this.root, data, this.comparePredicate, () => null);
  }

  add1(data) {
    if (!this.root) {
      this.root = new TreeElem(data);
    }
    return this.goThrough(this.root, data, this.comparePredicate, (n, d, p) => this.createNode(p, d));
  }

  minMax(compereRes) {
    return this.goThrough(this.root, null, () => compereRes, (c, d, p) => p.data)
  }

  min() {
    return this.minMax(-1);
  }
  max() {
    return this.minMax(1);
  }

  remove(data) {
    if (this.root.data === data) {
      if (!this.root.left) {
        this.root = this.root.right;
        return;
      }
      if (!this.root.right) {
        this.root = this.root.left;
        return;
      }
      let right = this.root.right;
      this.root = this.root.left;
      let max = this.goThrough(this.root, null, () => 1, (n, d, p) => p, () => { });
      max.right = right;
      return;
    }
    return this.goThrough(this.root, data, this.comparePredicate, () => { }, (node, parent) => {
      let flag = node === parent?.left//(parent?.left ? parent?.left : node);
      let newSubnode;
      if (flag) {
        if (node.right) {
          newSubnode = this.goThrough(node.right, null, () => -1, (n, d, p) => p, () => { }, node);
        } else {
          parent.left = node.left;
          return;
        }
        parent.left = node.right;
        newSubnode.left = node.left;
      } else {
        if (node.left) {
          newSubnode = this.goThrough(node.right, null, () => 1, (n, d, p) => p, () => { }, node);
        } else {
          parent.right = node.right;
          return;
        }
        parent.right = node.left;
        newSubnode.right = node.right;
      }
    });
  }

  add(data) {
    let node = new TreeElem(data);
    if (!this.root) {
      this.root = node;
    } else {
      let cur = this.root;
      while (true) {
        if (cur.data > node.data) {
          if (!cur.left) {
            cur.left = node;
          } else {
            cur = cur.left;
            continue;
          }
        } else {
          if (!cur.right) {
            cur.right = node;
          } else {
            cur = cur.right;
            continue;
          }
        }
      }
    }
  }
}

const tree = new Tree();

// console.log(tree.find(8).data, 8);
// console.log(tree.find(2).data, 2);
// console.log(tree.find(32).data, 32);
// console.log(tree.find(14).data, 14);

// console.log(tree.max(), 32);
// console.log(tree.min(), 1);




module.exports = {
  Tree
};
