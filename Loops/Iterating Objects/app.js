const testScores = {
  Amanda: 98,
  Jessica: 100,
  Brittany: 76,
  Madisen: 85,
  Kimmy: 91,
  Kenleigh: 79,
  Becca: 91,
  Vivian: 86,
  Audra: 62,
  Meghan: 77,
};

// Key-value pairs are not iterable objects!
// To iterate over key-value pairs, use this

// for (let student in testScores) {
//   console.log(`${student} scored ${testScores[student]}`);
// }

// Calling the values, summing them and then finding the average score. Not very common.
let total = 0;
let scores = Object.values(testScores);

for (let score of scores) {
  total += score;
}
console.log(total / scores.length);
