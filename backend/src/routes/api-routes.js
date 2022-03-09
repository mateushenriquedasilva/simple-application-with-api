const express = require("express");
const router = express.Router();

router.use((req, res, next) => {
  console.log("Router🌐");
  next();
});

router.get('/', (req, res) => {
  res.json(
    {msg: "OK!"}
  )
})

router.get("/users", (req, res) => {
  res.json({
    data: [
      {
        id: 1,
        name: "Matheus H",
      },
      {
        id: 2,
        name: "Sônia M"
      },
      {
        id: 3,
        name: "Ana C"
      },
      {
        id: 4,
        name: "Karoline C"
      },
      {
        id: 5,
        name: "Isabel C"
      }
    ],
  });
});

module.exports = router;
