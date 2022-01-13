const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];

numbers.filter (n => {
    return (n < 10);
});

const movies = [
    {
      title: "The Matrix",
      score: 93,
      year: 1999
    },
    {
      title: "Toy Story",
      score: 97,
      year: 1986
    },
    {
      title: "Finding Nemo",
      score: 86,
      year: 1938
    },
    {
      title: "Lord of the Rings",
      score: 99,
      year: 2006
    },
    {
      title: "Scream",
      score: 73,
      year: 2013
    },
    {
      title: "Love, Actually",
      score: 88,
      year: 1992
    },
  ];

//   filter scans each element in an array and for each true, the element is copied into a new array
const goodMovies = movies.filter (m => m.score > 90);
// combined map and filter to pull results refined twice
const goodTitles = goodMovies.map (m => m.title);
// shortened syntax that combines both of the above const variables to filter and map good movie titles
const bestTitles = movies.filter (m => m.score > 90).map (m => m.title);

const badMovies = movies.filter (m => m.score < 80);

const recentMovies = movies.filter (m => m.year > 2000);