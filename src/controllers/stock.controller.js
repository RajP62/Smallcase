const express = require('express');
const router = express.Router();
const Stock = require("../models/stock.model");
const client = require("../config/redis");

router.get("", async(req,res)=>{
    try {
        client.get("stocks", async(err, stocks)=>{
            if(stocks && stocks!=null){
                return res.send(JSON.parse(stocks));
            }
            const operation = await Stock.find().lean().exec();
            client.set("stocks", JSON.stringify(operation));
            return res.status(200).send(operation);
        });
    } catch (e) {
        res.status(500).json({message: "Internal server error"});
    }
});

router.post("", async(req,res)=>{
    try {
        const operation =await Stock.create(req.body);
        let allStocks = await Stock.find().lean().exec();
        client.set("stocks", JSON.stringify(allStocks));
        res.status(200).send(operation);
        } catch (e) {
        res.status(500).json({message: "Internal server error"});
    }
});

router.patch("/:id",async(req,res)=>{
    try {
        const operation =await Stock.findByIdAndUpdate(req.params.id,req.body,{new:true});
        let allStocks = await Stock.find().lean().exec();
        client.set("stocks", JSON.stringify(allStocks));
        return res.status(200).send(operation);
        } catch (e) {
        res.status(500).json({message: "Internal server error"});
    }
});

router.delete("/:id",async(req,res)=>{
    try {
        const operation = await Stock.findOneAndDelete(req.params.id);
        let allStocks = await Stock.find().lean().exec();
        client.set("stocks", JSON.stringify(allStocks));
        return res.status(200).send(operation);

    } catch (e) {
        res.status(500).json({message: "Internal server error"});
    }
});



module.exports = router;