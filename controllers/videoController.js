//export const home = (req,res) => res.send("Home");

//views폴더에서 파일명이 home이고 확장자가 pug인 템플릿 파일을 찾아서 보여줌
export const home = (req,res) => res.render("home",{pageTitle : "Home"});
export const search = (req,res) => res.render("search", {pageTitle : "Search"});
export const videos = (req,res) => res.render("videos");
export const upload = (req,res) => res.render("upload",{pageTitle : "Upload"});
export const videoDetail = (req,res) => res.render("videoDetail",{pageTitle : "Video Detail"});
export const editVideo = (req,res) => res.render("editVideo",{pageTitle : "Edit Video"});
export const deleteVideo = (req,res) => res.rend("deleteVideo",{pageTitle : "Delete Video"});