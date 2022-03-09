const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

var corsOptions = {
  origin: 'http://localhost:3000',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}

const routes = require("./routes/api-routes");

app.use("/", cors(corsOptions), routes);

app.listen(3001, () => {
  console.log("Server started on port 3001🌐");
});
