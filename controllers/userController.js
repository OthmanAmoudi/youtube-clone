const getJoin = (req, res) => res.render("join", { pageTitle: "join us" });
const postJoin = (req, res) => res.render("join");
const login = (req, res) =>
  res.render("login", { pageTitle: "Log in to your account" });
const logout = (req, res) => res.send("logout DIR");
const users = (req, res) => res.render("users", { pageTitle: "Users" });
const userDetail = (req, res) => res.send("userDetail DIR");
const editProfile = (req, res) =>
  res.render("editProfile", { pageTitle: "Edit Profile" });
const changePassword = (req, res) =>
  res.render("changePassword", { pageTitle: "Change Password" });

module.exports = {
  getJoin,
  postJoin,
  login,
  logout,
  users,
  userDetail,
  editProfile,
  changePassword
};
