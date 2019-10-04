import express from "express";
import routes from "./routes";

import {
  home,
  getCreateVideo,
  postCreateVideo,
  videoDetail,
  getEditVideo,
  postEditVideo,
  deleteVideo
} from "./movieController";

const movieRouter = express.Router();

// Add your magic here!

movieRouter.get(routes.home, home);

movieRouter.get(routes.createVideo, getCreateVideo);
movieRouter.post(routes.createVideo, postCreateVideo);

movieRouter.get(routes.videoDetail(), videoDetail);

movieRouter.get(routes.editVideo(), getEditVideo);
movieRouter.post(routes.editVideo(), postEditVideo);

movieRouter.get(routes.deleteVideo(), deleteVideo);

export default movieRouter;
