const express = require("express");
const cors = require("cors");
const path = require("path");
const greenlock = require("greenlock-express");
const app = express();

app.use(
  cors({
    origin: "*",
  })
);
app.use(express.static("cert"));
app.use(express.static(path.join(__dirname, "/build")));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "build/index.html"));
});

app.get("/test", (req, res) => {
  res.json({ name: "steve" });
});

app.get("/ping", (req, res) => {
  res.send("pong");
});

app.listen(8080, () => {
  console.log("서버 실행중");
});

require("greenlock-express")
  .init({
    packageRoot: __dirname,
    configDir: "./greenlock.d",
    maintainerEmail: "sds11609@gmail.com",
  })
  .serve(app);
