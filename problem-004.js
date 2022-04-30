/* A palindromic number reads the same both ways. The largest palindrome
 made from the product of two 2-digit numbers is 9009 = 91 × 99.
Find the largest palindrome made from the product of two 3-digit numbers. */

function isPalindrom(string) {
  let str = string.toString();
  let pal = str.split("").reverse().join("");
  if (string == pal) {
    return true;
  }
  return false;
}

function lastPalindrome() {
  let res = 0;
  for (number1 = 100; number1 <= 999; number1++) {
    for (number2 = 100; number2 <= 999; number2++) {
      if (isPalindrom(number1 * number2) && number1 * number2 > res) {
        res = number1 * number2;
      }
    }
  }
  return res;
}

console.log(lastPalindrome());
