class PriorityQueue {
  constructor() {
    this.heap = [];
  }

  enqueue(value, priority) {
    this.heap.push({ value, priority });
    let lastIndex = this.heap.length - 1;
    this.heapifyUp(lastIndex);
  }

  heapifyUp(index) {
    while (index > 0) {
      let parentIndex = Math.floor(index / 2);
      if (this.heap[index].priority > this.heap[parentIndex].priority) {
        [this.heap[parentIndex], this.heap[index]] = [
          this.heap[index],
          this.heap[parentIndex],
        ];
        index = parentIndex;
      } else {
        break;
      }
    }
  }

  dequeue() {
    let lastIndex = this.heap.length - 1;
    [this.heap[0], this.heap[lastIndex]] = [this.heap[lastIndex], this.heap[0]];
    let lastElem = this.heap.pop();
    this.heapifyDown(0);
    return lastElem;
  }

  heapifyDown(index) {
    let left = 2 * index + 1;
    let right = 2 * index + 2;

    let largest = index;

    if (
      left < this.heap.length &&
      this.heap[left].priority > this.heap[largest].priority
    ) {
      largest = left;
    }

    if (
      right < this.heap.length &&
      this.heap[right].priority > this.heap[largest].priority
    ) {
      largest = right;
    }

    if (largest !== index) {
      [this.heap[index], this.heap[largest]] = [
        this.heap[largest],
        this.heap[index],
      ];
      this.heapifyDown(largest);
    }
  }

  peek() {
    return this.heap.length ? this.heap[0] : null;
  }

  isEmpty() {
    return this.heap.length === 0;
  }
}

const pq = new PriorityQueue();
pq.enqueue("Fever", 1);
pq.enqueue("Accident", 5);
pq.enqueue("Headache", 3);

console.log(pq.dequeue()); // Accident (priority 5)
console.log(pq.dequeue()); // Headache (priority 3)
