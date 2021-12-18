const express = require("express");

const User = require("../models/user.model");

const authenticate = require("../middlewares/authenticate");

const router = express.Router();

router.get("", async(req,res)=>{
    try {
        return res.render("watchlist");
    } catch (e) {
        res.status(500).json({message:"Internal server error"});
    }
});

router.get("/:id",authenticate, async(req,res) => {
    try {
        const watchlist = await User.findOne({_id: req.params.id}).populate("watchlist").lean().exec();
        console.log(watchlist)

        return res.send(watchlist);
    } catch (e) {
        return res.status(500).json({status: "failed", message: e.message})
    }
})


module.exports = router;






// const express = require("express");

// const Watchlist = require("../models/watchlist.model");

// const authenticate = require("../middlewares/authenticate")

// const router = express.Router();

// // for developers only 
// //  in future put here authorise 

// router.get("/", async (req, res) => {
//     try {
//         const watchlists = await Watchlist.find().lean().exec()

//         return res.render("watchlist")
//     } catch (e) {
//         return res.status(500).json({ status: "failed", message: e.message });
//     }
// })

// router.get("/:id", authenticate, async (req, res) => {
//     try {
//         const watchlist = await Watchlist.findOne({ user: req.params.id }).populate("user").populate("smallcase").lean().exec();

//         return res.render("http://localhost:2000/watchlists", { watchlist })
//     } catch (e) {
//         return res.status(500).json({ status: "failed", message: e.message })
//     }
// })

// router.post("/:id", authenticate, async (req, res) => {
//     try {
//         const watchlist = await Watchlist.create(req.body);

//         return res.status(201).send({ watchlist })
//     } catch (e) {
//         return res.status(500).json({ status: "failed", message: e.message })
//     }
// })

// router.patch("/:id", authenticate, async (req, res) => {
//     try {
//         const watchlist = await Watchlist.updateOne({user: req.params.id}, req.body, { new: true });

//         return res.status(201).send({ watchlist });
//     } catch (e) {
//         return res.status(500).json({status: "failed", message: e.message})
//     }
// })

// router.delete("/:id",async(req,res)=>{
//     try {
//         const watchlist = await Watchlist.findByIdAndDelete({user: req.params.id}).lean().exec();

//         return res.status(201).send({status: "Deleted"})
//     } catch (e) {
//         return res.status(500).json({ status: "failed", message: e.message })
//     }
// })

// module.exports = router;