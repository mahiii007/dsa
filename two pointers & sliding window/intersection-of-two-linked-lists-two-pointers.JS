/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */
var getIntersectionNode = function (headA, headB) {
  let first = headA;
  let second = headB;

  // Traverse both linked lists simultaneously.
  // When a pointer reaches the end of its list,
  // move it to the head of the other list.
  while (first !== second) {
    // If first reaches the end of List A,
    // start again from the head of List B.
    first = first === null ? headB : first.next;

    // If second reaches the end of List B,
    // start again from the head of List A.
    second = second === null ? headA : second.next;
  }

  // Both pointers will meet at the intersection node.
  // If there is no intersection, both will become null.
  return first;
};
