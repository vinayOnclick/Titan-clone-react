const mongoose = require("mongoose");
const ObjectID = mongoose.Schema.Types.ObjectId;

const ProductSchema = new mongoose.Schema({
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
  offers: {
    type: Number,
  },
  productPictures : [
    {
      img : {
        type: String
      }
    }
  ],
  reviews: [
    {
      userId: ObjectID,
      ref: 'User',
      review: String
    }
  ],
  createdBy : {
    type: ObjectID,
    ref: 'User'
  },
  updatedAt : Date,
});
const Product = mongoose.model("Product", ProductSchema);
module.exports = Product;
