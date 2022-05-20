//code from express.js website - updated the routes

const express = require("express");
const { send } = require("express/lib/response");
const app = express();
const port = 3000;

app.get("/", (req, res) => res.send("Hello, World"));

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
