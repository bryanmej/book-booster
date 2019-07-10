const express = require("express");
const router = express.Router();
const passport = require("passport");
const bcrypt = require("bcrypt");
const User = require("../models/User");
const protected = require("./protectedRoutes");

/* GET home page */
router.get("/", (req, res, next) => {
  res.render("index");
});

///////signup
router.get("/signup", (req, res, next) => {
  res.render("auth/signup");
});

<<<<<<< Updated upstream
router.post("/signup", async (req, res, next) => {
  const username = req.body.username;
  const password = req.body.password;
  const salt = bcrypt.genSaltSync(10);
  const hashPass = bcrypt.hashSync(password, salt);
=======
router.get('/library', (req, res, next) => {
  res.render('auth/library')
})

router.post('/signup', async (req, res, next) => {
  const username = req.body.username
  const password = req.body.password
  const salt     = bcrypt.genSaltSync(10)
  const hashPass = bcrypt.hashSync(password, salt)
>>>>>>> Stashed changes

  const users = await User.find({ username });

  if (users.length !== 0) {
    return res.render("auth/signup", {
      errorMessage: "User already exists"
    });
  }

  if (username === "" || password === "") {
    res.render("auth/signup", {
      errorMessage: "Indicate a username and a password to sign up"
    });
    return;
  }

  User.create({
    username,
    password: hashPass
  })
    .then(() => {
      res.redirect("/login");
    })
    .catch(() => {
      console.log(error);
    });
});

///////Login
router.get("/login", (req, res, next) => {
  res.render("auth/login", { message: req.flash("error") });
});

router.post(
  "/login",
  passport.authenticate("local", {
    successRedirect: "/profile",
    failureRedirect: "/login",
    failureFlash: true,
    passReqToCallback: true
  })
);

module.exports = router;
