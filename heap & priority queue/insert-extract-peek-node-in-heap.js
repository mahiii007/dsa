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

  extract() {
    if (this.heap.length < 1) return null;
    let lastIndex = this.heap.length - 1;
    let min = this.heap[0];
    this.heap[0] = this.heap[lastIndex];
    this.heap.pop();
    this.heapifyDown(0);
    return min;
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

  heapifyDown(i) {
    let left = this.getLeftChildIndex(i);
    let right = this.getRightChildIndex(i);
    let heapLength = this.heap.length;

    let smallest = i;

    if (left < heapLength && this.heap[left] < this.heap[smallest]) {
      smallest = left;
    }

    if (right < heapLength && this.heap[right] < this.heap[smallest]) {
      smallest = right;
    }

    if (smallest !== i) {
      [this.heap[smallest], this.heap[i]] = [this.heap[i], this.heap[smallest]];
      this.heapifyDown(smallest);
    }
  }

  peek() {
    return this.heap.length ? this.heap[0] : null;
  }
}

let heap = new Heap();
heap.insert(5);
heap.insert(20);
console.log(heap.peek());
heap.insert(4);
heap.insert(10);
console.log(heap.peek());

heap.insert(1);
heap.insert(0);
heap.extract();
console.log(heap.peek());

heap.extract();
console.log(heap.peek());

console.log(heap);
