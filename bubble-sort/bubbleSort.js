// let count = 0

function bubbleSortTemp(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1])

      if (arr[j] > arr[j + 1]) {
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
      }
      // count++
    }
  }

  return arr
}

// console.log(`sorted arr: ${bubbleSortTemp([29, 10, 14, 37, 30, 17])} count: ${count}`)

// --------------

// count = 0
let count = 0

function bubbleSort(arr) {
  for (let i = arr.length; i > 0; i--) {
    let noSwaps = true

    for (let j = 0; j < i - 1; j++) {
      console.log(arr, arr[j], arr[j + 1])

      if (arr[j] > arr[j + 1]) {
        // noSwaps = false // why doesn't this work?
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]]
        noSwaps = false
      }

      count++
    }

    if (noSwaps) {
      break
    }
  }

  return arr
}

console.log(`sorted arr: ${bubbleSort([29, 10, 14, 37, 30, 17])} count: ${count}`)