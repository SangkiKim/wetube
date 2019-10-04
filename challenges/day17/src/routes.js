const HOME = "/";
const CREATE_VIDEO = "/create";
const VIDEOS_DETAIL = "/:id";
const EDIT_VIDEO = "/:id/edit";
const DELETE_VIDEO = "/:id/delete";
const SEARCH = "/search";

const routes = {
  home: HOME,
  createVideo: CREATE_VIDEO,
  videoDetail: id => {
    if (id) {
      return `/${id}`;
    } else {
      return VIDEOS_DETAIL;
    }
  },
  editVideo: id => {
    if (id) {
      return `/${id}/edit`;
    } else {
      return EDIT_VIDEO;
    }
  },
  deleteVideo: id => {
    if (id) {
      return `/${id}/delete`;
    } else {
      return DELETE_VIDEO;
    }
  },
  search: SEARCH
};

export default routes;
