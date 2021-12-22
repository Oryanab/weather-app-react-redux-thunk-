const express = require("express");

const path = require("path");
const PORT = process.env.PORT || 8080;

const app = express();

app.use(express.static("build"));
app.get("/", function (req, res) {
  // serve main path as static file
  res.sendFile(path.resolve("../build/index"));
});

app.listen(PORT, () =>
  console.log(`app listening at http://localhost:${PORT}`)
);
