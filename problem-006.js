/* The sum of the squares of the first ten natural numbers is,
The square of the sum of the first ten natural numbers is,
Hence the difference between the sum of the squares of the first ten natural 
numbers and the square of the sum is .
Find the difference between the sum of the squares of the first one hundred 
natural numbers and the square of the sum. */

function sumOfSquere(maxInteger) {
  let res = 0;
  for (index = 1; index <= maxInteger; index++) {
    res += Math.pow(index, 2);
  }
  return res;
}
function squeareOfSum(maxInteger) {
  let res = 0;
  for (index = 1; index <= maxInteger; index++) {
    res += index;
  }
  res = Math.pow(res, 2);
  return res;
}

console.log(squeareOfSum(100) - sumOfSquere(100));
