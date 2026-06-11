/**
 * @param {string} s
 * @return {number}
 */
var maxFreqSum = function (s) {
  const obj = {};
  const vowelSet = new Set(["a", "e", "i", "o", "u"]);
  let maxVowel = 0;
  let maxCons = 0;

  for (let i = 0; i < s.length; i++) {
    obj[s[i]] = (obj[s[i]] || 0) + 1;
  }

  for (const [key, val] of Object.entries(obj)) {
    if (vowelSet.has(key)) {
      maxVowel = Math.max(maxVowel, val);
    } else {
      maxCons = Math.max(maxCons, val);
    }
  }

  return maxVowel + maxCons;
};
