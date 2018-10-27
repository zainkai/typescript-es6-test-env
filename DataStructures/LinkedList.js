// Double linked list.
// https://hackernoon.com/the-little-guide-of-linked-list-in-javascript-9daf89b63b54

export class Node {
  constructor(value, next, prev) {
    this.value = value
    this.next = next
    this.prev = prev
  }

  setNext(node) { this.next = node }
  setPrev(node) { this.prev = node }
  setValue(value) { this.value = value }
}

export class LinkedList {
  constructor(head, tail) {
    this.head = head || null
    this.tail = tail || null
  }

  addHead(value) {
    const newHead = new Node(value, this.head, null)
    if (this.head) {
      this.head.prev = newHead
    } else {
      this.tail = newHead // only one node in list.
    }
    this.head = newHead
  }

  removeHead() {
    if (!this.head) return null
    this.head = this.head.next // garbage collector will clean old head.

    if (this.head) {
      this.head.prev = null
    } else {
      this.tail = null
    }
  }

  addTail(value) {
    const newTail = new Node(value, null, this.tail)
    if (this.tail) {
      this.tail.next = newTail
    } else {
      this.head = newTail // only on node in list.
    }
    this.tail = newTail
  }

  removeTail() {
    if (!this.tail) return null
    this.tail = this.tail.prev // garbage collector will clean old tail.

    if (this.tail) {
      this.tail.next = null
    } else {
      this.head = null
    }
  }

  // if finding an object search off of key
  find(value) {
    let currNode = this.head
    while (currNode) {
      if (currNode.value === value) {
        return currNode
      }
      currNode = currNode.next
    }
    return null
  }


  removeNode(node) {
    const prevNode = node.prev
    const nextNode = node.next

    if (prevNode && nextNode) {
      prevNode.next = nextNode
      nextNode.prev = prevNode
    } else if (prevNode) { // tail remove
      this.removeTail()
    } else if (nextNode) {
      this.removeHead()
    } else { // dangerous
      this.head = null
      this.tail = null
    }
  }
}