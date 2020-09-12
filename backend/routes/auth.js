const express = require("express");
const router = express.Router();
const bcrypt = require("bcryptjs");
const { check, validationResult } = require("express-validator");
const User = require("../models/User");
const passport = require("passport");
// const passportLocal = require("passport-local").Strategy;

//@route POST api/auth/login
//@desc Login a user
//@access Public
router.post(
  "/login",
  [
    check("email", "Email is required").isEmail(),
    check(
      "password",
      "Please enter a passwird with length atleast 6"
    ).isLength({ min: 6 }),
  ],
  async (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    try {
      passport.authenticate("local", (err, user, info) => {
        if (err) throw err;
        if (!user) res.send("No User Exists");
        else {
          req.logIn(user, (err) => {
            if (err) throw err;
            res.send("Successfully Authenticated");
            // console.log(req.user);
          });
        }
      })(req, res, next);
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

//@route POST api/auth/register
//@desc Register a user
//@access Public
router.post(
  "/register",
  [
    check("name", "Name is required").not().isEmpty(),
    check("email", "Email is required").isEmail(),
    check(
      "password",
      "Please enter a passwird with length atleast 6"
    ).isLength({ min: 6 }),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }

    const { name, email, password, address } = req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    try {
      const newUser = new User({
        name: name,
        email: email,
        address: address,
        password: hashedPassword,
      });
      await newUser.save();
      res.send("User Created");
    } catch (err) {
      console.error(err.message);
      res.status(500).send("Server error");
    }
  }
);

//@route POST api/auth/logout
//@desc Lougout a user
//@access Public
router.get("/logout", async (req, res) => {
  await req.logout();
  return res.status(200).json({
    msg: "Successfully logged out",
  });
  // res.redirect("/");
});

//@route GET api/auth/getuser
//@desc Get user data
//@access Public
router.get("/getuser", (req, res) => {
  res.send(req.user);
});

module.exports = router;
