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
  if (!head) return false;
  let seen = new Set();
  let curr = head;
  while (curr) {
    if (seen.has(curr)) {
      return true;
    } else {
      seen.add(curr);
      curr = curr.next;
    }
  }
  return false;
};
