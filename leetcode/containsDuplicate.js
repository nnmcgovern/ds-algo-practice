var containsDuplicate = function (nums) {
  const set = new Set(nums); // only unique values

  return set.size < nums.length;
};
