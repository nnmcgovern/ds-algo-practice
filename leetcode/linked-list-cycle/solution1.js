/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function (head) {
  const map = new Map();
  let curr = head;

  while (curr) {
    if (!map.get(curr)) map.set(curr, 1);
    else return true;

    curr = curr.next;
  }

  return false;
};

// linked list may contain duplicate values, so entire node must be
// compared not just value
