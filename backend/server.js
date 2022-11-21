const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const cors = require("cors");
const bodyParser = require("body-parser");
const path = require("path");

const postRoutes = require("./routes/instaCloneRoute");

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static(path.join(__dirname, "../build")));

app.use("/api/posts", postRoutes);

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../build"));
});

mongoose.connect(process.env.mongoURI, {}, () => {
  console.log("DB connected");
  app.listen(PORT, () => {
    console.log(`Server is up and running at http://localhost:${PORT}`);
  });
});
