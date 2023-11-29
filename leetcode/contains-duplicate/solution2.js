/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const obj = {};

  for (const num of nums) {
    if (obj[num]) return true;
    else obj[num] = 1;
  }

  return false;
};

// Time: O(n)
// Space: O(n)
