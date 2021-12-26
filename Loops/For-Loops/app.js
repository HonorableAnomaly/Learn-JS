// console.log(1);
// console.log(2);
// console.log(3);
// console.log(4);
// console.log(5);
// console.log(6);
// console.log(7);
// console.log(8);
// console.log(9);
// console.log(10);

// First expression is a variable, second is a boolean to check whether the loop continues, and the third is the increment expression
// for(let i = 1; i <= 10; i++){
//     console.log(i);
// }

// Another way to write for loops: different variable name, different print result and += 1 instead of ++

// for(let num = 1; num <= 10; num += 1){
//     console.log("I AM IN THE LOOP BODY!!!")
//     console.log(num);
// }

// For loop printing even numbers
// Change the starting number to 2 to skip 0, start at 1 to do odd numbers
// for(let i = 0; i <= 20; i += 2){
//     console.log(i);
// }

// for loop counting down from 100 to 0 in increments of 10
// for(let i = 100; i >= 0; i -= 10){
//     console.log(i);
// }

// Odd starting number, printing after multiplication increment times 10
// for(let i = 10; i <= 1000; i *= 10){
//     console.log(i);
// }

// **DO NOT RUN THIS INFINITE LOOP!!!**
// VERY BAD!!!
// ================================
// ================================
// for(let i = 20; i >= 0; i++){
//     console.log(i);
// }
// ================================
// ================================
// **DO NOT RUN THIS INFINITE LOOP!!!**
// VERY BAD!!!

const animals = [
    "whale",
    "giraffe",
    "kangaroo",
    "rhino",
    "shark",
    "leopard",
    "frog",
    "snake",
    "tiger",
    "hyena"
]

// Iterating across the array from beginning index to end
// for (let i = 0; i < animals.length; i++) {
//     console.log(i, animals[i])
// }

// Iterating across the array from last index (indicated by a -1) to the beginning
// for (let i = animals.length - 1; i >= 0; i--) {
//     console.log(i, animals[i]);
// }

// Nested loops
// for (let i = 1; i <= 10; i++) {
//     console.log(`i is: ${i}`);
//     for (let j = 1; j <= 4; j++) {
//         console.log(`   j is: ${j}`)
//     }
// }

const seatingAssignment = [
    ["Madisen", "Kimmy", "Trevor"],
    ["Josh", "Becca", "Arely", "Isaac"],
    ["Mitchell", "Kenleigh", "Mara", "Brittany"]
];

for (let i = 0; i < seatingAssignment.length; i++) {
    const row = seatingAssignment[i];
    console.log(`Row #${i + 1}`)
    for (let j = 0; j < row.length; j++) {
        console.log(row[j]);
    }
}