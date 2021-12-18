const express = require("express");
const router = express.Router();
const Smallcase = require("../models/smallcase.model");
const client = require('../config/redis');

router.get("", async(req,res)=>{
    try {
        const page = +req?.query?.page || 1;
        const size = +req?.query?.size || 10;
        const investmentrange = +req?.query?.investmentrange || Infinity;
        const volatility = req?.query?.volatility || null;
        const strategy = req?.query?.strategy || null;  
        const skip = (page-1)*size;
        if(!volatility && !strategy){
            const data =await Smallcase.find({"stats.minInvestAmount":{$lt:investmentrange}}).populate({path:"info",populate: ["type"]}).skip(skip).limit(size).lean().exec();
            return res.render("allsmallcase",{data});
        }
        else if(!volatility){
            let data =await Smallcase.find({"stats.minInvestAmount":{$lt:investmentrange}, "info.investmentStrategy":strategy}).populate({path:"info",populate: ["type"]}).skip(skip).limit(size).lean().exec();
            return res.render("allsmallcase",{data});
        }
        else if(!strategy){
            let data =await Smallcase.find({"stats.minInvestAmount":{$lt:investmentrange}, "stats.ratios.riskLabel":volatility}).populate({path:"info",populate: ["type"]}).skip(skip).limit(size).lean().exec();
            return res.render("allsmallcase",{data});
        }
        else{
            let data =await Smallcase.find({"stats.minInvestAmount":{$lt:investmentrange}, "info.investmentStrategy":strategy,"stats.ratios.riskLabel":volatility}).populate({path:"info",populate: ["type"]}).skip(skip).limit(size).lean().exec();
            return res.render("allsmallcase",{data});
        }
        /*const data =await Smallcase.find({$or:[{"stats.ratios.riskLabel":{$eq:volatility}},{[volatility]:{type:'object'}}],"stats.minInvestAmount":{$lt:investmentrange}}).populate({path:"info",populate: ["type","investmentStrategy"]}).skip(skip).limit(size).lean().exec();
        return res.render("allsmallcase",{data});*/

    } catch (e) {
        res.status(500).json({message: e.message});
    }
});

router.get("/all", async(req,res)=>{
    try {
        client.get("allsmallcases",async(err, smallcases)=>{
            if(err) return res.status(400).json({message:"Bad request found"});
            if(smallcases && smallcases!=null){
                return res.send(JSON.parse(smallcases));
            }
            
        const data =await Smallcase.find().populate({path:"info",populate: ["type"]}).lean().exec();
        client.set("allsmallcases",JSON.stringify(data));
        return res.status(200).send(data);
        });

    } catch (e) {
        res.status(500).json({message: e.message});
    }
});

router.post("", async(req,res)=>{
    try {
        const operation =await Smallcase.create(req.body);

        let allSmallcases = await Smallcase.find().lean().exec();
        client.set("allsmallcases", JSON.stringify(allSmallcases));
        return res.status(200).send(operation);
        } catch (e) {
        res.status(500).json({message: e});
    }
});

router.patch("/:id",async(req,res)=>{
    try {
        const operation =await Smallcase.findByIdAndUpdate(req.params.id,req.body,{new:true});

        let allSmallcases = await Smallcase.find().lean().exec();
        client.set("allsmallcases", JSON.stringify(allSmallcases));
        return res.status(200).send(operation);
        } catch (e) {
        res.status(500).json({message: "Internal server error"});
    }
});

router.delete("/:id",async(req,res)=>{
    try {
        const operation = await Smallcase.findOneAndDelete(req.params.id);

        let allSmallcases = await Smallcase.find().lean().exec();

        client.set("allsmallcases", JSON.stringify(allSmallcases));
        return res.status(200).send(operation);

    } catch (e) {
        res.status(500).json({message: "Internal server error"});
    }
});


module.exports = router;
