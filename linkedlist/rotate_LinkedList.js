/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var rotateRight = function (head, k) {
  if (!head || !head.next) return head;
  let length = 0;
  let curr = head;
  let slow = head;
  let fast = head;
  while (curr) {
    length++;
    curr = curr.next;
  }

  k = k % length;

  for (let i = 0; i < k; i++) {
    fast = fast.next;
  }

  while (fast.next) {
    fast = fast.next;
    slow = slow.next;
  }

  fast.next = head;

  const newHead = slow.next;
  slow.next = null;

  return newHead;
};
