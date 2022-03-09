const express = require("express");
const app = express();

const routes = require("./routes/api-routes");

app.use("/", routes);

app.listen(3001, () => {
  console.log("Server started on port 3001🌐");
});
