const express = require("express");

const User = require("../models/user.model");

const authenticate = require("../middlewares/authenticate");
const { auth } = require("../config/redis");

const router = express.Router();

router.get("/:id",authenticate, async(req,res) => {
    try {
        const watchlist = await User.findById(req.params.id).populate("watchlist").populate("smallcase").lean().exec();

        return res.send(watchlist);
    } catch (e) {
        return res.status(500).json({status: "failed", message: e.message})
    }
});

router.patch("/:id",authenticate, async(req,res)=>{
    try {
        const user = await User.findByIdAndUpdate(req.params.id, req.body,{new:true}).populate('smallcase').lean().exec();
        return res.status(200).send(user);
        
    } catch (e) {
        return res.status(500).json({message: e.message});
    }
})

module.exports = router;