/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function (head, n) {
  let sentinelNode = new ListNode();
  sentinelNode.next = head;
  let first = sentinelNode;

  for (let i = 0; i < n; i++) {
    first = first.next;
  }

  let second = sentinelNode;
  while (first.next) {
    second = second.next;
    first = first.next;
  }

  second.next = second.next.next;

  return sentinelNode.next;
};
