class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(value) {
    const newNode = new Node(value);

    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
      // ** or **
      // let temp = this.first;
      // this.first = newNode;
      // this.first.next = temp;
    }

    this.size++;
    return this.size;
  }

  pop() {
    if (!this.first) return null;

    let temp = this.first;

    if (this.size === 1) {
      this.last = null;
    }

    this.first = this.first.next;
    temp.next = null;
    this.size--;
    return temp.value;
  }
}

let stack = new Stack();
stack.push("first");
stack.push("second");
stack.push("third");
console.log(stack.pop());
console.log(stack.pop());
console.log(stack.pop());
console.log(stack);
