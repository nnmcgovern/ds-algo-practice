function reverse(llist) {
  // Write your code here
  if (!llist) return null;

  let currentNode = llist;

  while (currentNode.next) {
    let oldNext = currentNode.next;
    currentNode.next = currentNode.prev;
    currentNode.prev = oldNext;
    currentNode = oldNext;
  }

  // currentNode is last node (new head)
  currentNode.next = currentNode.prev;
  currentNode.prev = null;

  return currentNode;
}

// Time: O(n) where n is the number of nodes in the list
