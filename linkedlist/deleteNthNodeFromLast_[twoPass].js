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
  let length = 0;
  while (head) {
    length++;
    head = head.next;
  }

  let positionToDelete = length - n;
  let nodeToDelete = sentinelNode;

  for (let i = 0; i < positionToDelete; i++) {
    nodeToDelete = nodeToDelete.next;
  }

  nodeToDelete.next = nodeToDelete.next.next;

  return sentinelNode.next;
};
