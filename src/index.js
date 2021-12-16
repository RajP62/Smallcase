const express = require("express");
const app = express();
const path = require("path");
const smallcaseController = require("./controllers/smallcase.controller");
const blogController = require('./controllers/blog.controller');
const investmentStrategyController = require("./controllers/investmentstrategy.controller");
const tagController = require("./controllers/tag.controller");
const typeController = require('./controllers/type.controller');
const loginController = require("./controllers/login.controller");
const userController = require("./controllers/user.controller");
const homeController = require("./controllers/home.controller")

const { register, login } = require("./controllers/auth.controller");

app.use(express.json());


// app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static('public'));

app.use("/blog", blogController);

app.use("/users",userController)
app.post("/register",register);
app.use("/smallcases",smallcaseController);
app.use("/investmentStrategies",investmentStrategyController);
app.use("/tags",tagController);
app.use("/types", typeController);
app.post("/login", login);

app.use("/home", homeController)

app.use("/login",loginController)

module.exports = app;