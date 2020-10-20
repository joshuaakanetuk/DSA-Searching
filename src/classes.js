class _Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
class Queue {
  constructor() {
    this.first = null;
    this.last = null;
  }
  peek() {
    if (this.first === null) {
      this.first = null;
    }
    return this.first;
  }
  isEmpty() {
    if (this.first === null) {
      return true;
    } else {
      return false;
    }
  }
  display() {
    let print = "";
    if (this.isEmpty() || this.first === null) {
      return null;
    }
    let currNode = this.first;
    if (currNode.next === null) {
      return currNode.value;
    }
    while (currNode !== null) {
      print = print + currNode.value + " -> ";
      currNode = currNode.next;
    }

    return print;
  }
  enqueue(data) {
    const node = new _Node(data);

    if (this.first === null) {
      this.first = node;
    }

    if (this.last) {
      this.last.next = node;
    }
    this.last = node;
  }
  dequeue() {
    if (this.first === null) {
      return;
    }
    const node = this.first;
    this.first = this.first.next;
    //if this is the last item in the queue
    if (node === this.last) {
      this.last = null;
    }
    return node.value;
  }
}
class BinarySearchTree {
  constructor(key = null, value = null, parent = null) {
    this.key = key;
    this.value = value;
    this.parent = parent;
    this.left = null;
    this.right = null;
  }
  insert(key, value) {
    if (this.key == null) {
      this.key = key;
      this.value = value;
    }
    //
    else if (key < this.key) {
      if (this.left === null) {
        this.left = new BinarySearchTree(key, value, this);
      } else {
        this.left.insert(key, value);
      }
    } else {
      if (this.right == null) {
        this.right = new BinarySearchTree(key, value, this);
      } else {
        this.right.insert(key, value);
      }
    }
  }
  find(key) {
    if (this.key == key) {
      return this.value;
    } else if (key < this.key && this.left) {
      return this.left.find(key);
    } else if (key > this.key && this.right) {
      return this.right.find(key);
    } else {
      throw new Error("Key Error");
    }
  }
  remove(key) {
    if (this.key == key) {
      if (this.left && this.right) {
        const successor = this.right._findMin();
        this.key = successor.key;
        this.value = successor.value;
        successor.remove(successor.key);
      } else if (this.left) {
        this._replaceWith(this.left);
      } else if (this.right) {
        this._replaceWith(this.right);
      } else {
        this._replaceWith(null);
      }
    } else if (key < this.key && this.left) {
      this.left.remove(key);
    } else if (key > this.key && this.right) {
      this.right.remove(key);
    } else {
      throw new Error("Key Error");
    }
  }
  // depth first search (in-order[L - Curr - R])
  inOrder(values = []) {
    if (this.left) {
      values = this.left.inOrder(values);
    }
    values.push(this.value);
    if (this.right) {
      values = this.right.inOrder(values);
    }
    return values;
  }
  // depth first search (pre-order[Curr - L - R])
  preOrder(values = []) {
    values.push(this.value);
    if (this.left) {
      values = this.left.preOrder(values);
    }
    if (this.right) {
      values = this.right.preOrder(values);
    }
    return values;
  }
  // depth first search (post-order[L - R - Curr])
  postOrder(values = []) {
    if (this.left) {
      values = this.left.postOrder(values);
    }
    if (this.right) {
      values = this.right.postOrder(values);
    }
    values.push(this.value);
    return values;
  }
  _replaceWith(node) {
    if (this.parent) {
      if (this == this.parent.left) {
        this.parent.left = node;
      } else if (this == this.parent.right) {
        this.parent.right = node;
      }

      if (node) {
        node.parent = this.parent;
      }
    } else {
      if (node) {
        this.key = node.key;
        this.value = node.value;
        this.left = node.left;
        this.right = node.right;
      } else {
        this.key = null;
        this.value = null;
        this.left = null;
        this.right = null;
      }
    }
  }

  _findMin() {
    if (!this.left) {
      return this;
    }
    return this.left._findMin();
  }
}

module.exports = {
  BinarySearchTree, Queue
};
