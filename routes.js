// GLOBAL
const HOME = "/";
const JOIN = "/join";
const LOGIN = "/login";
const LOGOUT = "/logout";
const SEARCH = "/search";

// USERS
// @prefix: /users/{route}
const USERS = "/users";
const USER_DETAIL = "/:id";
const EDIT_PROFILE = "/edit-profile";
const CHANGE_PASSWORD = "/change-password";

// VIDOES
// @prefix: /videos/{route}
const VIDOES = "/videos";
const UPLOAD = "/upload";
const VIDOE_DETAIL = "/:id";
const VIDEO_EDIT = "/:id/edit";
const VIDEO_DELETE = "/:id/delete";

//
module.exports = {
  home: HOME,
  search: SEARCH,
  join: JOIN,
  login: LOGIN,
  logout: LOGOUT,
  users: USERS,
  userDetail: USER_DETAIL,
  editProfile: EDIT_PROFILE,
  changePassword: CHANGE_PASSWORD,
  videos: VIDOES,
  upload: UPLOAD,
  vidoeDetail: VIDOE_DETAIL,
  videoEdit: VIDEO_EDIT,
  videoDelete: VIDEO_DELETE
};
