function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  const table = {};
  let closestDiff = null;

  for (let one = 0; one < arrayOne.length; one++) {
    for (let two = 0; two < arrayTwo.length; two++) {
      const absDiff = Math.abs(arrayOne[one] - arrayTwo[two]);
      table[absDiff] = [arrayOne[one], arrayTwo[two]];

      console.log(arrayOne[one], arrayTwo[two], absDiff);

      if (closestDiff === null || absDiff < closestDiff) closestDiff = absDiff;
    }
  }

  return table[closestDiff];
}

// Time: O(n * m), Space: O(n * m)
// where n is the length of the first input array
// and m is the length of the second
