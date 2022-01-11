// const add = function (x, y) {
//     return x + y;
// }

// The new arrow style of writing functions! Removes the keyword function
// const add = (x, y) => {
//     return x + y;
// };

// If there is only a single argument that goes into the arrow function, you can remove the parens!
const square = num => {
    return num ** 2;
};

// If there are no arguments that go into the arrow function, you still need the parens
// const rollDie = () => {
//     return Math.floor(Math.random() * 6) + 1;
// }

// You can make arrow function syntax even shorter if you use implicit return, by turning the curlys into parens and removing the return keyword and semicolons
// Implicit return will only work if you have a single expression inside the parens
const rollDie = () => (
    Math.floor(Math.random() * 6) + 1
)

// This syntax is the same as the implicit return but done on one line and subtracting the parens
const add = (a, b) => a + b

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

//   Mapping movies array
//   const newMovies = movies.map (function(movie) {
//       return `${movie.title} - ${movie.score/10}`
//   });

// Using arrow function on movies array
const newMovies = movies.map (movie => 
    `${movie.title} - ${movie.score/10}`
)