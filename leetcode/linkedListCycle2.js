/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var detectCycle = function (head) {
  const set = new Set();
  let currentNode = head;

  while (currentNode) {
    if (set.has(currentNode)) return currentNode;

    set.add(currentNode);
    currentNode = currentNode.next;
  }

  return null;
};
