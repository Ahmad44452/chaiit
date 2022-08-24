require("dotenv").config();
const express = require("express");
let router = express.Router();

///////////// MODEL
const { Room } = require("../../models/room_model");
const { User } = require("../../models/user_model");

router.route("/create").post(async (req, res) => {
  try {
    const room = new Room({
      name: req.body.name,
      description: req.body.description || "No description available"
    })

    const doc = await room.save();

    res.status(200).send(doc);
  } catch (error) {
    res.status(400).json({
      message: "Error",
      error: error
    })
  }
})

router.route("/getAll").get(async (req, res) => {
  try {
    const rooms = await Room.find();

    res.status(200).json(rooms)
  } catch (error) {
    res.status(400).json({
      message: "Error",
      error: error
    })
  }
})

router.route("/getRoomData/:roomId").get(async (req, res) => {
  try {

    const room = await Room.findById(req.params.roomId);

    if (!room || room.length === 0) {
      return res.status(400).json({ message: 'Room not found' });
    }

    res.status(200).json(room);
  } catch (error) {
    res.status(400).json({
      message: "Error",
      error: error
    })
  }
})

router.route("/getConnectedUsers/:roomId").get(async (req, res) => {
  try {
    const room = await Room.findById(req.params.roomId);

    if (!room || room.length === 0) {
      return res.status(400).json({ message: 'Room not found' });
    }

    const arr = await Promise.all(room.joinedUsers.map(async (item) => {
      const userToPush = await User.findOne({ socketID: item })
      return userToPush.username
    }));

    res.status(200).json(arr);
  } catch (error) {
    res.status(400).json({
      message: "Error",
      error: error
    })
  }
})

module.exports = router;