/**
 * @param {number[]} bills
 * @return {boolean}
 */
var lemonadeChange = function (bills) {
  // wallet[0] = Count of $5 bills.
  // wallet[1] = Count of $10 bills.
  let wallet = [0, 0];

  // Process each customer's bill one by one.
  for (let i = 0; i < bills.length; i++) {
    // Customer pays with $5.
    // No change is required, so store the $5 bill.
    if (bills[i] === 5) {
      ++wallet[0];

      // Customer pays with $10.
      // Give back $5 as change.
    } else if (bills[i] === 10) {
      ++wallet[1];
      --wallet[0];

      // Customer pays with $20.
      // We need to return $15 as change.
    } else {
      // Greedy choice: Prefer giving one $10 bill
      // and one $5 bill as change.
      if (wallet[1]) {
        --wallet[1];
        --wallet[0];

        // If no $10 bill is available,
        // give three $5 bills instead.
      } else {
        wallet[0] = wallet[0] - 3;
      }
    }

    // If we have a negative number of $5 bills,
    // it means we couldn't provide the required change.
    if (wallet[0] < 0) {
      return false;
    }
  }

  // Successfully provided change to every customer.
  return true;
};
