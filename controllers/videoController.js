import routes from "../routes";
import Video from "../models/Video";

//views폴더에서 파일명이 home이고 확장자가 pug인 템플릿 파일을 찾아서 보여줌
//async = Javascript야 이 function의 어떤 부분은 꼭 기다려야 해
export const home = async(req,res) => {
    //await = 잠깐 기다리는것. Database에 있는 모든 Video를 가져온다
    //await는 async랑 꼭 같이 써야 한다.
    try { 
    const videos = await Video.find({}).sort({_id : -1});
    //home.pug에 videos가 전달된다
    res.render("home",{ pageTitle : "Home", videos });
    } catch(error){
        console.log(error);
        res.render("home",{ pageTitle : "Home", videos : [] });
    }
};
export const search = async(req,res) => {
    // const searchingBy = req.query.term;와 같다
    const {
        query : {term : searchingBy}
    } = req;
    let videos = [];
    try{
        videos = await Video.find({
            title:{$regex : searchingBy , $options : "i"}
        });
    } catch (error) {
        console.log(error);
    }
    //searchingBy : searchingBy , videos : videos ---> searchingBy , videos로 축약가능
    res.render("search", {pageTitle : "Search" ,searchingBy,videos});
}

//export const videos = (req,res) => res.render("videos");
export const getUpload = (req,res) => res.render("upload",{pageTitle : "Upload"});
export const postUpload = async(req,res) => {
    const {
        body : { title, description},
        file : { path }
    } = req;
    const newVideo = await Video.create({
        fileUrl : path,
        title,
        description
    })
    res.redirect(routes.videoDetail(newVideo.id));
};




export const videoDetail = async(req,res) => {
 const {
     params : {id}
 } = req;
 try{
    const video = await Video.findById(id);
    res.render("videoDetail",{pageTitle : video.title,video});
    } catch(error){
        console.log(error);
        res.redirect(routes.home);
    }
}
export const getEditVideo = async(req,res) => {
    const {
        params : {id}
    } = req;
    try{
        const video = await Video.findById(id);
        res.render("editVideo", {pageTitle : `Edit ${video.title}`,video});
    } catch(error) {
        res.redirect(routes.home);
    }
    res.render("editVideo",{pageTitle : "Edit Video"});
}
export const postEditVideo = async(req,res) => {
    const {
        params : {id},
        body : {title,description}
    } = req;
    try{
        await Video.findOneAndUpdate({_id : id} , {title,description});
        res.redirect(routes.videoDetail(id));
    } catch (error) {
        res.redirect(routes.home);
    }
};



export const deleteVideo = async(req,res) => {
    const {
        params : { id }
    } = req;
    try{    
       await Video.findByIdAndRemove({_id :id});
    } catch (error) {}
        res.redirect(routes.home);
    
}