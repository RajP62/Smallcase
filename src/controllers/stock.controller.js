const express = require('express');
const router = express.Router();
const Stock = require("../models/stock.model");
<<<<<<< HEAD
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
=======

router.get("", async(req,res)=>{
    try {
        const operation = await Stock.find().lean().exec();
        return res.status(200).send(operation);
>>>>>>> 88ba16f97777ab0a68c6691a1c1495faf4798fca
    } catch (e) {
        res.status(500).json({message: "Internal server error"});
    }
});

router.post("", async(req,res)=>{
    try {
        const operation =await Stock.create(req.body);
<<<<<<< HEAD
        let allStocks = await Stock.find().lean().exec();
        client.set("stocks", JSON.stringify(allStocks));
=======
>>>>>>> 88ba16f97777ab0a68c6691a1c1495faf4798fca
        res.status(200).send(operation);
        } catch (e) {
        res.status(500).json({message: "Internal server error"});
    }
});

router.patch("/:id",async(req,res)=>{
    try {
        const operation =await Stock.findByIdAndUpdate(req.params.id,req.body,{new:true});
<<<<<<< HEAD
        let allStocks = await Stock.find().lean().exec();
        client.set("stocks", JSON.stringify(allStocks));
=======
>>>>>>> 88ba16f97777ab0a68c6691a1c1495faf4798fca
        return res.status(200).send(operation);
        } catch (e) {
        res.status(500).json({message: "Internal server error"});
    }
});

router.delete("/:id",async(req,res)=>{
    try {
        const operation = await Stock.findOneAndDelete(req.params.id);
<<<<<<< HEAD
        let allStocks = await Stock.find().lean().exec();
        client.set("stocks", JSON.stringify(allStocks));
=======
>>>>>>> 88ba16f97777ab0a68c6691a1c1495faf4798fca
        return res.status(200).send(operation);

    } catch (e) {
        res.status(500).json({message: "Internal server error"});
    }
});



module.exports = router;