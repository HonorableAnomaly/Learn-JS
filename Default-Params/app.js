// The old way of writing a funciton to roll a die with input amoutn of sides and having a default value of 6
// function rollDie (numSides) {
//     if (numSides === undefined) {
//         numSides = 6;
//     }
//     return Math.floor(Math.random() * numSides) + 1;
// };

// The new way of writing the same function but with the default param equaling the argument
function rollDie (numSides = 6) {
    return Math.floor(Math.random() * numSides) + 1;
};

// When using default params, always place them as the last arguments rather than the first
function greet (person, msg = 'Hey there', punc = '!') {
    console.log(`${msg}, ${person}${punc}`);
}