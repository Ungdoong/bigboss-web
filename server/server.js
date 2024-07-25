const express = require("express");
const app = express();
const port = 8080;

const cors = require("cors");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/hello", (req, res) => {
  res.send("Hello world");
});

const userRouter = require("./router/user");

app.use("/user", userRouter);

app.listen(port, () => {
  console.log(`Bigboss-Web app listening at http://localhost:${port}`);
});
