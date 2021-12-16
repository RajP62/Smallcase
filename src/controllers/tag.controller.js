const express = require('express');

const router = express.Router();

const Tag = require("../models/tag.model");

router.get("", async(req,res)=>{
    try {
        const operation =await Tag.find().lean().exec();
        return res.status(200).send(operation);
    } catch (e) {
        res.status(500).json({message:"Internal server error"});
    }
});

router.post("", async(req,res)=>{
    try {
        const operation = await Tag.create(req.body);
        return res.status(200).send(operation);
    } catch (e) {
        return res.status(500).json({message: e.message});
    }
});

router.patch("/:id",async(req,res)=>{
    try {
        const operation =await Tag.findByIdAndUpdate(req.params.id,req.body,{new:true});
        return res.status(200).send(operation);
        } catch (e) {
        res.status(500).json({message: "Internal server error"});
    }
});


router.delete("/:id",async(req,res)=>{
    try {
        const operation = await Tag.findOneAndDelete(req.params.id);
        return res.status(200).send(operation);

    } catch (e) {
        res.status(500).json({message: "Internal server error"});
    }
});

module.exports = router