function equalStacks(h1, h2, h3) {
  let sum1 = h1.reduce((a, b) => a + b, 0);
  let sum2 = h2.reduce((a, b) => a + b, 0);
  let sum3 = h3.reduce((a, b) => a + b, 0);

  let index1 = 0;
  let index2 = 0;
  let index3 = 0;

  if (index1 === h1.length || index2 === h2.length || index3 === h3.length) {
    return 0;
  }

  while (true) {
    if (sum1 === sum2 && sum2 === sum3) {
      return sum1;
    }

    if (sum1 >= sum2 && sum1 >= sum3) {
      sum1 -= h1[index1++];
    } else if (sum2 >= sum1 && sum2 >= sum3) {
      sum2 -= h2[index2++];
    } else {
      sum3 -= h3[index3++];
    }
  }
}
