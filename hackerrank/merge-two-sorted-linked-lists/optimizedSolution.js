function mergeLists(head1, head2) {
  if (!head1) return head2;
  if (!head2) return head1;

  let newList = { next: null };
  let current = newList;

  while (head1 && head2) {
    if (head1.data < head2.data) {
      current.next = head1;
      head1 = head1.next;
    } else {
      current.next = head2;
      head2 = head2.next;
    }
    current = current.next;
  }

  if (head1) current.next = head1;
  else if (head2) current.next = head2;

  return newList.next;
}

// Time: O(n + m), Space: O(1)
// same space-time complexity but code is simplified
