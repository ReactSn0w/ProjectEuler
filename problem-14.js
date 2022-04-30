/*
The following iterative sequence is defined for the set of positive integers:
n → n/2 (n is even)
n → 3n + 1 (n is odd)
Using the rule above and starting with 13, we generate the following sequence:
13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. 
Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
Which starting number, under one million, produces the longest chain?
NOTE: Once the chain starts the terms are allowed to go above one million. 
 */
const UPPER_BOUND = 1000000;

function isEven(number) {
  if (number % 2 == 0) {
    return true;
  }
  return false;
}

function serieGenerator(upperBound) {
  let number = 0;
  let chainElements = 1;
  let maxChain = 0;
  let maxNumber = 0;
  for (index = 1; index <= upperBound; index++) {
    number = index;
    while (number != 1) {
      chainElements++;
      if (isEven(number)) {
        number = number / 2;
      } else {
        number = 3 * number + 1;
      }
    }
    if (chainElements > maxChain) {
      maxChain = chainElements;
      maxNumber = index;
    }
    chainElements = 1;
  }
  console.log(`number: ${maxNumber} - chain: ${maxChain}`);
}

serieGenerator(UPPER_BOUND);
