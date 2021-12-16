const express = require("express");
const app = express();
const path = require("path");
const smallcaseController = require("./controllers/smallcase.controller");
const blogController = require('./controllers/blog.controller');
const createController = require("./controllers/create.controller");
const investmentStrategyController = require("./controllers/investmentstrategy.controller");
const tagController = require("./controllers/tag.controller");
const typeController = require('./controllers/type.controller');
const stockController = require("./controllers/stock.controller");
const discoverController = require("./controllers/discover.controller");

const { register, login } = require("./controllers/auth.controller");

app.use(express.json());


// app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static('public'));

app.use("/blog", blogController);

app.post("/register",register);
app.use("/smallcases",smallcaseController);
app.use("/investmentStrategies",investmentStrategyController);
app.use("/tags",tagController);
app.use("/discover",discoverController);
app.use("/types", typeController);
app.use("/stocks", stockController);
app.use("/create",createController);
app.post("/login", login);

module.exports = app;