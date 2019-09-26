import {
  getMovieById,
  getMovies,
  getMovieByMinimumRating,
  getMovieByMinimumYear
} from "./db";

export const home = (req, res) => {
  res.render("movies", { movies: getMovies() });
};
export const movieDetail = (req, res) => {
  res.render("detail", { movie : getMovieById(req.params.id)});
};
export const filterMovie = (req, res) => {};
