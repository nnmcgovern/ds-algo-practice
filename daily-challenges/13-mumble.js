/*-----------------------------------------------------------------
Challenge: 13-mumble
Difficulty: Intermediate
Prompt:
- Write a function called mumble that accepts a single string argument.
- The function should return a string that has each character repeated the number of times according to its position within the string arg.  In addition, each repeated section of characters should be separated by a hyphen (-).
- Examples describe it best..
Examples:
mumble('X'); //=> 'X'
mumble('abc'); //=> 'a-bb-ccc'
mumble('121'); //=> '1-22-111'
mumble('!A 2'); //=> '!-AA-   -2222'
-----------------------------------------------------------------*/
// Your solution for 13-mumble here:

const mumble = string => {
  if (string.length === 0) {
    return
  }
  let newString = ""
  for (let i = 0; i < string.length; i++) {
    for (let j = 0; j <= i; j++) {
      newString += string[i]
    }
    if (i < string.length - 1) {
      newString += "-"
    }
  }
  return newString
}