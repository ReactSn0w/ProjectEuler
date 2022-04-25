/* A Pythagorean triplet is a set of three natural numbers, a < b < c, for which,
a2 + b2 = c2
For example, 32 + 42 = 9 + 16 = 25 = 52.
There exists exactly one Pythagorean triplet for which a + b + c = 1000.
Find the product abc. */

const MAX = 1000;

function pithagoreanTriplet(max) {
  for (let a = 0; a < max; a++) {
    for (let b = 0; b < max; b++) {
      for (let c = 0; c < max; c++) {
        //console.log(`a: ${a} b:${b} c: ${c}`);
        if (
          Math.pow(a, 2) + Math.pow(b, 2) == Math.pow(c, 2) &&
          a < b &&
          b < c &&
          a + b + c == max
        ) {
          console.log(a * b * c);
        }
      }
    }
  }
}
pithagoreanTriplet(MAX);
