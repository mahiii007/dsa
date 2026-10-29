class PriorityQueue {
  constructor() {
    this.queue = [];
  }

  enqueue(value, priority) {
    this.queue.push({ value, priority });
    this.queue.sort((a, b) => b.priority - a.priority);
  }

  dequeue() {
    return this.queue.shift();
  }

  peek() {
    return this.queue.length ? this.queue[0] : null;
  }

  isEmpty() {
    return this.queue.length === 0;
  }
}

const pq = new PriorityQueue();
pq.enqueue("Fever", 1);
pq.enqueue("Accident", 5);
pq.enqueue("Headache", 3);

console.log(pq.dequeue()); // Accident (priority 5)
console.log(pq.dequeue()); // Headache (priority 3)
