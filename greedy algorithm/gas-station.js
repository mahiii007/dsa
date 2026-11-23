/**
 * @param {number[]} gas
 * @param {number[]} cost
 * @return {number}
 */
var canCompleteCircuit = function (gas, cost) {
  // Stores the starting station index of our current candidate
  let ans = 0;

  // Tracks the remaining gas while testing the current candidate
  let currentGain = 0;

  // Tracks the total gas gained/lost across all stations
  // Used to determine whether completing the entire circuit is possible
  let totalGain = 0;

  for (let i = 0; i < gas.length; i++) {
    // Net gas gained at the current station
    // Positive means we gain gas, negative means we consume more than we gain
    let gain = gas[i] - cost[i];

    // Update the gas balance for the current candidate starting point
    currentGain = currentGain + gain;

    // Update the overall gas balance for the entire circuit
    totalGain = totalGain + gain;

    // If the current journey's gas balance becomes negative,
    // the current candidate cannot be a valid starting station
    if (currentGain < 0) {
      // Start testing from the next station
      ans = i + 1;

      // Reset gas balance because we are testing a new candidate
      currentGain = 0;
    }
  }

  // If total gas is less than total cost, completing the circuit is impossible
  // Otherwise, return the candidate starting station
  return totalGain < 0 ? -1 : ans;
};
