function icecreamParlor(m, arr) {
  // Write your code here
  const sortedArr = arr
    .map((value, index) => ({ value, index }))
    .sort((a, b) => a.value - b.value);

  let solution = [];
  let index1 = 0;
  let index2 = sortedArr.length - 1;

  while (index1 < index2) {
    let cost1 = sortedArr[index1].value;
    let cost2 = sortedArr[index2].value;
    let total = cost1 + cost2;

    if (total === m) {
      return [
        Math.min(sortedArr[index1].index, sortedArr[index2].index) + 1,
        Math.max(sortedArr[index1].index, sortedArr[index2].index) + 1,
      ];
    } else if (total < m) {
      index1++;
      console.log(total, m);
    } else {
      index2--;
      console.log(total, m);
    }
  }

  return [];
}

// Time: O(nlog(n)) due to sorting
// Space: O(n) due to space required for sortedArray
