/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function (head) {
  let firsthalf = head;
  let slow = head; // mid of linkedlist
  let fast = head;
  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  let prev = null; // reversed secondhalf linkedlist [head of reversed linkedlist]
  let curr = slow;
  while (curr) {
    let temp = curr.next;
    curr.next = prev;
    prev = curr;
    curr = temp;
  }

  while (prev) {
    if (firsthalf.val !== prev.val) {
      return false;
    }
    prev = prev.next;
    firsthalf = firsthalf.next;
  }
  return true;
};
