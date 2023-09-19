function sortedSquaredArray(array) {
  if (array.length === 1) return [array[0] ** 2];

  let squares = [];
  let smallIndex = 0;
  let largeIndex = array.length - 1;

  while (smallIndex <= largeIndex) {
    if (Math.abs(array[largeIndex]) > Math.abs(array[smallIndex])) {
      squares.unshift(array[largeIndex] ** 2);
      largeIndex--;
    } else {
      squares.unshift(array[smallIndex] ** 2);
      smallIndex++;
    }
  }

  return squares;
}

// Time: O(n), Space: O(n)
