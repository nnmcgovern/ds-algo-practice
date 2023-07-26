// mergeSort: time: O(nlog(n))

// arr1, arr2 are sorted
// merge() time: O(n)
function merge(arr1, arr2) {
  const results = []
  let i = 0 // arr1 index
  let j = 0 // arr2 index

  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      results.push(arr1[i])
      i++
    }
    else {
      results.push(arr2[j])
      j++
    }
  }

  while (i < arr1.length) {
    results.push(arr1[i])
    i++
  }

  while (j < arr2.length) {
    results.push(arr2[j])
    j++
  }

  return results
}

function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr
  }

  // mergeSort recursive calls (decompositions) have time O(log(n)) becuase input is divided in half each time
  const mid = Math.floor(arr.length / 2)
  const left = mergeSort(arr.slice(0, mid)) // slice: 2nd arg is non-inclusive
  const right = mergeSort(arr.slice(mid)) // slice mid to end of array

  // mergeSort overall time is O(n*log(n)), one call to merge for every mergeSort call
  // an array of length 1 is always sorted
  return merge(left, right)
}

console.log(mergeSort([14, 22, 78, 63, 74, 1, 10]))
// console.log(merge([2, 14, 99, 100], [1, 10, 50]))