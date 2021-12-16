const express = require("express");
const router = express.Router();

router.get("/", (req, res) => {
  res.send("aAlii users are here");
});

router.get("/Alireza", (req, res) => {
  res.send("I'm alireza dude");
});




module.exports = router 