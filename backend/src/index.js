const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

const routes = require("./routes/api-routes");

app.use("/", routes);

app.listen(3001, () => {
  console.log("Server started on port 3001🌐");
});
