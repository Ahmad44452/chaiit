require("dotenv").config();
const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, "Username is required!"],
    trim: true,
    minLength: [3, "Username is too short!"],
    maxLength: [30, "Username is too long!"],
    validate: [
      {
        validator: function (val) {
          return ((/^[A-Za-z0-9_]+$/).test(val));
        },
        message: "Only alphabets, numbers and underscore allowed!"
      },
      {
        validator: function (val) {
          return ((/^[A-Za-z]/).test(val));
        },
        message: "First character must be alphabet"
      }
    ]
  },
  socketID: {
    type: String,
    required: [true, "Socket ID not available!"]
  },
  joinedRoom: {
    type: String,
    default: ""
  }
})

userSchema.statics.isUsernameTaken = async function (username) {
  const user = await this.findOne({ username: username })
  return !!user;
}


const User = mongoose.model("User", userSchema);

module.exports = { User };