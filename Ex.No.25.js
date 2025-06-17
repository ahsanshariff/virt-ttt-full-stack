class ListNode {
  constructor(value) {
    this.value = value;
    this.next = null;
  }
}

const findMiddle = (head) => {
  let slow = head;
  let fast = head;

  while (fast && fast.next) {
    slow = slow.next;
    fast = fast.next.next;
  }

  return slow ? slow.value : null; // return middle node's value
};
