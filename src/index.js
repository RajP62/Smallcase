require("dotenv").config()
const express = require("express");
const app = express();
const path = require("path");
const messagebird = require("messagebird")(process.env.MESSAGEBIRD_KEY);

const passport = require("./config/passport")

const validator = require("./middlewares/validator")
const watchlistController = require("./controllers/watchlist.controller")
const createController = require("./controllers/create.controller");
const stockController = require("./controllers/stock.controller")
const smallcaseController = require("./controllers/smallcase.controller");
const blogController = require('./controllers/blog.controller');
const discoverController = require("./controllers/discover.controller")
const investmentStrategyController = require("./controllers/investmentstrategy.controller");
const tagController = require("./controllers/tag.controller");
const typeController = require('./controllers/type.controller');
const loginController = require("./controllers/login.controller");
const userController = require("./controllers/user.controller");
const homeController = require("./controllers/home.controller");
const investController = require("./controllers/invest.controller");
const searchController = require("./controllers/search.controller");
const razorpayController = require("./controllers/razorpay.controller");
const investmentsController = require("./controllers/investments.controller");
const growDashboardController = require("./controllers/growDashboard.controller");

const { register, login } = require("./controllers/auth.controller");

app.use(express.json());

app.use(passport.initialize());

passport.serializeUser(function ({ user, token }, done) {
  done(null, { user, token });
});
passport.deserializeUser(function (user, done) {
  done(err, user);
});


app.set("view engine", "ejs");
app.use(express.static('public'));

app.use("/blog", blogController);

app.use("/discover", discoverController)

app.use("/create",createController);

app.use("/users", userController)

app.use("/stocks",stockController)

app.use("/watchlists",watchlistController)

app.use("/invest", investController); 

app.use("/search", searchController); 

app.use("/razorpay", razorpayController);

app.use("/investments",investmentsController );

app.use("/growDashboard", growDashboardController)

app.post("/register", validator({
    email: ["required", "email"],
    password: ["required"],
    partner: ["required"],
}), register);
app.use("/smallcases",smallcaseController);
app.use("/investmentStrategies", investmentStrategyController);
app.use("/tags", tagController);
app.use("/types", typeController);

app.post("/login", validator({
    email: ["required", "email"],
    password: ["required"],
    partner: ["required"]
}), login);

app.get(
    "/auth/google",
    passport.authenticate("google", {
        scope: ["email", "profile"],
    })
);


app.get(
    "/auth/google/callback",
    passport.authenticate('google', {
        // successRedirect: '/discover',
        failureRedirect: '/auth/google/failure'
    }),
    function (req, res) {
        // console.log({ user: req.user.user, token: req.user.token })
        return res.status(201).render("discover",{ user: req.user.user, token: req.user.token});
    }
);

app.get("/auth/google/failure", function (req, res) {
    return res.send("Something went wrong");
});

// otp authentication 

app.get("/signup", function(req, res) {
    try {
        return res.render("signup");
    } catch (e) {
        return res.status(500).json({status: "failed", message: "Bad Request"})
    }
})

app.post("/verify", function(req, res) {
    try {
        let number = req.body.number;

        //Make request to messagebird SDK
        messagebird.verify.create(number, {
            template: "Enter the verification code %token"
        },function(err,response) {
            if(err) {
                // request is failed
                return res.render("signup",{
                    error:err.errors[0].description
                });
            } else {
                // request was successful
                return res.render("verify",{ 
                    id: response.id
                })
            }
        })

    } catch (e) {
        return res.status(500).json({ status: "failed", message: "Invalid Phone Number" });
    }
});

app.post("/verifying", function(req, res) {
    try {
        let id = req.body.id;
        let otp = req.body.otp

        //make request to verify SDK

        messagebird.verify.verify(id,otp, function (err,response) {
            if(err) {
                console.log(err);
                return res.render("verify",{
                    error: err.errors[0].description,
                    id,
                })
            }
            else {
                // register the user and


                // then return to discover page

                console.log(response)
                return res.render("discover")
            }
        })

    } catch (e) {
        return res.status(500).json({ status: "failed", message: "Invalid Token"})
    }
})

app.use("/home", homeController)

app.use("/login", loginController)

module.exports = app;