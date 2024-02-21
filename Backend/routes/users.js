const express = require("express");
const wrapAsync = require("../utils/wrapAsync");

const User = require("../models/user");
const passport = require("passport");

const userControllers = require("../controllers/users");
const router = express.Router();

// signup
router
  .route("/signup")
  .get(userControllers.renderSignup)
  .post(wrapAsync(userControllers.signup));

// login
router
  .route("/login")
  .get(userControllers.renderLogin)
  .post(
    passport.authenticate("local", {
      failureRedirect: "/login",
    }),
    userControllers.login
  );

router.get("/logout", userControllers.logout);

module.exports = router;
