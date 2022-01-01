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

for (let student in testScores) {
  console.log(`${student} scored ${testScores[student]}`);
}
