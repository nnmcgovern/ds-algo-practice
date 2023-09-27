function processData(input) {
  //Enter your code here
  let s = "";
  let strStates = [];

  input = input.split("\n"); // split by new lines

  for (let i = 1; i < input.length; i++) {
    let operation = input[i].split(" ");
    let opArg = operation[1];

    switch (parseInt(operation[0])) {
      case 1: // append
        strStates.push(s);
        s += opArg;
        break;

      case 2: // delete chars
        strStates.push(s);
        s = s.substring(0, s.length - opArg);
        break;

      case 3: // print char
        console.log(s[opArg - 1]);
        break;

      case 4: // undo
        s = strStates.pop();
        break;

      default:
    }
  }
}
