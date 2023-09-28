/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
  if (numRows === 1) return s;

  let zigzag = "";
  let inc = false;
  let j = 0;
  const rows = [];

  for (let i = 0; i < numRows; i++) {
    rows.push([]);
  }

  for (let i = 0; i < s.length; i++) {
    if (j === numRows - 1 || j === 0) inc = !inc;

    rows[j].push(s[i]);

    if (inc) j++;
    else j--;
  }

  for (let i = 0; i < numRows; i++) {
    zigzag += rows[i].join("");
  }

  return zigzag;
};
