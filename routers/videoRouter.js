//M data
//V how does the data look
//C function that looks for the data
import express from "express";
import routes from "../routes";
import { videos, upload, videoDetail, editVideo, deleteVideo } from "../controllers/videoController";

const videoRouter = express.Router();

videoRouter.get(routes.videos,videos);
videoRouter.get(routes.upload,upload);
videoRouter.get(routes.videoDetail,videoDetail);
videoRouter.get(routes.editVideo,editVideo);
videoRouter.get(routes.deleteVideo,deleteVideo);

export default videoRouter;
