const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("main rout");
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/bitch", (req, res) => {
  console.log("Hi bitch");
});

const userRouter = require("./routes/users");

app.use("/users", userRouter);

app.listen(3000);
