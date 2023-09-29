// Insert a node at a specific position in a linked list

function insertNodeAtPosition(llist, data, position) {
  // Write your code here
  if (!llist) {
    return {
      data: data,
      next: null,
    };
  }

  if (position === 0) {
    return {
      data: data,
      next: llist,
    };
  }

  // find node that will be ahead of node to be inserted
  // set that nodes next to new node
  // new nodes next will be following node

  let newNode = {
    data: data,
    next: null,
  };

  let currPos = 1;
  let currNode = llist;

  while (currNode) {
    if (currPos === position) {
      let prevNode = currNode;
      let nextNode = prevNode.next;
      prevNode.next = newNode;
      newNode.next = nextNode;
      break;
    }

    currPos++;
    currNode = currNode.next;
  }

  return llist;
}

// Time: O(n), Space: O(1)
