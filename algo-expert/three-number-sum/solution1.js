function threeNumberSum(array, targetSum) {
  // Write your code here.
  if (array.length < 3) return [];

  array.sort((a, b) => a - b);

  if (array[0] > targetSum) return [];

  const triplets = [];

  for (let i = 0; i < array.length - 2; i++) {
    let left = i + 1;
    let right = array.length - 1;

    while (left < right) {
      const sum = array[i] + array[left] + array[right];

      if (sum === targetSum) {
        triplets.push([array[i], array[left], array[right]]);
        left++;
      } else if (sum < targetSum) {
        left++;
      } else {
        right--;
      }
    }
  }

  return triplets;
}

// Time: O(n^2), Space: O(n)
