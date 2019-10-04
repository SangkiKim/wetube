import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest : "uploads/videos/"});

export const localsMiddleWare = (req,res,next) => {
    res.locals.siteName = "KiTube";
    res.locals.routes = routes;
    res.locals.user = {
        isAuthenticated : true,
        id : 5
    }
    next();
};
//single은 하나의 파일만 upload할 수 있다는걸 의미
//""에는 HTML field의 name이 들어온다
export const uploadVideo = multerVideo.single("videoFile");