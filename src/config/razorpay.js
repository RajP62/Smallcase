const Razorpay = require('razorpay');
require("dotenv").config();

const razorpay = new Razorpay({
    key_id : process.env.RZP_KEY_ID,
    key_secret : process.env.RZP_KEY_SECRET
});

module.exports = razorpay;