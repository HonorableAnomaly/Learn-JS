// Arguments is a function we're given, but it can't be reduced. So this is broke.
// function sum () {
//     return arguments.reduce((total, arg) => total + arg);
// }

// Nums here is only one param
// function sum (nums) {

// }

// Adding rest to the param nums collects the rest of the params and combines them in nums as an array
// function sum (...nums) {
//     console.log(nums);
// }

// The first function rewritten with rest param
function sum (...nums) {
    return nums.reduce((total, arg) => total + arg);
}

// The last rest param collects every other argument given into the last print statement
function raceResults (gold, silver, ...everyoneElse) {
    console.log(`GOLD MEDAL GOES TO: ${gold}!!!`);
    console.log(`SILVER MEDAL GOES TO: ${silver}!!!`);
    console.log(`AND THANKS TO EVERYONE ELSE: ${everyoneElse}!!!`)
};

// Arguments DO NOT WORK in arrow functions