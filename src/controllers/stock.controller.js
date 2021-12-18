const express = require('express');
const router = express.Router();
const Stock = require("../models/stock.model");

router.get("", async(req,res)=>{
    try {
        const operation = await Stock.find().lean().exec();
        return res.status(200).send(operation);
    } catch (e) {
        res.status(500).json({message: "Internal server error"});
    }
});

router.post("", async(req,res)=>{
    try {
        const operation =await Stock.create(req.body);
        res.status(200).send(operation);
        } catch (e) {
        res.status(500).json({message: "Internal server error"});
    }
});

router.patch("/:id",async(req,res)=>{
    try {
        const operation =await Stock.findByIdAndUpdate(req.params.id,req.body,{new:true});
        return res.status(200).send(operation);
        } catch (e) {
        res.status(500).json({message: "Internal server error"});
    }
});

router.delete("/:id",async(req,res)=>{
    try {
        const operation = await Stock.findOneAndDelete(req.params.id);
        return res.status(200).send(operation);

    } catch (e) {
        res.status(500).json({message: "Internal server error"});
    }
});



module.exports = router;