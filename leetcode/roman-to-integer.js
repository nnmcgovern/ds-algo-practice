/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function (s) {
  let num = 0;
  let values = {
    I: 1,
    V: 5,
    X: 10,
    L: 50,
    C: 100,
    D: 500,
    M: 1000,
  };

  for (let i = 0; i < s.length - 1; i++) {
    let currentVal = values[s[i]];
    let nextVal = values[s[i + 1]];

    if (currentVal >= nextVal) {
      num += currentVal;
    } else {
      num -= currentVal;
    }
  }

  num += values[s[s.length - 1]];

  return num;
};
