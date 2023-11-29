/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function (digits) {
  if (digits.length === 0) return [];

  let map = new Map();
  let result = [];

  map.set("2", "abc");
  map.set("3", "def");
  map.set("4", "ghi");
  map.set("5", "jkl");
  map.set("6", "mno");
  map.set("7", "pqrs");
  map.set("8", "tuv");
  map.set("9", "wxyz");

  const backtrack = (idx, comb) => {
    if (idx === digits.length) result.push(comb);
    else {
      for (const letter of map.get(digits[idx])) {
        backtrack(idx + 1, comb + letter);
      }
    }
  };

  backtrack(0, "");
  return result;
};
