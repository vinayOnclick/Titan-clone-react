const express = require('express')
const mongoose = require('mongoose')
const cors = require('cors')
const bodyParser = require('body-parser')
const router = require('./routes/productRoute')
const Product = require('./modals/Product')
require('./database/db')

mongoose.connect(`mongodb+srv://Shiwani:ZZNFkUnfQAYRhSz8@cluster0.4oxd0be.mongodb.net/test`, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(() => {
  console.log('Database Connected')
}).catch((error) => {
  console.log('Cannot connect to database')
})

const app = express();

app.use(express.json());
 app.use(bodyParser.urlencoded({ extended: false }));
 app.use(bodyParser.json())
 app.use(cors())
 app.use('/api/product', router)
 console.log(router)




const port = process.env.PORT || 4000;

app.get("/", (req, res) => res.send("Its Working"));

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
