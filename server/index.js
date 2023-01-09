const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bodyParser = require("body-parser");
const productRoute = require("./routes/productRoute");
const userRoute = require("./routes/userRoute");
const Product = require("./modals/Product");
const dotenv = require("dotenv");
dotenv.config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client =  require("twilio")(accountSid, authToken);

mongoose.set("strictQuery", true);

mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected");
  })
  .catch((error) => {
    console.log("Cannot connect to database");
  });

const app = express();

app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use("/api/products", productRoute);
app.use("/api/users", userRoute);

const port = process.env.PORT;


app.get("/", (req, res) => {
  sendTextMessage();
  res.send("Its Working");

})


app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});


function sendTextMessage() {
  client.messages
  .create({ 
    body: 'Hello from node',
    to :'+917018136348',
    from : '+19389991046'
  }).then(message => console.log(message))
  .catch((error) => console.log(error))


}
