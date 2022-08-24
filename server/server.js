require("dotenv").config();
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const http = require("http");
const cors = require("cors");

const port = process.env.PORT;

///////////// API ROUTES
const roomsApi = require("./routes/api/rooms");
const usersApi = require("./routes/api/users");

/////////////// MODEL
const { User } = require("./models/user_model");
const { Room } = require("./models/room_model");

const mongoUri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}?retryWrites=true&w=majority`;

mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true
}, (err) => {
  if (err) throw err;
  console.log("DB Connected")
})

const server = http.createServer(app);

const socketIO = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000"
  }
});

////////// APPLY MIDDLEWARES
app.use(cors());
app.use(express.json());
app.use("/api/room", roomsApi);
app.use("/api/user", usersApi);

app.use(express.static('client/build'));

const path = require("path");
app.get('/*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client', 'build', 'index.html'))
})


socketIO.on('connection', (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);

  socket.on('message', (data) => {
    socketIO.to(data.roomId).emit('messageResponse', data);
  });

  socket.on('join_room', (data) => {
    socket.join(data);

    Room.findById(data).then((res) => {
      if (res) {
        res.joinedUsers = [...res.joinedUsers, socket.id];
        res.save();
      }
    })

    User.findOneAndUpdate(
      { socketID: socket.id },
      { joinedRoom: data },
      { new: true }
    ).then()
  });

  socket.on('leave_room', (data) => {
    socket.leave(data);

    Room.findById(data).then((res) => {
      if (res) {
        const arr = res.joinedUsers;
        const index = arr.indexOf(socket.id);
        if (index > -1) {
          arr.splice(index, 1);
        }
        res.joinedUsers = arr
        if (res.joinedUsers.length === 0) {
          res.remove();
        } else {
          res.save();
        }
      }

    })

    User.findOneAndUpdate(
      { socketID: socket.id },
      { joinedRoom: "" },
      { new: true }
    ).then()
  })

  socket.on('disconnect', () => {
    console.log(`🔥: ${socket.id} user disconnected`);


    User.findOne({ socketID: socket.id }).then((res) => {
      if (res) {
        if (res.joinedRoom !== "") {
          Room.findById(res.joinedRoom).then((res) => {
            if (res) {
              const arr = res.joinedUsers;
              const index = arr.indexOf(socket.id);
              if (index > -1) {
                arr.splice(index, 1);
              }
              res.joinedUsers = arr
              if (res.joinedUsers.length === 0) {
                res.remove();
              } else {
                res.save();
              }
            }

          })
        }
        res.remove();
      }
    })
  });
});


server.listen(port, () => {
  console.log("Server is running!")
})