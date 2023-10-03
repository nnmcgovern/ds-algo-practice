function maxSubarray(arr) {
  // subarray: contigious subsequence
  let maxSumArr = -Infinity;
  let currSum = 0;

  // subseq: any subset
  let maxSumSeq = 0;
  let maxNeg = -Infinity;

  for (let i = 0; i < arr.length; i++) {
    // max subsequence sum
    if (arr[i] >= 0) maxSumSeq += arr[i];
    else maxNeg = Math.max(maxNeg, arr[i]);
    // find max negative value in case array is all negative values

    // max subarray sum
    currSum = Math.max(arr[i], arr[i] + currSum);
    maxSumArr = Math.max(maxSumArr, currSum);
  }

  if (maxSumSeq === 0 && maxNeg !== -Infinity) maxSumSeq = maxNeg;

  return [maxSumArr, maxSumSeq];
}
