require("dotenv").config();
const express = require("express");
let router = express.Router();

///////////// MODEL
const { User } = require("../../models/user_model");

router.route("/signin").post(async (req, res) => {
  try {
    if (await User.isUsernameTaken(req.body.username)) {
      // throw "Sorry username is taken!";
      return res.status(400).json({ message: "Sorry username is taken!" });
    }

    const user = new User({
      username: req.body.username,
      socketID: req.body.socketID
    })

    const doc = await user.save();

    res.status(200).json(doc);

  } catch (error) {
    res.status(400).json({
      message: "Error",
      error: error
    })
  }
})

router.route("/test").get((req, res) => {
  res.status(200).json({ message: "USer route working" });
})





module.exports = router;