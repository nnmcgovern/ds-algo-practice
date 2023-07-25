// array is not sorted

function twoNumberSum(array, targetSum) {
  let table = {}
  const sumArray = []
  for (let i = 0; i < array.length; i++) {
    let y = targetSum - array[i]
    if (table.hasOwnProperty(y)) {
      sumArray.push(y, array[i])
      break
    }
    
    table[array[i]] = null
  }
  return sumArray
}

// time: O(n), space: O(n)
