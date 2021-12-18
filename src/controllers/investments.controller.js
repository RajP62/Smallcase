const express = require("express");

const User = require("../models/user.model");

const authenticate = require("../middlewares/authenticate");

const router = express.Router();

router.get("", async(req,res)=>{
    try {
        return res.render("investments");
    } catch (e) {
        res.status(500).json({message:"Internal server error"});
    }
});

router.get("/:id",authenticate, async(req,res) => {
    try {
        const user = await User.findOne({_id: req.params.id}).populate("smallcase").lean().exec();

        return res.send(user);
    } catch (e) {
        return res.status(500).json({status: "failed", message: e.message})
    }
})


module.exports = router;
