const express = require("express");

const router = express.Router();

router.get("", async(req,res) => {
    console.log("entered request");
    try {
        return res.render('login');
    } catch (e) {
        console.log("entered catch")
        return res.status(500).send(e.message);
    }
})

module.exports = router;