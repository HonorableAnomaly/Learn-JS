// Promisy version of fetching an API
// fetch("https://api.tvmaze.com/search/shows?q=girls")
//   .then((res) => {
//     console.log("RESPONSE, WAITING TO PARSE...", res);
//     return res.json();
//   })
//   .then((data) => {
//     console.log("DATA PARSED", data);
//     console.log(data[0].score);
//   })
//   .catch((e) => {
//     console.log("OH NO! ERROR!", e);
//   });

// ASYNC version of fetching an API
const fetchTopGirlsMovieRating = async () => {
  try {
    const res = await fetch("https://api.tvmaze.com/search/shows?q=girls");
    const data = await res.json();
    console.log(data[0].score);
  } catch (e) {
    console.log("OH NO! ERROR!", e);
  }
};
