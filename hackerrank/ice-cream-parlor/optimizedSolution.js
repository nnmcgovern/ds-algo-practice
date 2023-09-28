function icecreamParlor(m, arr) {
  const map = {};

  for (let i = 0; i < arr.length; i++) {
    const complement = m - arr[i];

    if (map[complement] !== undefined) {
      return [map[complement] + 1, i + 1];
    }

    map[arr[i]] = i;
  }

  return []; // return an empty array if no solution is found
}

// Time: O(n), Space: O(n)
