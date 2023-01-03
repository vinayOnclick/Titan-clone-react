const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");

const app = express();
const PORT = 4000;

app.use(express.json());

mongoose.connect("mongodb+srv://Shiwani:ZZNFkUnfQAYRhSz8@cluster0.4oxd0be.mongodb.net/test", {
  useNewUrlParser: true,
  useFindAndModify: false,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error: "));
db.once("open", function () {
  console.log("Connected successfully");
});

const port = process.env.PORT || 4000

app.get("/api", (req, res) => res.sendStatus("Its Working"));

app.listen(port, () => {
  console.log(`Server running on ${port}`);
});
