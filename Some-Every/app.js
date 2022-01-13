const examScores = [45, 87, 32, 78, 99, 90, 94, 32, 78, 72, 88, 89, 100];

// Every checks each element and returns true if every element meets the every condition
examScores.every (score => score >= 75);
// Some checks each element and returns true if any of the elements meets the some condition
examScores.some (score => score <= 60);

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

  movies.some (movie => movie.year >= 2010);