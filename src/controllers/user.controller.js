const express = require("express");

const User = require("../models/user.model");

const router = express.Router();

router.get("/", async(req,res) => {
    try {
        const users = await User.find().lean().exec();

        return res.send(users);
    } catch (e) {
        return res.status(500).json({status: "failed", message: e.message})
    }
})

module.exports = router;