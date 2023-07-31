/*-----------------------------------------------------------------
Challenge: 08-removeEnds
Difficulty: Basic
Prompt:
- Write a function called removeEnds that accepts a single string argument, then returns the a string with the first and last characters removed.
- If the length of the string argument is less than 3, return an empty string.
Examples:
removeEnds('SEI Rocks!'); //=> "EI Rocks"
removeEnds('a'); //=> "" (empty string)
-----------------------------------------------------------------*/
// Your solution for 08-removeEnds here:

let removeEnds = string => {
  if (string.length < 3) {
    return ""
  }
  else {
    let newString = ""
    for (let i = 1; i <= (string.length - 2); i++) {
      newString += string[i]
    }
    return newString
  }
}