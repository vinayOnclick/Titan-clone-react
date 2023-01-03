const mongoose = require("mongoose");
const ObjectID = mongoose.Schema.Types.ObjectId;

const ItemSchema = new mongoose.Schema({
  owner: {
    type: ObjectID,
    required: true,
    ref: "User",
  },
  name: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
  },
});
const Item = mongoose.model("item", ItemSchema);
module.exports = Item;
