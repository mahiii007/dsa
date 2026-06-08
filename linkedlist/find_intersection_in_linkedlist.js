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
  let currA = headA;
  let currB = headB;

  let seen = new Set();

  while (currA) {
    seen.add(currA);
    currA = currA.next;
  }

  while (currB) {
    if (seen.has(currB)) {
      return currB;
    }
    currB = currB.next;
  }
};
