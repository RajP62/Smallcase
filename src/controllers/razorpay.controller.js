const razorpay = require('../config/razorpay');
const express = require("express");
const router = express.Router();

router.post("/createorder", async(req,res)=>{
    try {
        let options = {
            amount : 50000,
            currency : "INR"
        }

        razorpay.orders.create(options, function(err, order){
            res.json(order);
        })
    } catch (e) {
        res.status(500).json({message: "Internal server error"});
    }
})

module.exports = router;