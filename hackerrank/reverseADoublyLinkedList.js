function reverse(llist) {
  // Write your code here
  if (!llist) return null;

  let currentNode = llist;

  while (currentNode) {
    let oldNext = currentNode.next;
    currentNode.next = currentNode.prev;
    currentNode.prev = oldNext;

    if (oldNext === null) return currentNode;

    currentNode = oldNext;
  }

  return currentNode;
}

// Time: O(n) where n is the number of node in the list
