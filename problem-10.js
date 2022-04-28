/* The sum of the primes below 10 is 2 + 3 + 5 + 7 = 17.
Find the sum of all the primes below two million. */

let actualPrime = 1;
let actualMax = 1;
const MAX = 2000000;
function nextPrime() {
  let stop = true;
  let divisorCount = 0;
  actualMax++;
  while (stop) {
    if (
      (actualMax != 2 && actualMax % 2 != 0) ||
      (actualMax != 3 && actualMax % 3 != 0) ||
      (actualMax != 5 && actualMax % 5 != 0)
    ) {
      for (index = 1; index <= actualMax; index++) {
        if (actualMax % index == 0) {
          divisorCount++;
        }
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
function sumPrimesBelow(max) {
  let sum = 0;
  while (actualPrime < max) {
    sum += nextPrime();
  }
  return sum;
}
console.log(sumPrimesBelow(MAX));
