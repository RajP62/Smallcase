const express = require("express");
const router = express.Router();
const Smallcase = require("../model/smallcase.model");

router.post("", async(req,res)=>{
    try {
        const operation = await Smallcase.create(req.body);
        return res.status(200).send(operation);
    } catch (e) {
        return res.status(500).json({message: e.message});
    }
})


module.exports = router;
