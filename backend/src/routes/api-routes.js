const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  console.log("Router🌐");
  next();
});

router.get("/", (req, res) => {
  res.json({
    data: [
      {
        name: "Matheus H",
      },
      {
        name: "Sônia M"
      },
      {
        name: "Ana C"
      },
      {
        name: "Karoline C"
      },
      {
        name: "Isabel C"
      }
    ],
  });
});

module.exports = router;
