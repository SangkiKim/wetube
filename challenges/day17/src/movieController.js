/*
You DONT have to import the Movie with your username.
Because it's a default export we can nickname it whatever we want.
So import Movie from "./models"; will work!
You can do Movie.find() or whatever you need like normal!
*/
import Movie_Sangki from "./models/Movie";
import routes from "./routes";
// Add your magic here!
export const home = async (req, res) => {
  try {
    const videos = await Movie_Sangki.find({}).sort({ _id: -1 });
    //home.pug에 videos가 전달된다
    res.render("home", { pageTitle: "Home", videos, routes });
  } catch (error) {
    console.log(error);
    res.render("home", { pageTitle: "Home", videos: [], routes });
  }
};

export const search = async (req, res) => {
  // const searchingBy = req.query.term;와 같다
  const {
    query: { term: searchingBy }
  } = req;
  let videos = [];
  try {
    videos = await Movie_Sangki.find({
      title: { $regex: searchingBy, $options: "i" }
    });
  } catch (error) {
    console.log(error);
  }
  res.render("search", { pageTitle: "Search", searchingBy, videos });
};

export const getCreateVideo = (req, res) =>
  res.render("create", { pageTitle: "Create" });

export const postCreateVideo = async (req, res) => {
  const {
    body: { title, year, rating, synopsis, genres, uploadedAt }
  } = req;
  const genresArray = genres.split(",");
  const newVideo = await Movie_Sangki.create({
    title,
    year,
    rating,
    synopsis,
    genres: genresArray,
    uploadedAt
  });
  res.redirect(routes.videoDetail(newVideo.id));
};

export const videoDetail = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const video = await Movie_Sangki.findById(id);
    res.render("videoDetail", { pageTitle: video.title, video });
  } catch (error) {
    res.render("404");
  }
};
export const getEditVideo = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    const video = await Movie_Sangki.findById(id);
    res.render("editVideo", { pageTitle: `Edit ${video.title}`, video });
  } catch (error) {
    res.redirect(routes.home);
  }
  res.render("editVideo", { pageTitle: "Edit Video" });
};
export const postEditVideo = async (req, res) => {
  const {
    params: { id },
    body: { title, year, rating, synopsis, genres }
  } = req;
  try {
    await Movie_Sangki.findOneAndUpdate(
      { _id: id },
      { title, year, rating, synopsis, genres }
    );
    res.redirect(routes.videoDetail(id));
  } catch (error) {
    res.redirect(routes.home);
  }
};

export const deleteVideo = async (req, res) => {
  const {
    params: { id }
  } = req;
  try {
    await Movie_Sangki.findByIdAndRemove({ _id: id });
  } catch (error) {}
  res.redirect(routes.home);
};
