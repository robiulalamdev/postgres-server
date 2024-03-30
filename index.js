const express = require("express");
const client = require("./config/db");
const app = express();

// require modules
const userRoutes = require("./modules/user/user.route");

client.connect();

app.get("/", (req, res) => {
  res.send("Hello World!");
});

app.use("/api/v1/users", userRoutes);

app.listen(8000, () => {
  console.log("server start");
});
