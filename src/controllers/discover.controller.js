const express = require('express');
const router = express.Router();
const NodeCache = require("node-cache");
// const InvestmentStrategy = require("../models/investmentstrategy.model")

const authenticate = require("../middlewares/authenticate")

const myCache = new NodeCache();

router.get("", async(req,res) => {
    try {
        return res.render("discover")
    } catch (e) {
        return res.status(500).json({message: "Internal server error"})
    }
})

router.get("/auth",authenticate, async(req,res)=>{
    try {
       console.log("dlfkj")
       return res.send("discover");
    } catch (e) {
        res.status(500).json({message:"Internal server error"});
    }
});


// put here authorise

// router.post("",async(req,res)=>{
//     try {
//         const operation =await InvestmentStrategy.create(req.body);
//         res.status(200).send(operation);
//         } catch (e) {
//         res.status(500).json({message: "Internal server error"});
//     }
// });

// router.patch("/:id",async(req,res)=>{
//     try {
//         const operation =await InvestmentStrategy.findByIdAndUpdate(req.params.id,req.body,{new:true});
//         return res.status(200).send(operation);
//         } catch (e) {
//         res.status(500).json({message: "Internal server error"});
//     }
// });

// router.delete("/:id",async(req,res)=>{
//     try {
//         const operation = await InvestmentStrategy.findOneAndDelete(req.params.id);
//         return res.status(200).send(operation);

//     } catch (e) {
//         res.status(500).json({message: "Internal server error"});
//     }
// });


module.exports = router;