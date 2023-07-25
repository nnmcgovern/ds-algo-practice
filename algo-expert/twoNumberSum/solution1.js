// array is not sorted

function twoNumberSum(array, targetSum) {
  const sumArray = []
  for (let i = 0; i < array.length - 1; i++) {
    let num1 = array[i]
    for (let j = i+1; j < array.length; j++) {
      if (num1 + array[j] === targetSum) {
        sumArray.push(num1, array[j])
      }
    }
  }
  return sumArray
}

// time: O(n^2), space: O(1)?
