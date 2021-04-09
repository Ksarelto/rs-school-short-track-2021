const ListNode = require('../extensions/list-node');
/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 *
 */

class Queue {
  constructor() {
    this.head = undefined;
    this.tail = undefined;
    this.length = 0;
  }

  get size() {
    return this.length;
  }

  enqueue(element) {
    const node = new ListNode(element);

    if (this.head === undefined) {
      this.head = node;
      this.tail = node;
    } else {
      this.tail.next = node;
      this.tail = node;
    }
    this.length++;
    return this.head;
  }

  dequeue() {
    if (!this.head) {
      return null;
    }

    const newHead = this.head.value;

    if (this.head.next) {
      this.head = this.head.next;
    } else {
      this.head = undefined;
    }

    if (this.length <= 0) {
      this.length = 0;
    }
    this.length--;
    return newHead;
  }
}

module.exports = Queue;
