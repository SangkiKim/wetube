// Global
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// Users
const USERS = "/users";
// :가 붙으면 값이 변하는걸 express가 자동으로 인식
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

// Videos
const VIDEOS = "/videos";
const UPLOAD = "/upload";
const VIDEOS_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete"

const routes = {
    home : HOME,
    join : JOIN,
    login : LOGIN,
    logout : LOGOUT,
    search : SEARCH,
    users : USERS,
    userDetail : (id) => {
        if(id){
            return `/users/${id}`;
        } else{
            return USER_DETAIL;
        }
    },
    editProfile : EDIT_PROFILE,
    changePassword : CHANGE_PASSWORD,
    videos : VIDEOS,
    upload : UPLOAD,
    videoDetail : (id) => {
        if(id){
            return `/videos/${id}`;
        } else{
            return VIDEOS_DETAIL;
        }
    },
    editVideo : (id) => {
        if(id){
            return `/videos/${id}/edit`;
        } else{
            return EDIT_VIDEO;
        }
    },
    deleteVideo : (id) => {
        if(id){
            return `/videos/${id}/delete`;
        } else {
            return DELETE_VIDEO;
        }
    }
}

export default routes;

// // Global
// const HOME = "/";
// const JOIN = "/join";
// const LOGIN = "/login";
// const CONFIRM_ACCOUNT = "/confirm-account";

// // Courses
// const COURSES = "/courses";
// const NEW_COURSES = "/new";
// const MY_COURSES = "/mine";

// // Api Documentation
// const API = "/api";
// const API_DOC = "/documentation";

// // Api V1
// const API_V1 = "/api/v1";
// const BUY = "/buy";
// const REFUND = "/refund";

// // Api V2
// const API_V2 = "/api/v2";
// const REMOVE = "/remove";
// const EDIT = "/edit";

// const routes = {
//     home : HOME,
//     join : JOIN,
//     login : LOGIN,
//     confirmAccount : CONFIRM_ACCOUNT,
//     courses : COURSES,
//     newCourses : NEW_COURSES,
//     myCourses : MY_COURSES,
//     api : API,
//     apiDoc : API_DOC,
//     apiV1 : API_V1,
//     buy : BUY,
//     refund : REFUND,
//     apiV2 : API_V2,
//     remove : REMOVE,
//     edit : EDIT
// }

// export default routes;