const express = require("express");
const router = express.Router();

const movies = require("../movies/movies");

router.use((req, res, next) => {
  console.log("Router🌐");
  next();
});

router.get("/", (req, res) => {
  res.json({ msg: "Movies <3" });
});

router.get("/movies", (req, res) => {
  res.json(movies);
});

module.exports = router;
