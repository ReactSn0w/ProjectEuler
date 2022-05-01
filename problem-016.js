/* 215 = 32768 and the sum of its digits is 3 + 2 + 7 + 6 + 8 = 26.
What is the sum of the digits of the number 2^1000? */

function sumOfTheDigits() {
  let number = 1n;
  for (index = 1; index <= 1000; index++) {
    number *= 2n;
  }
  let digits = number.toString();
  digits = digits.split("");
  digits = digits.map((i) => Number(i));
  digits = digits.reduce((acc, el) => acc + el);
  return digits;
}

console.log(sumOfTheDigits());
