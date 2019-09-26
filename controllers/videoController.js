//가짜db
import { videos } from "../db";
import routes from "../routes";


//views폴더에서 파일명이 home이고 확장자가 pug인 템플릿 파일을 찾아서 보여줌
export const home = (req,res) => {
    //home.pug에 videos가 전달된다
    res.render("home",{ pageTitle : "Home", videos : videos });
};
export const search = (req,res) => {
    // const searchingBy = req.query.term;와 같다
    const {
        query : {term : searchingBy}
    } = req;
    //searchingBy : searchingBy , videos : videos ---> searchingBy , videos로 축약가능
    res.render("search", {pageTitle : "Search" ,searchingBy,videos});
}

//export const videos = (req,res) => res.render("videos");
export const getUpload = (req,res) => res.render("upload",{pageTitle : "Upload"});
export const postUpload = (req,res) => {
    const {
        body : { file, title, description}
    } = req;
    //To Do : Upload and save video
    res.redirect(routes.videoDetail(123423));
};




export const videoDetail = (req,res) => res.render("videoDetail",{pageTitle : "Video Detail"});
export const editVideo = (req,res) => res.render("editVideo",{pageTitle : "Edit Video"});
export const deleteVideo = (req,res) => res.rend("deleteVideo",{pageTitle : "Delete Video"});