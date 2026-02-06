const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.send("Legacy On-Prem Application");
});

app.listen(3000, () => {
  console.log("Legacy app running");
});
