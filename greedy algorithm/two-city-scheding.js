
/**
 * @param {number[][]} costs
 * @return {number}
 */
var twoCitySchedCost = function(costs) {

    let ans = 0;

    // Sort based on the difference between city B and city A costs
    // People with a higher preference for city A come first
    costs.sort((a, b) => (b[1] - b[0]) - (a[1] - a[0]));

    // Exactly half of the people must go to each city
    let n = costs.length / 2;

    // Send the first half to city A
    // Send the remaining half to city B
    for (let i = 0; i < n; i++) {

        // Add cost of sending person i to city A
        ans = ans + costs[i][0];

        // Add cost of sending person i+n to city B
        ans = ans + costs[i + n][1];
    }

    // Return minimum total cost
    return ans;
};
