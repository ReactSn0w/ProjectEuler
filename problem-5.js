/* 2520 is the smallest number that can be divided by each of the numbers from 1 to 10 without any remainder.\
What is the smallest positive number that is evenly divisible by all of the numbers from 1 to 20? */
//2-3-5-7-11-13-17-19
//------------------------------
//20-10-5-2
//18-9-6-4-3-2
//16-8-6-4-3-2
//15-5-3
//14-7-2
//12-6-2
//10-5-2
//9-3
//8-4-2
//6-3-2
//4-2
//--------------------------------
//20-19-18-17-16-15-14-13-12-11

function smallestDivisor() {
  let number = 20;
  while (true) {
    if (
      number % 20 == 0 &&
      number % 19 == 0 &&
      number % 18 == 0 &&
      number % 17 == 0 &&
      number % 16 == 0 &&
      number % 15 == 0 &&
      number % 14 == 0 &&
      number % 13 == 0 &&
      number % 12 == 0 &&
      number % 11 == 0
    ) {
      return number;
    }
    number++;
  }
}

console.log(smallestDivisor());
