const express = require("express");
const bodyParser = require("body-parser");

const router = express.Router();

const movies = require("../movies/movies");

router.use(bodyParser.json());
router.use(bodyParser.urlencoded({ extended: true }));

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

router.post("/addmovie", (req, res) => {
  if(req.body.nome && req.body.id && req.body.ano) {
    movies.push(req.body)
    res.send("Movie Add")
  } else {
    res.send("Movie No Add")
  }
});

module.exports = router;
