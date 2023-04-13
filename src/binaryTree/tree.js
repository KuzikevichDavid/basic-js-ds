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
      return notFound(curNode, compareData, parent)
    } else {
      let res = comparePredicate(curNode, compareData);
      if (res === 0) {
        return getVal(curNode, parent);
      } else {
        let nextNode;
        if (res > 0) { nextNode = curNode.right }
        else if (res < 0) { nextNode = curNode.left }
        return this.goThrough(nextNode, compareData, comparePredicate, notFound, getVal, curNode);
      }
    }
  }

  has(data) {
    return this.goThrough(this.root, data, this.comparePredicate, () => false, () => true)
  }

  find(data) {
    return this.goThrough(this.root, data, this.comparePredicate, () => null);
  }

  add(data) {
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
      let flag = node === parent?.left;
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
}

const tree = new Tree();

// console.log(tree.find(8).data, 8);
// console.log(tree.find(2).data, 2);
// console.log(tree.find(32).data, 32);
// console.log(tree.find(14).data, 14);

// console.log(tree.max(), 32);
// console.log(tree.min(), 1);

// tree.add1(2)
// tree.add1(3)
// tree.add1(4)
// tree.add1(2)
// tree.add1(7)
// tree.add1(1)
// tree.add1(8)
// tree.add1(4)
// tree.add1(32)
// tree.add1(12)
// tree.add1(14)
// tree.add1(2)
// tree.add1(7)
// tree.add1(1)
// tree.add1(8)
// tree.add1(4)
// tree.add1(32)
// tree.add1(12)
// tree.add1(14)
// tree.add1(9)
// tree.add1(14)
// tree.add1(54)
// tree.add1(2)
// tree.add1(6)
// tree.add1(8)
// tree.add1(31)
// tree.add1(1)
// tree.add1(9)
// tree.add1(14)
// tree.add1(2)
// tree.add1(6)
// tree.add1(128)
// tree.add1(8)
// tree.add1(31)
// tree.add1(54)
// tree.add1(1)
// tree.add1(9)
// tree.add1(14)
// tree.add1(54)
// tree.add1(2)
// tree.add1(6)
// tree.add1(8)
// tree.add1(31)
// tree.add1(1)
// tree.add1(9)
// tree.add1(14)
// tree.add1(54)
// tree.add1(2)
// tree.add1(6)
// tree.add1(8)
// tree.add1(31)
// tree.add1(1)
// tree.add1(24)
// tree.add1(129)
// tree.add1(21)
// tree.add1(630)
// tree.add1(4)
// tree.add1(781)
// tree.add1(601)
// tree.add1(812)
// tree.add1(364)
// tree.add1(182)
// tree.add1(481)
// tree.add1(951)
// tree.add1(649)
// tree.add1(799)
// tree.add1(699)
// tree.add1(404)
// tree.add1(655)
// tree.add1(322)
// tree.add1(252)
// tree.add1(383)
// tree.add1(972)
// tree.add1(716)
// tree.add1(922)
// tree.add1(430)
// tree.add1(69)
// tree.add1(900)
// tree.add1(135)
// tree.add1(162)
// tree.add1(348)
// tree.add1(592)
// tree.add1(764)
// tree.add1(60)
// tree.add1(916)
// tree.add1(439)
// tree.add1(869)
// tree.add1(629)
// tree.add1(540)
// tree.add1(80)
// tree.add1(261)
// tree.add1(663)
// tree.add1(442)
// tree.add1(459)
// tree.add1(242)
// tree.add1(534)
// tree.add1(233)
// tree.add1(356)
// tree.add1(504)
// tree.add1(479)
// tree.add1(961)
// tree.add1(36)
// tree.add1(178)
// tree.add1(737)
// tree.add1(581)
// tree.add1(680)
// tree.add1(299)
// tree.add1(417)
// tree.add1(231)
// tree.add1(122)
// tree.add1(364)
// tree.add1(109)

