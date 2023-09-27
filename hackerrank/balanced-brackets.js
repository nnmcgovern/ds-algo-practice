function isBalanced(s) {
  // Write your code here
  if (s.length === 1) return "NO";

  const stack = [];
  let strIndex = 0;
  stack.push(s[strIndex++]);

  while (strIndex < s.length) {
    if (s[strIndex] === "{" || s[strIndex] === "[" || s[strIndex] === "(") {
      stack.push(s[strIndex]);
    } else {
      let top = stack.pop();

      switch (s[strIndex]) {
        case "}":
          if (top !== "{") return "NO";
          break;
        case ")":
          if (top !== "(") return "NO";
          break;
        case "]":
          if (top !== "[") return "NO";
          break;
        default:
          return "NO";
      }
    }

    strIndex++;
  }

  if (stack.length === 0) return "YES";
  else return "NO";
}

// Time: O(n) where n is the length of the string
