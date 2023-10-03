function pairs(k, arr) {
  arr.sort((a, b) => a - b);

  let count = 0;
  let i = 0;
  let j = 1;

  while (j < arr.length) {
    let left = arr[i];
    let right = arr[j];

    if (right - left === k) {
      count++;
      i++;
      j++;
    } else if (right - left > k) {
      if (i === j - 1) {
        i++;
        j++;
      } else i++;
    } else j++;
  }

  return count;
}
