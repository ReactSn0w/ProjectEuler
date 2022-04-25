/* By listing the first six prime numbers: 2, 3, 5, 7, 11, and 13, 
we can see that the 6th prime is 13. What is the 10 001st prime number? */

let actualPrime = 1;
let actualMax = 1;

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

function nPrime(n) {
  for (indexa = 1; indexa <= n; indexa++) {
    nextPrime();
  }
}

nPrime(10001);
console.log(actualPrime);
