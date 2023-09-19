function smallestDifference(arrayOne, arrayTwo) {
  // Write your code here.
  arrayOne.sort((a, b) => a - b);
  arrayTwo.sort((a, b) => a - b);

  let oneIndex = 0;
  let twoIndex = 0;
  let closestDiff = Infinity;
  let closestPair = [];

  while (oneIndex < arrayOne.length && twoIndex < arrayTwo.length) {
    const absDiff = Math.abs(arrayOne[oneIndex] - arrayTwo[twoIndex]);

    if (absDiff === 0) return [arrayOne[oneIndex], arrayTwo[twoIndex]];
    else if (absDiff < closestDiff) {
      closestDiff = absDiff;
      closestPair = [arrayOne[oneIndex], arrayTwo[twoIndex]];
    }

    if (arrayOne[oneIndex] < arrayTwo[twoIndex]) oneIndex++;
    else twoIndex++;
  }

  return closestPair;
}

// Time: O(nlog(n) + mlog(m)), Space: O(1)
// where n is the length of the first input array
// and m is the length of the second
// Note: assumes that the built-in sort() has a time complexity of
// O(nlog(n)) and a space complexity of O(1).
