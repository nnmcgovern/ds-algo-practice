function reverse(llist) {
  if (!llist || !llist.next) {
    return llist;
  }

  const newHead = reverse(llist.next);
  llist.next.next = llist;
  llist.next = null;

  return newHead;
}

// Time: O(n) where n is the number of node in the list
// Space: O(n) due to usage of the call stack
