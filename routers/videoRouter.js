//M data
//V how does the data look
//C function that looks for the data
import express from "express";
import routes from "../routes";
import { videos, upload, videoDetail, editVideo, deleteVideo, getUpload, postUpload, getEditVideo, postEditVideo } from "../controllers/videoController";
import { uploadVideo } from "../middlewares"; 

const videoRouter = express.Router();

// Upload
videoRouter.get(routes.upload,getUpload);
//우리가 file을 upload하면 server에 있는 folder(video/)에 upload후, postUpload를 실행
videoRouter.post(routes.upload, uploadVideo, postUpload);

// Video Detail
videoRouter.get(routes.videoDetail(),videoDetail);

// Edit Video
videoRouter.get(routes.editVideo(),getEditVideo);
videoRouter.post(routes.editVideo(),postEditVideo);

// Delete Video
videoRouter.get(routes.deleteVideo(),deleteVideo); 

export default videoRouter;
