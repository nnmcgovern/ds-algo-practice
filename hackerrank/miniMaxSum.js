function miniMaxSum(arr) {
  // Write your code here
  arr.sort((a, b) => a - b);

  let minSum = 0;
  let maxSum = 0;

  for (let i = 0; i < arr.length; i++) {
    if (i !== 0) maxSum += arr[i];
    if (i !== arr.length - 1) minSum += arr[i];
  }

  console.log(minSum + " " + maxSum);
}
