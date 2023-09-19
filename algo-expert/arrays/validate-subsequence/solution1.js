function isValidSubsequence(array, sequence) {
  // array index
  let index = 0;
  let found = true;

  // if seq is longer than array, cannot be subseq
  if (sequence.length > array.length) return false;

  sequence.forEach((seqNum) => {
    if (index >= array.length) {
      found = false;
      return; // exit forEach
    }

    // for each seqNum, check if num exists in array;
    // keep track of index where num was found because
    // following num must appear after that index (order matters)
    for (let i = index; i < array.length; i++) {
      if (array[i] === seqNum) {
        index = i + 1;
        break;
      } else if (i === array.length - 1) {
        found = false;
        return; // exit forEach
      }
    }
  });

  if (!found) return false;
  return true;
}

// Time: O(n^2), Space: O(1)
