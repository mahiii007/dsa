class Heap {
  constructor() {
    this.heap = [];
  }

  getLeftChildIndex(i) {
    return 2 * i + 1;
  }

  getRightChildIndex(i) {
    return 2 * i + 2;
  }

  getParentIndex(i) {
    return Math.floor((i - 1) / 2);
  }

  insert(val) {
    this.heap.push(val);
    let newNodeIndex = this.heap.length - 1;
    this.heapifyUp(newNodeIndex);
  }

  heapifyUp(i) {
    while (i > 0) {
      let parentIdx = this.getParentIndex(i);
      let currentVal = this.heap[i];
      let parentVal = this.heap[parentIdx];

      if (currentVal < parentVal) {
        this.heap[parentIdx] = currentVal;
        this.heap[i] = parentVal;
        i = parentIdx;
      } else {
        break;
      }
    }
  }
}

let heap = new Heap();
heap.insert(2);
heap.insert(5);
heap.insert(8);
heap.insert(10);
heap.insert(1);

console.log(heap);
