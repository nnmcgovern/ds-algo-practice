/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let curr1 = l1;
  let curr2 = l2;
  let length = 0;
  let sum = 0;

  const helper = (node1, node2) => {
    if (node1.next || node2.next) {
      length++;
      helper(
        node1.next ?? { val: 0, next: null },
        node2.next ?? { val: 0, next: null }
      );
    }

    sum += node1.val * 10 ** length + node2.val * 10 ** length;
    length--;
  };

  helper(curr1, curr2);

  let sumString = sum.toString();
  let sumArr = sumString.split("");

  let recentNode = {
    val: sumArr.pop(),
    next: null,
  };

  let newHead = recentNode;

  while (sumArr.length > 0) {
    let val = sumArr.pop();

    let newNode = {
      val: val,
      next: null,
    };

    recentNode.next = newNode;
    recentNode = newNode;
  }

  return newHead;
};

// passes 1565 / 1568 test cases
