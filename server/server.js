const express = require("express");
const http = require("http");
const cors = require("cors");

const app = express();

app.use(cors());
const server = http.createServer(app);

app.get("/", (req, res) => {
  res.send(`
  <html>
    <body>
      <h1>Server is running</h1>
    </body>
  </html>`)
})







server.listen(3001, () => {
  console.log("Server is running!")
})