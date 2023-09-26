function plusMinus(arr) {
  // Write your code here
  let posCount = 0;
  let negCount = 0;
  let zeroCount = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) posCount++;
    else if (arr[i] < 0) negCount++;
    else zeroCount++;
  }

  let posRatio = posCount / arr.length;
  let negRatio = negCount / arr.length;
  let zeroRatio = zeroCount / arr.length;

  console.log(posRatio.toFixed(6));
  console.log(negRatio.toFixed(6));
  console.log(zeroRatio.toFixed(6));
}
