//M data
//V how does the data look
//C function that looks for the data
import express from "express";
import routes from "../routes";
import { videos, upload, videoDetail, editVideo, deleteVideo, getUpload, postUpload } from "../controllers/videoController";

const videoRouter = express.Router();

//videoRouter.get(routes.videos,videos);
videoRouter.get(routes.upload,getUpload);
videoRouter.post(routes.upload,postUpload);
videoRouter.get(routes.videoDetail(),videoDetail);
videoRouter.get(routes.editVideo,editVideo);
videoRouter.get(routes.deleteVideo,deleteVideo);

export default videoRouter;
