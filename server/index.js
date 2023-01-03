const express = require("express");
const bodyParser = require("body-parser");
// const cors = require("cors");
// const mongoose = require("mongoose");

const app = express();

app.use(express.json());
// app.use(bodyParser.json());
 app.use(bodyParser.urlencoded({ extended: true }));
// app.use(cors());

// mongoose.connect(
//   "mongodb+srv://Shiwani:ZZNFkUnfQAYRhSz8@cluster0.4oxd0be.mongodb.net/test",
//   {
//     useNewUrlParser: true,
//     useFindAndModify: false,
//     useUnifiedTopology: true,
//   }
// );



const port = process.env.PORT || 4000;

app.get("/", (req, res) => res.sendStatus("Its Working"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
