const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// function print(element) {
//   console.log(element);
// }

// // We can manually print each element from the array, but forEach does it for us.
// // print(numbers[0]);
// // print(numbers[1]);
// numbers.forEach(print);

// numbers.forEach(function (el) {
//   if (el % 2 === 0) {
//     console.log(el);
//   }
// });

// this is the same thing in this case, but forEach can accomplish a lot with more complex functions, and this for loop doesn't use functions
// for (let el of numbers) {
//   console.log(el);
// }

const movies = [
  {
    title: "The Matrix",
    score: 93,
  },
  {
    title: "Toy Story",
    score: 97,
  },
  {
    title: "Finding Nemo",
    score: 86,
  },
  {
    title: "Lord of the Rings",
    score: 99,
  },
  {
    title: "Scream",
    score: 73,
  },
  {
    title: "Love, Actually",
    score: 88,
  },
];

movies.forEach(function (movie) {
  console.log(`${movie.title} - ${movie.score}/100`);
});
