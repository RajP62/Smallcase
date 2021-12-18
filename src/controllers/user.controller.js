const express = require("express");

const User = require("../models/user.model");

const authenticate = require("../middlewares/authenticate");

const router = express.Router();

router.get("/:id",authenticate, async(req,res) => {
    try {
        const watchlist = await User.findById(req.params.id).populate("watchlist").populate("smallcase").lean().exec();

        return res.send(watchlist);
    } catch (e) {
        return res.status(500).json({status: "failed", message: e.message})
    }
})


module.exports = router;