function isValid(s) {
  let frequencies = {};
  let result = "YES";

  if (s.length < 3) return result;

  for (let i = 0; i < s.length; i++) {
    if (frequencies[s[i]]) frequencies[s[i]]++;
    else frequencies[s[i]] = 1;
  }

  let values = Object.values(frequencies);
  let lastIndex = values.length - 1;

  values.sort((a, b) => a - b);

  let checkFirst = values.filter((value) => value === values[0]).length;
  let checkLast = values.filter((value) => value === values[lastIndex]).length;

  if (checkFirst === 1 && checkLast === values.length - 1) return result;

  if (values[0] !== values[lastIndex] && values[0] !== values[lastIndex - 1])
    result = "NO";
  else if (
    values[0] !== values[lastIndex] &&
    values[0] === values[lastIndex - 1]
  ) {
    if (values[lastIndex] - values[0] > 1) result = "NO";
    else return result;
  }
  return result;
}
