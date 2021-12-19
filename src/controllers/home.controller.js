const express =require('express');

const router = express.Router();

router.get("", async(req,res)=>{
    try {

        return res.status(200).render("index",{
            
        });
    } catch (e) {
        res.status(500).json({message:"Internal server error"});
    }
});

module.exports = router;