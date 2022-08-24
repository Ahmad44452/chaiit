require("dotenv").config();
const mongoose = require("mongoose");

const roomSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Room name is required!"],
    trim: true,
    minLength: [3, "Room name is too short!"],
    maxLength: [20, "Room name is too long!"],
    validate: [
      {
        validator: function (val) {
          return ((/^[A-Za-z0-9 _]+$/).test(val));
        },
        message: "Special characters now allowed!"
      },
      {
        validator: function (val) {
          return ((/^[A-Za-z]/).test(val));
        },
        message: "First character must be alphabet"
      }
    ]
  },
  description: {
    type: String,
    trim: true,
    maxLength: [500, "Description is too long!"],
    validate: {
      validator: function (val) {
        return ((/^[A-Za-z]/).test(val));
      },
      message: "First character must be alphabet"
    },
    default: "No Description"
  },
  joinedUsers: {
    type: [String],
    default: []
  }
})

const Room = mongoose.model("Room", roomSchema);

module.exports = { Room };