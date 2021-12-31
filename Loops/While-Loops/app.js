// let count = 0;
// while (count < 10) {
//   count++;
//   console.log(count);
// }

// const SECRET = "BabyHippo";

// let guess = prompt("Enter the secret code...");
// while (guess !== SECRET) {
//   guess = prompt("Enter the secret code...");
// }
// console.log("Congrats, you got the secret!!!");

// break might be broken...
// let input = prompt("Hey, say something!");
// while (true) {
//   input = prompt(input);
//   if (input.toLowerCase() === "stop copying me!") break;
// }
// console.log("OKAY, YOU WIN!");

for (let i = 0; i < 1000; i++) {
  console.log(i);
  if (i === 100) break;
}
