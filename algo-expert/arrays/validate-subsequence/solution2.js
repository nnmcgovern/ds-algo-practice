function isValidSubsequence(array, sequence) {
  let arrayIndex = 0;
  let seqIndex = 0;

  while (arrayIndex < array.length && seqIndex < sequence.length) {
    if (array[arrayIndex] === sequence[seqIndex]) {
      seqIndex++;
    }

    arrayIndex++;
  }

  if (seqIndex >= sequence.length) return true;
  return false;
}

// Time: O(n), Space: O(1)
