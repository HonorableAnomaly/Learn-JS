// const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

// const doubles = numbers.map(function (num) {
//     return num * 2;
// })

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

//   Mapping captures each element of an array an applies it to the inner method function just like in for-each, but instead of just iterating, it will create a new array with the results.
const titles = movies.map (function(movie) {
    return movie.title.toUpperCase();
})