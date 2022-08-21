require("dotenv").config();
const express = require("express");
const http = require("http");
const cors = require("cors");

const app = express();
const server = http.createServer(app);


////////// APPLY MIDDLEWARES
app.use(cors());
app.use(express.json());

const socketIO = require("socket.io")(server, {
  cors: {
    origin: "http://localhost:3000"
  }
});

socketIO.on('connection', (socket) => {
  console.log(`⚡: ${socket.id} user just connected!`);

  socket.on('message', (data) => {
    socketIO.emit('messageResponse', data);
  });

  socket.on('disconnect', () => {
    console.log('🔥: A user disconnected');
  });
});

app.get("/", (req, res) => {
  res.send(`
  <html>
    <body>
      <h1>Server is running</h1>
    </body>
  </html>`)
})

app.get("/randomData", (req, res) => {
  res.status(200).json({
    name: "Ahmad",
    age: 18
  })
})




const port = process.env.PORT;

server.listen(port, () => {
  console.log("Server is running!")
})

module.exports = { socketIO }