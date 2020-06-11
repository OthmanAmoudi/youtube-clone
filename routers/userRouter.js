const express = require("express");
const routes = require("../routes");
const userRouter = express.Router();
const {
  users,
  userDetail,
  editProfile,
  changePassword
} = require("../controllers/userController");

userRouter.get(routes.users, users);
userRouter.get(routes.editProfile, editProfile);
userRouter.get(routes.changePassword, changePassword);
userRouter.get(routes.userDetail, userDetail);

module.exports = userRouter;
