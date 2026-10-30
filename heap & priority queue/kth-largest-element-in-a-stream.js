/**
 * @param {number} k
 * @param {number[]} nums
 */
var KthLargest = function (k, nums) {
  this.k = k;
  this.pq = new MinPriorityQueue();
  for (let i = 0; i < nums.length; i++) {
    this.add(nums[i]);
  }
  return null;
};

/**
 * @param {number} val
 * @return {number}
 */
KthLargest.prototype.add = function (val) {
  this.pq.enqueue(val);
  if (this.pq.size() > this.k) {
    this.pq.dequeue();
  }

  return this.pq.front();
};

/**
 * Your KthLargest object will be instantiated and called as such:
 * var obj = new KthLargest(k, nums)
 * var param_1 = obj.add(val)
 */
