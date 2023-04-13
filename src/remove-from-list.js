/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface
 * class ListNode {
 *   constructor(x) {
 *     this.value = x;
 *     this.next = null;
 *   }
 * }
 */
function removeKFromList(cur, k, prev = null) {
  if (cur) {
    if (cur.value === k) {
      if (prev) {
        return removeKFromList(cur.next, k, prev);
      }
      else return removeKFromList(cur.next, k)
    } else {
      cur.next = removeKFromList(cur.next, k, cur);
    }
    return cur;
  }
  return null;
}

module.exports = {
  removeKFromList
};
