const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("main rout");
  res.send("here is Home man");
});

app.get("/bitch", (req, res) => {
  console.log("Hi bitch");
  res.render("index", { text: "bastered" });
});

const userRouter = require("./routes/users");

app.use("/users", userRouter);

app.listen(3000);
