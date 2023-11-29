/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var permute = function (nums) {
  let result = [];
  let used = new Array(nums.length).fill(false);

  const backtrack = (current) => {
    if (current.length === nums.length) {
      result.push(Array.from(current));
      return;
    }

    for (let i = 0; i < nums.length; i++) {
      if (used[i]) continue;

      current.push(nums[i]);
      used[i] = true;
      backtrack(current);

      used[i] = false;
      current.pop();
    }
  };

  backtrack([]);
  return result;
};
