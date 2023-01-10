const mongoose = require("mongoose");
const validator = require("validator");

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    lowercase: true,
    validate(value) {
      if (!validator.isEmail(value)) {
        throw new Error("Email is invalid");
      }
    },
  },
  number: {
    type: Number,
    required: true,
  },
  password : {
    type: String,
    required: true,
  }
});

const User = mongoose.model("User", userSchema);
module.exports = User;
