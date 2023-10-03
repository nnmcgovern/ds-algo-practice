function equalStacks(h1, h2, h3) {
  // Write your code here
  // top of stack = left side // shift()
  let height1 = h1.reduce((accum, curr) => accum + curr, 0);
  let height2 = h2.reduce((accum, curr) => accum + curr, 0);
  let height3 = h3.reduce((accum, curr) => accum + curr, 0);

  if (height1 === height2 && height2 === height3) return height1;

  while (true) {
    if (height1 > height2 && height1 > height3) {
      let temp = h1.shift();
      height1 -= temp;
    } else if (height2 > height1 && height2 > height3) {
      let temp = h2.shift();
      height2 -= temp;
    } else {
      let temp = h3.shift();
      height3 -= temp;
    }

    if (height1 === height2 && height2 === height3) return height1;
  }

  return height1;
}
