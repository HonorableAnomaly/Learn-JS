// const foods = ["cheese", "apples", "beef", "tortilla"];

// A for loop to iterate across array foods

// for (let i = 0; i < foods.length; i++) {
//   console.log(`See recipes at food.com/${foods[i]}`);
// }

// A for of loop to do the same!

// for (let food of foods) {
//   console.log(`See recipes at food.com/${food}`);
// }

// const seatingAssignment = [
//   ["Madisen", "Kimmy", "Trevor"],
//   ["Josh", "Becca", "Arely", "Isaac"],
//   ["Mitchell", "Kenleigh", "Mara", "Brittany"],
// ];

// Copied nested for loops from For-Loops folder

// for (let i = 0; i < seatingAssignment.length; i++) {
//   const row = seatingAssignment[i];
//   console.log(`Row #${i + 1}`);
//   for (let j = 0; j < row.length; j++) {
//     console.log(row[j]);
//   }
// }

// Changing the nested for loops above to nested for of loops!!!
// for (let row of seatingAssignment) {
//   for (let student of row) {
//     console.log(student);
//   }
// }

// Using a for of loop to iterate across a string!

for (let char of "Deathwing") {
  console.log(char);
}
