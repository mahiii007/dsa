/**
 * @param {string} jewels
 * @param {string} stones
 * @return {number}
 */
var numJewelsInStones = function (jewels, stones) {
  let count = 0;
  //   time - o(s*j) space - o(1)
  // for(let i = 0; i< jewels.length; i++) {

  //     for(let j= 0; j< stones.length; j++) {
  //         if(jewels[i] === stones[j]) {
  //             count++;
  //         }
  //      }
  // }
  // return count;
  let obj = {};
  for (let j = 0; j < stones.length; j++) {
    obj[stones[j]] = (obj[stones[j]] || 0) + 1;
  }

  for (let i = 0; i < jewels.length; i++) {
    count = count + (obj[jewels[i]] || 0);
  }

  return count;
};
