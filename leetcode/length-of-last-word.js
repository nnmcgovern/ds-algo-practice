/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function (s) {
  let string = s.trim();
  let array = string.split(" ");
  return array[array.length - 1].length;
};
