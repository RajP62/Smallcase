const express = require("express");
const router = express.Router();

router.get("", async(req,res)=>{
    try {
        res.status(200).render("search");
    } catch (e) {
        res.status(500).json({message: "Internal server error"});
    }
})

module.exports = router;