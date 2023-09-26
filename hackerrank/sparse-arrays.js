function matchingStrings(strings, queries) {
  // Write your code here
  const results = new Array(queries.length).fill(0);

  strings.sort();

  for (let i = 0; i < queries.length; i++) {
    for (let j = 0; j < strings.length; j++) {
      if (queries[i] === strings[j]) {
        results[i]++;

        if (strings[j + 1] !== queries[i]) break;
      }
    }
  }

  return results;
}
