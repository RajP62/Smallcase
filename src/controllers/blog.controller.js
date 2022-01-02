const express = require("express");
const router = express.Router();
const axios = require('axios');
// const blogJs = require('../public/js/blog');


router.get("", async(req,res)=>{
    try {
        axios.get(`https://newsapi.org/v2/top-headlines?country=in&category=business&apiKey=0f2fb6533d144f24a288ed58d4ef8244`).then(({data:{articles}})=>{
            return res.render("blog",{articles});
        });

        // console.log(articles);
    } catch (e) {
        return res.status(500).json({message: "Internal server error"});
    }
});


module.exports = router;