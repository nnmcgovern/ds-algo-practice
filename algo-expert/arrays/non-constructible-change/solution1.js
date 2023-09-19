function nonConstructibleChange(coins) {
  // sort coins array numerically in ascending order
  coins.sort((a, b) => a - b);

  let sum = 0;

  for (let i = 0; i < coins.length; i++) {
    const difference = coins[i] - sum;

    if (difference > 1) break;
    else sum += coins[i];
  }

  return sum + 1;
}

// Time: O(n), Space: O(1)
