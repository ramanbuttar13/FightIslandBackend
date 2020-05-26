const express = require("express");
const logger = require("morgan");
const bodyParser = require("body-parser");

const http = require("http");

const app = express();

app.use(logger("dev"));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

// const port = parseInt(process.env.PORT, 10) || 8000;
const port = process.env.PORT || 8000;

const blogsRoutes = require("./routes/blogs/blogs");
const usersRoutes = require("./routes/users/users");
app.use(blogsRoutes);
app.use(usersRoutes);

app.set("port", port);
const server = http.createServer(app);
server.listen(port, () => {
  console.log("listening on port 8000");
});

module.exports = app;
