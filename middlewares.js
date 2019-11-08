import multer from "multer";
import routes from "./routes";

const multerVideo = multer({ dest : "uploads/videos/"});

export const localsMiddleWare = (req,res,next) => {
    res.locals.siteName = "KiTube";
    res.locals.routes = routes;
    res.locals.user = req.user || null;
    console.log(req.user);
    next();
};

//login상태에서만 접속을 허용
export const onlyPublic = (req,res,next) => {
    if(req.user){
        res.redirect(routes.home);
    } else {
        next();
    }
};

export const onlyPrivate = (req,res,next) => {
    if(req.user){
        next();
    } else {
        res.redirect(routes.home);
    }
}

//single은 하나의 파일만 upload할 수 있다는걸 의미
//""에는 HTML field의 name이 들어온다
export const uploadVideo = multerVideo.single("videoFile");