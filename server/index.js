//code from express.js website - updated the routes

const express = require("express");
const app = express();
const port = 3000;

var bodyParser = require("body-parser");

app.use(bodyParser.json()); // extracts JSON from the body part of the apps requests
app.use(function (re, req, res, next) {
  res.header("Access-Control-Allow-Origin", "*"); // need this custom middleware to disable local development access.
  res.header("Access-Control-Allow-Headers", "Content-Type");
  next();
});

// added async keywords to interact with dBase and webscrapers
app.get("/influencers", async (req, res) => {
  const influencers = [
    { name: "Simple Electronics", img: "https://" },
    { name: "Coreteks", img: "https://" },
    { name: "ThriftyAV", img: "https://" },
  ];
  // todo: GET from DB
  res.send(influencers);
});

app.post("/influencers", async (req, res) => {
  console.log(req.body);
});

// also requires a POST route to get a new influencer
app.post("/influencers", async (req, res) => {
  console.log(req, body);
  // todo: scrape channels
  // todo: Add to dBase
  res.send("success");
});

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
