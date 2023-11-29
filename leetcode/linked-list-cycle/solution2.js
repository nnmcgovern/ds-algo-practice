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
  const set = new Set();
  let curr = head;

  while (curr) {
    if (!set.has(curr)) set.add(curr);
    else return true;

    curr = curr.next;
  }

  return false;
};

// Time: O(n)
// Space: O(n)
