const express = require("express");
const mongoose = require('mongoose')
const bodyParser = require("body-parser");
const userRouter = ('./routes/User')
const itemRouter = ('./routes/Item')
const cartRouter = ('./routes/Cart')

require('./database/db')

mongoose.connect(`${process.env.MONGODB_URL}`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Database Connected')
})

const app = express();

app.use(express.json());
 app.use(bodyParser.urlencoded({ extended: false }));
 app.use(bodyParser.json())
 app.use(userRouter);
 app.use(itemRouter);
 app.use(cartRouter);



const port = process.env.PORT;

app.get("/", (req, res) => res.sendStatus("Its Working"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