// console.log(tree.has(54))
// console.log(tree.has(8))
// console.log(tree.has(7))
// console.log(tree.has(4))
// console.log(tree.has(14))
// console.log(tree.has(8))
// console.log(tree.has(9))
// console.log(tree.has(2))
// console.log(tree.has(6))
// console.log(tree.has(128))
// console.log(tree.has(31))
// console.log(tree.has(54))
// console.log(tree.has(1))
// console.log(tree.has(972))
// console.log(tree.has(716))
// console.log(tree.has(922))
// console.log(tree.has(430))
// console.log(tree.has(69))
// console.log(tree.has(900))
// console.log(tree.has(135))
// console.log(tree.has(162))
// console.log(tree.has(348))
// console.log(tree.has(592))
// console.log(tree.has(764))
// console.log(tree.has(60))
// console.log(tree.has(916))
// console.log(tree.has(439))
// console.log(tree.has(869))
// console.log(tree.has(629))
// console.log(tree.has(540))
// console.log(tree.has(80))
// console.log(tree.has(261))
// console.log(tree.has(663))
// console.log(tree.has(36))
// console.log(tree.has(122))
// console.log(tree.has(178))
// console.log(tree.has(242))
// console.log(tree.has(356))
// console.log(tree.has(364))
// console.log(tree.has(442))
// console.log(tree.has(504))
// console.log(tree.has(534))
// console.log(tree.has(680))
// console.log(tree.has(109))
// console.log(tree.has(231))
// console.log(tree.has(233))
// console.log(tree.has(299))
// console.log(tree.has(417))
// console.log(tree.has(459))
// console.log(tree.has(479))
// console.log(tree.has(581))

// console.log('remove');

// tree.remove(14)
// tree.remove(8)
// tree.remove(9)
// tree.remove(6)
// tree.remove(2)
// tree.remove(6)
// tree.remove(2)
// tree.remove(36)
// tree.remove(122)
// tree.remove(178)
// tree.remove(242)
// tree.remove(356)
// tree.remove(364)
// tree.remove(442)
// tree.remove(504)
// tree.remove(534)
// tree.remove(680)

// console.log(tree.has(14))
// console.log(tree.has(8))
// console.log(tree.has(9))
// console.log(tree.has(6))
// console.log(tree.has(2))
// console.log(tree.has(6))
// console.log(tree.has(2))
// console.log(tree.has(36))
// console.log(tree.has(122))
// console.log(tree.has(178))
// console.log(tree.has(242))
// console.log(tree.has(356))
// console.log(tree.has(364))
// console.log(tree.has(442))
// console.log(tree.has(504))
// console.log(tree.has(534))
// console.log(tree.has(680))

// console.log('check')

// console.log(tree.has(54))
// console.log(tree.has(8))
// console.log(tree.has(7))
// console.log(tree.has(4))
// console.log(tree.has(14))
// console.log(tree.has(8))
// console.log(tree.has(9))
// console.log(tree.has(2))
// console.log(tree.has(6))
// console.log(tree.has(128))
// console.log(tree.has(31))
// console.log(tree.has(54))
// console.log(tree.has(1))
// console.log(tree.has(972))
// console.log(tree.has(716))
// console.log(tree.has(922))
// console.log(tree.has(430))
// console.log(tree.has(69))
// console.log(tree.has(900))
// console.log(tree.has(135))
// console.log(tree.has(162))
// console.log(tree.has(348))
// console.log(tree.has(592))
// console.log(tree.has(764))
// console.log(tree.has(60))
// console.log(tree.has(916))
// console.log(tree.has(439))
// console.log(tree.has(869))
// console.log(tree.has(629))
// console.log(tree.has(540))
// console.log(tree.has(80))
// console.log(tree.has(261))
// console.log(tree.has(663))
// console.log(tree.has(36))
// console.log(tree.has(122))
// console.log(tree.has(178))
// console.log(tree.has(242))
// console.log(tree.has(356))
// console.log(tree.has(364))
// console.log(tree.has(442))
// console.log(tree.has(504))
// console.log(tree.has(534))
// console.log(tree.has(680))
// console.log(tree.has(109))
// console.log(tree.has(231))
// console.log(tree.has(233))
// console.log(tree.has(299))
// console.log(tree.has(417))
// console.log(tree.has(459))
// console.log(tree.has(479))
// console.log(tree.has(581))

module.exports = {
  Tree
};
