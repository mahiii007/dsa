/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var swapPairs = function (head) {
  if (!head || !head.next) return head;
  let sentinel = new ListNode();
  sentinel.next = head;

  let prev = sentinel;
  let curr = head;
  let next = head.next;

  while (curr && curr.next) {
    prev.next = next;
    curr.next = next.next;
    next.next = curr;

    prev = curr;
    curr = prev.next;
    next = curr && curr.next;
  }

  return sentinel.next;
};
