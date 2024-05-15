const express = require("express");
const ip = require("ip");
const routes = require("./routes/start");
const routes2 = require("./routes/house");
const cors = require("cors");
const ipAddress = ip.address();
const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use("/", routes);
app.use("/", routes2);

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
  console.log(ipAddress);
});
