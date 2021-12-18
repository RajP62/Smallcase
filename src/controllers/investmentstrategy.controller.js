const InvestmentStrategy = require("../models/investmentstrategy.model");
const express = require('express');
const router = express.Router();

router.get("", async(req,res)=>{
    try {
        const operation =await InvestmentStrategy.find().lean().exec();
        return res.status(200).send(operation);
    } catch (e) {
        res.status(500).json({message:"Internal server error"});
    }
});

router.post("", async(req,res)=>{
    try {
        const operation =await InvestmentStrategy.create(req.body);
        res.status(200).send(operation);
        } catch (e) {
        res.status(500).json({message: "Internal server error"});
    }
});

router.patch("/:id",async(req,res)=>{
    try {
        const operation =await InvestmentStrategy.findByIdAndUpdate(req.params.id,req.body,{new:true});
        return res.status(200).send(operation);
        } catch (e) {
        res.status(500).json({message: "Internal server error"});
    }
});

router.delete("/:id",async(req,res)=>{
    try {
        const operation = await InvestmentStrategy.findOneAndDelete(req.params.id);
        return res.status(200).send(operation);

    } catch (e) {
        res.status(500).json({message: "Internal server error"});
    }
});


module.exports = router;