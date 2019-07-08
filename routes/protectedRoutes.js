const express = require("express");
const router = express.Router();
const ensureLogin = require("connect-ensure-login");
const Book =
  //Logout
  router.get("/logout", (req, res) => {
    req.logout();
    res.redirect("/");
  });

//Profile
router.get("/profile", ensureLogin.ensureLoggedIn(), (req, res) => {
  res.render("protected/profile", { user: req.user });
});

router.post("/profile", ensureLogin.ensureLoggedIn(), (req, res) => {});

//Library
router.get("/library", ensureLogin.ensureLoggedIn(), (req, res) => {
  res.render("protected/library", { user: req.user });
});

module.exports = router;
