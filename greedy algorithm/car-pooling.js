/**
 * @param {number[][]} trips
 * @param {number} capacity
 * @return {boolean}
 */
var carPooling = function (trips, capacity) {
  // Difference array to track passenger changes at each location
  // Positive value = passengers picked up
  // Negative value = passengers dropped off
  let loc = Array(1000).fill(0);

  // Process every trip and record pickup/drop-off events
  for (let i = 0; i < trips.length; i++) {
    // Extract passengers, pickup location and drop-off location
    let [passengers, from, to] = trips[i];

    // Add passengers at the pickup location
    loc[from] = loc[from] + passengers;

    // Remove passengers at the drop-off location
    loc[to] = loc[to] - passengers;
  }

  // Tracks the total number of passengers currently in the car
  let totalPassengers = 0;

  // Calculate the prefix sum to know passengers at each location
  for (let i = 0; i <= 1000; i++) {
    // Apply passenger changes at the current location
    totalPassengers = totalPassengers + loc[i];

    // If passengers exceed car capacity, pooling is not possible
    if (totalPassengers > capacity) {
      return false;
    }
  }

  // All locations satisfy the capacity constraint
  return true;
};
