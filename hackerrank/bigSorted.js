function bigSorting(unsorted) {
  // Write your code here
  unsorted.sort((a, b) => {
    let bigA = BigInt(a);
    let bigB = BigInt(b);

    if (bigA < bigB) return -1;
    else if (bigA > bigB) return 1;
    else return 0;
  });

  return unsorted;
}
