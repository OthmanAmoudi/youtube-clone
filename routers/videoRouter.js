const express = require("express");
const routes = require("../routes");

const {
  videos,
  uploadVideo,
  editVideo,
  deleteVideo,
  showVideo
} = require("../controllers/videoController");

const videoRouter = express.Router();

videoRouter.get(routes.videos, videos);
videoRouter.get(routes.upload, uploadVideo);
videoRouter.get(routes.vidoeDetail, showVideo);
videoRouter.get(routes.videoDelete, deleteVideo);
videoRouter.get(routes.videoEdit, editVideo);

module.exports = videoRouter;
