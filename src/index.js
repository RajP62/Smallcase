const express = require("express");
const app = express();
const path = require("path");
const smallcaseController = require("./controllers/smallcase.controller");
const blogController = require('./controllers/blog.controller');

const { register, login } = require("./controllers/auth.controller");

app.use(express.json());


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname, "public")));

app.use("/blog", blogController)

app.post("/register",register);

app.use("/blog",blogController);
app.use("/smallcase",smallcaseController)
app.post("/login", login);

module.exports = app;