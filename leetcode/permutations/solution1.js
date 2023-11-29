/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let result = [];

  const backtrack = (current) => {
    if (current.length === nums.length) {
      result.push(Array.from(current));
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (current.includes(nums[i])) continue;

      current.push(nums[i]);
      backtrack(current);

      current.pop();
    }
  };

  backtrack([]);
  return result;
};
