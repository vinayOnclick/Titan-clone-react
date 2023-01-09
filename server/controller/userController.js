const User = require("../modals/User");
const dotenv = require("dotenv");
dotenv.config();
const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const client = require("twilio")(accountSid, authToken);

exports.userLogin = async (req, res) => {
  const { number } = req.body;
  const newNumber = "+91" + number;
  client.verify.v2.services('VAXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX')
                .verifications
                .create({to: '+917018136348', 
                channel: 'sms',
              from: '+19389991046'})
                .then(verification => console.log(verification.sid));
  

  try {
    res.status(200).send({ message: "OTP Send Successfully" });
  } catch (error) {
    res.status(400).send({ message: error.message });
  }
};
