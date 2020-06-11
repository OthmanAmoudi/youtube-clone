const home = (req, res) =>
  res.render("home", {
    pageTitle: "Home"
    // videos: [
    //   { title: "sss", description: "ssss" },
    //   { title: "xxxx", description: "xxxx" }
    // ]
  });

const search = (req, res) =>
  res.render("search", {
    pageTitle: "Search Results",
    searchTerm: req.query.term
  });

const videos = (req, res) => res.send("videos");
const uploadVideo = (req, res) =>
  res.render("uploadVideo", { pageTitle: "Upload Video" });
const showVideo = (req, res) => res.send("showVideo DIR");
const editVideo = (req, res) =>
  res.render("editVideo", { pageTitle: "Edit Video" });
const deleteVideo = (req, res) => res.send("deleteVideo DIR");

module.exports = {
  home,
  videos,
  search,
  showVideo,
  editVideo,
  uploadVideo,
  deleteVideo
};
