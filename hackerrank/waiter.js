// ** Need to study further **

function waiter(plates, q) {
  let answers = [];
  let A = plates;
  let B = [];

  // Helper function to check if a number is prime
  const isPrime = (n) => {
    for (let i = 2; i <= Math.sqrt(n); i++) {
      if (n % i === 0) return false;
    }
    return true;
  };

  // Helper function to get the ith prime number
  const getIthPrime = (i) => {
    let primes = [];
    let num = 2; // Starting from the first prime number
    while (primes.length < i) {
      if (isPrime(num)) {
        primes.push(num);
      }
      num++;
    }
    return primes[i - 1];
  };

  for (let i = 1; i <= q; i++) {
    let prime = getIthPrime(i);
    let newA = [];

    while (A.length > 0) {
      let plate = A.pop();
      if (plate % prime === 0) {
        B.push(plate);
      } else {
        newA.push(plate);
      }
    }

    while (B.length > 0) {
      answers.push(B.pop());
    }

    A = newA;
  }

  while (A.length > 0) {
    answers.push(A.pop());
  }

  return answers;
}

// Time: O(q * sqrt(n)) + O(qn)
