const foods = ["cheese", "apples", "beef", "tortilla"];

// A for loop to iterate across array foods

// for (let i = 0; i < foods.length; i++) {
//   console.log(`See recipes at food.com/${foods[i]}`);
// }

// A for of loop to do the same!

for (let food of foods) {
  console.log(`See recipes at food.com/${food}`);
}
