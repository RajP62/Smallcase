const razorpay = require('../config/razorpay');
const express = require("express");
const router = express.Router();

router.post("/createorder", async(req,res)=>{
    try {
        let options = {
<<<<<<< HEAD
            amount : req.body.price,
=======
            amount : 50000,
>>>>>>> 88ba16f97777ab0a68c6691a1c1495faf4798fca
            currency : "INR"
        }

        razorpay.orders.create(options, function(err, order){
            res.json(order);
        })
    } catch (e) {
        res.status(500).json({message: "Internal server error"});
    }
<<<<<<< HEAD
});

router.post("/result", async(req,res)=>{
    try {
        console.log(req.body);
        return res.render("congrats");
    } catch (e) {
        res.status(500).json({message: "Internal server error"});
    }
=======
>>>>>>> 88ba16f97777ab0a68c6691a1c1495faf4798fca
})

module.exports = router;