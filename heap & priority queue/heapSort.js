function heapSort(arr) {
  let n = arr.length;

  // Step 1: Build a max heap.
  // A max heap ensures the largest element is at index 0.
  for (let i = n - 1; i >= 0; i--) {
    heapifyDown(arr, i, n);
  }

  // We can start from Math.floor(n / 2) - 1 instead,
  // because all nodes after this index are leaf nodes
  // and do not need heapification.
  // for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
  //     heapifyDown(arr, i, n);
  // }

  // Step 2: Extract the largest element one by one.
  for (let i = n - 1; i > 0; i--) {
    // The root contains the largest element.
    // Swap it with the last element in the current heap.
    [arr[0], arr[i]] = [arr[i], arr[0]];

    // The element at index i is now in its final sorted position.
    // Reduce the heap size to i and restore the max heap property.
    heapifyDown(arr, 0, i);
  }

  // Return the array sorted in ascending order
  return arr;
}

function heapifyDown(arr, index, arrLength) {
  // Assume the current node is the largest
  let largest = index;

  // Calculate the indices of the current node's children
  let left = 2 * index + 1;
  let right = 2 * index + 2;

  // If the left child exists and is larger than the current largest,
  // update largest to the left child's index
  if (left < arrLength && arr[left] > arr[largest]) {
    largest = left;
  }

  // If the right child exists and is larger than the current largest,
  // update largest to the right child's index
  if (right < arrLength && arr[right] > arr[largest]) {
    largest = right;
  }

  // If a child is larger than the current node, swap them
  if (largest !== index) {
    [arr[index], arr[largest]] = [arr[largest], arr[index]];

    // Continue heapifying downward because the swapped node
    // might violate the max heap property at its new position
    heapifyDown(arr, largest, arrLength);
  }
}

let unsortedArr = [1, 4, 10, 5, 3, 7, 9, 2];
const res = heapSort(unsortedArr);
console.log(res); // [1, 2, 3, 4, 5, 7, 9, 10]
