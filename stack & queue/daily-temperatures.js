/**
 * @param {number[]} temperatures
 * @return {number[]}
 */
var dailyTemperatures = function (temperatures) {
  let waitingDays = [];
  let stack = [];

  let n = temperatures.length;
  stack.push(temperatures.length - 1); //storing index
  waitingDays[temperatures.length - 1] = 0;

  for (let i = n - 2; i >= 0; i--) {
    while (stack.length) {
      const top = stack[stack.length - 1]; // return index
      if (temperatures[i] >= temperatures[top]) {
        stack.pop();
      } else {
        waitingDays[i] = top - i;
        break;
      }
    }
    if (stack.length === 0) {
      waitingDays[i] = 0;
    }
    stack.push(i); //storing index
  }

  return waitingDays;
};
x;
