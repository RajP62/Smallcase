const razorpay = require('../config/razorpay');
const express = require("express");
const router = express.Router();

router.post("/createorder", async(req,res)=>{
    try {
        let options = {
            amount : req.body.price,
            currency : "INR"
        }

        razorpay.orders.create(options, function(err, order){
            res.json(order);
        })
    } catch (e) {
        res.status(500).json({message: "Internal server error"});
    }
});

router.post("/result", async(req,res)=>{
    try {
        console.log(req.body);
        return res.render("congrats");
    } catch (e) {
        res.status(500).json({message: "Internal server error"});
    }
})

module.exports = router;