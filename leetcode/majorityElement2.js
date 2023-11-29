/**
 * @param {number[]} nums
 * @return {number[]}
 */
var majorityElement = function (nums) {
  let map = new Map();
  let result = new Set();

  for (const num of nums) {
    if (!map.get(num)) map.set(num, 1);
    else map.set(num, map.get(num) + 1);

    if (map.get(num) > nums.length / 3) result.add(num);
  }

  return Array.from(result);
};
