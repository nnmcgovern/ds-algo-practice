function reverse(node) {
  if (!node || !node.next) {
    return node;
  }

  const newHead = reverse(node.next);
  node.next.next = node;
  node.next = null;

  return newHead;
}

// Time: O(n) where n is the number of node in the list
// Space: O(n) due to usage of the call stack
