const express = require("express");
const app = express();

app.set("view engine", "ejs");

app.get("/", (req, res) => {
  console.log("main rout");
  res.sendFile("./views/index.html", { root: __dirname });
});

app.get("/bitch", (req, res) => {
  console.log("Hi bitch");
  res.sendFile("./views/bitch.html", { root: __dirname });
});

const userRouter = require("./routes/users");

app.use("/users", userRouter);


app.use((req, res) =>
{
  console.log("404 err");
  res.status(404)
})

app.listen(3000);
