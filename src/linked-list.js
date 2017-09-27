const Node = require('./node');

class LinkedList {

    constructor() {
      this.length = 0;
      this._head = null;
      this._tail = null;
    }

    append(data) {
      var node = new Node(data)
      if (this.length == 0)
      {
        this._head = node;
        this._tail = node;
      }
      else
      {
        node.prev = this._tail;
        this._tail.next = node;
        this._tail = node;
      }
      this.length++;
      return this;
    }

    head() {
      return this._head != null ? this._head.data : null;
     }

    tail() {
      return this._tail != null ? this._tail.data : null;
    }

    at(index) {
      var i = 0;
      var currentNode = this._head;
      while (i != index)
      {
        currentNode = currentNode.next;
        i++;
      }
      return currentNode.data;
    }

    insertAt(index, data) {
      var i = 0;
      if (this._head == null)
      {
        this._head = new Node(data);
        this._tail = this._head;
      }
      else
      {
        var currentNode = this._head;
        while (i != index)
        {
          currentNode = currentNode.next;
          i++;
        }
        var node = new Node(data, currentNode.prev, currentNode);
        currentNode.prev.next = node;
        currentNode.prev = node;
      }
      return this;
    }

    isEmpty() {
      return this.length == 0 ? true : false;
    }

    clear() {
      this._head = null;
      this._tail = null;
      this.length = 0;
      return this;
    }

    deleteAt(index) {
      if (this.length == 1)
      {
        this.clear();
        return this;
      }
      var i = 0;
      var currentNode = this._head;
      while (i != index)
      {
        currentNode = currentNode.next;
        i++;
      }
      currentNode.prev.next = currentNode.next;
      currentNode.next.prev = currentNode.prev;
      return this;
    }

    reverse() {
      if (this.length == 1)
      {
        return this;
      }
      this._head = this._tail;
      var currentNode = this._head;
      var temp = null;
      while(currentNode.prev != null)
      {
        temp = currentNode.next;
        currentNode.next = currentNode.prev;
        currentNode.prev = temp;
        currentNode = currentNode.next
      }
      this._tail = currentNode;
      return this;
    }

    indexOf(data) {
      var currentNode = this._head;
      var i = 0;
      while (currentNode.data != data)
      {
        i++;
        currentNode = currentNode.next;
        if (i >= this.length) return -1;
      }
      return i;
    }
}
var list = new LinkedList();
console.log(list.length);
module.exports = LinkedList;
