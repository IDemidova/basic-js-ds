const { NotImplementedError } = require('../extensions/index.js');

//const { ListNode } = require('../extensions/list-node.js');

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
function removeKFromList(list, num) {
  let current = list;
  if (current.value == num) {
    current.value = current.next.value;
    current.next = current.next.next;
    current = current.next;
  }
  while (current.next) {
    current = current.next;
    if (current.value == num) {
      if (current.next && current.next.value != num) {
        current.value = current.next.value;
        current.next = current.next.next;
      }
      if (current.next && current.next.value == num) {
        current.value = current.next.next.value;
        current.next = current.next.next.next;
      }
    }
    if (current.value != num) {
      if (current.next && current.next.value == num) {
        if (!current.next.next) {
          current.next = null;
        }
      }
    }
  }
  return list;
}

module.exports = {
  removeKFromList
};

