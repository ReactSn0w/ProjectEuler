/* The prime factors of 13195 are 5, 7, 13 and 29.
What is the largest prime factor of the number 600851475143 ? */

let actualPrime = 1;
let actualMax = 1;
let n = 600851475143;
function nextPrime() {
  let stop = true;
  let divisorCount = 0;
  actualMax++;
  while (stop) {
    for (index = 1; index <= actualMax; index++) {
      if (actualMax % index == 0) {
        divisorCount++;
      }
    }
    if (divisorCount == 2) {
      actualPrime = actualMax;
      stop = false;
      return actualPrime;
    } else {
      actualMax++;
    }
    divisorCount = 0;
  }
}
function resetPrime() {
  actualMax = 1;
}

function primeFactor() {
  debugger;
  let stop = true;
  let primesFactor = [];

  while (stop) {
    nextPrime();
    if (n % actualPrime == 0) {
      primesFactor.push(actualPrime);
      n = n / actualPrime;
      resetPrime();
    }
    if (n == actualMax) {
      stop = false;
    }
  }
  console.log(primesFactor);
}

primeFactor();
