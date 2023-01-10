const User = require("../modals/User");
const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

let OTP, user;

const userRegister = async (req, res) => {
  try {
    const { username, number, email } = req.body;
    const newNumber = "+91" + number;

    const existingUser = await User.findOne({ number });
    if (existingUser) {
      return res.status(400).json({
        message: "User Already Exists",
      });
    }
    user = new User({
      username,
      email,
      number,
    });
    let digits = "0123456789";
    OTP = "";
    for (let i = 0; i < 4; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }

    await client.messages
      .create({
        body: `Your OTP verification code fro ${username} is ${OTP}`,
        messagingServiceSid: "MG15299b4d75631e78602b4ff5e83fbe1c",
        to: { newNumber },
      })
      .then(() =>
        res.status(200).json({
          message: "Message Sent Successfully",
        })
      )
      .done();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const registerVerify = async (req, res) => {
  try {
    const { otp } = req.body;
    if (otp !== OTP) {
      return res.status(400).json({ message: "Incorrect OTP" });
    }
    user = user.save();
    const token = jwt.sign({ id: user._id });
    res.status(200).json({ token, ...user });
    OTP = "";
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const userLogin = async (req, res) => {
  try {
    const { number } = req.body;
    const newNumber = "+91" + number;

    const signInUser = await User.findOne({ number });
    if (signInUser) {
      return res.status(400).json({ message: "This number doesnot exists" });
    }
    let digits = "0123456789";
    OTP = "";
    for (let i = 0; i < 4; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }

    await client.messages
      .create({
        body: `Your OTP verification code fro ${signInUser.username} is ${OTP}`,
        messagingServiceSid: "MG15299b4d75631e78602b4ff5e83fbe1c",
        to: { newNumber },
        timeout: 300000,
      })
      .then(() =>
        res.status(200).json({
          message: "Message Sent Successfully",
        })
      )
      .done();
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const loginVerify = async (req, res) => {
  try {
    const { otp } = req.body;
    if (otp !== OTP) {
      return res.status(400).json({ mesage: " Incorrect OTP" });
    }
    user = user.save();
    user = user.save();
    const token = jwt.sign({ id: user._id });
    res.status(200).json({ token, ...user });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

const userLogout = async (req, res) => {
  try {
    user = user.remove();
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// const verifyOtp = async (req, res) => {
//   const { number } = req.body;
//   const newNumber = "+91" + number;
//   client.verify.v2
//     .services("VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX")
//     .verifications.create({
//       to: { newNumber },
//       channel: "sms",
//       from: "+19389991046",
//     })
//     .then((verification) => console.log(verification.sid));
// };

module.exports = {
  userLogin,
  userRegister,
  registerVerify,
  loginVerify,
  userLogout,
};
