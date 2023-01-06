const mongoose = require('mongoose')
const ObjectID = mongoose.Schema.Types.ObjectId;

const ProductSchema = new mongoose.Schema({
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
  productPictures: [
    {
      img: {
        type: String,
      },
    },
  ],
  reviews: [
    {
      review: String,
    },
  ],
  createdBy: {
    type: ObjectID,
  },
  updatedAt: Date,
});
const Product = mongoose.model("Product", ProductSchema);

module.exports = Product;
