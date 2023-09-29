function mergeLists(head1, head2) {
  if (!head1) return head2;
  if (!head2) return head1;

  let currNode1 = head1;
  let currNode2 = head2;
  let newList = null;
  // let currNew = null;

  let data1 = currNode1.data;
  let data2 = currNode2.data;

  if (data1 < data2) {
    newList = currNode1;
    currNode1 = currNode1.next;
  } else if (data2 < data1) {
    newList = currNode2;
    currNode1 = currNode2.next;
  } else {
    newList = currNode1;
    currNode1 = currNode1.next;
  }

  let currNew = newList;

  while (currNode1 && currNode2) {
    data1 = currNode1.data;
    data2 = currNode2.data;

    if (data1 < data2) {
      currNew.next = currNode1;
      currNew = currNew.next;
      currNode1 = currNode1.next;
    } else if (data2 < data1) {
      currNew.next = currNode2;
      currNew = currNew.next;
      currNode2 = currNode2.next;
    } else {
      currNew.next = currNode1;
      currNew = currNew.next;
      currNode1 = currNode1.next;
    }
  }

  while (currNode1) {
    currNew.next = currNode1;
    currNew = currNew.next;
    currNode1 = currNode1.next;
  }

  while (currNode2) {
    currNew.next = currNode2;
    currNew = currNew.next;
    currNode2 = currNode2.next;
  }

  return newList;
}
