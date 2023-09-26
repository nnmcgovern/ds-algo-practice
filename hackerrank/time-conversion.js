function timeConversion(s) {
  // Write your code here
  let arr = s.split(":");
  let result = "";

  let amOrPm = arr[2][2];

  if (amOrPm === "A") {
    if (arr[0] == "12") result = "00";
    else result = arr[0];
  } else {
    if (arr[0] == "12") result = "12";
    else result = parseInt(arr[0]) + 12;
  }

  return result + ":" + arr[1] + ":" + arr[2][0] + arr[2][1];
}
