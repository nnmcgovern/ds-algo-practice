/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function (nums) {
  const set = new Set(nums); // only unique values

  return set.size < nums.length;
};

// Time: O(n) [to create new Set]
// Space: O(n) [worst-case set is the same length of nums]
