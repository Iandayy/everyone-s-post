require("dotenv").config();

const express = require("express");
const app = express();
const port = process.env.PORT || 8080;
const cors = require("cors");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const methodOverride = require("method-override");

const Post = require("../models/post");

const post = require("./router/post");
const auth = require("./router/auth");
const mypage = require("./router/mypage");

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("Open"))
  .catch((err) => console.log("Error", err));

app.use(cors());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(cookieParser("secret"));
app.use(methodOverride("_method"));

app.use("/", post);
app.use("/", auth);
app.use("/", mypage);

app.get("/", (req, res) => {
  res.send("ok");
});

app.get("/posts", async (req, res) => {
  try {
    const posts = await Post.find({});
    res.json(posts);
  } catch (err) {
    console.log("err", err);
  }
});

app.listen(port, (req, res) => {
  console.log("App is listening on port 8080");
});
