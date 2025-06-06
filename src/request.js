const key = "bc5ba26cbcc6189c187da3c5cf0fec77";

const request = {
  requestPopular: `https://api.themoviedb.org/3/movie/popular?api_key=${key}language=en-US&page=1&region=NG`,
  requestTrending: `https://api.themoviedb.org/3/movie/popular?api_key=${key}language=en-US&page=1&region=NG`,
  requestTopRated: `https://api.themoviedb.org/3/tv/top_rated?api_key=${key}language=en-US&page=1`,
  requestUpcoming: `https://api.themoviedb.org/3/movie/upcoming?api_key=${key}language=en-US&page=1`,
  requestNowPlaying: `https://api.themoviedb.org/3/movie/now_playing?api_key=${key}language=en-US&page=1`,
};

export default request;
