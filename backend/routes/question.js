const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const Question = require("../models/Question");
const passport = require("passport");
// const passportLocal = require("passport-local").Strategy;

//@route POST api/question
//@desc Make a new question
//@access Private
router.post(
  "/",
  check("question", "Question is required"),
  async (req, res) => {
    console.log(req);
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ errors: errors.array() });
    }
    try {
      const newQuestion = new Question({
        question: req.body.question,
      });

      const ques = await newQuestion.save();

      res.json(ques);
    } catch (err) {
      console.error(err);
    }
  }
);

module.exports = router;
