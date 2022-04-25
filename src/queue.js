const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
class Queue {
  constructor() {
    this.queue = {};
  }

  getUnderlyingList() {
    return this.queue;
  }

  enqueue(value) {
    if (Object.keys(this.queue).length == 0) {
      this.queue = new ListNode(value);
    } else if (Object.keys(this.queue).length > 0) {
      if (!this.queue.next) {
        this.queue.next = new ListNode(value);
      } else if (this.queue.next) {
        let current = this.queue;
        while (current.next) {
          current = current.next;
          if (!current.next) {
            current.next = new ListNode(value);
            break;
          }
        }
      }
    }
  }

  dequeue() {
    let top = this.queue.value;

    let current = this.queue;
    current.value = current.next.value;
    current.next = current.next.next;
    current = current.next;

    return top;
  }
}

module.exports = {
  Queue
};
