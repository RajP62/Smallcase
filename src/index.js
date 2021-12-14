const express = require("express");
const app = express();
const path = require("path");
const blogController = require('./controller/blog.controller');

app.use(express.json());


app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use(express.static(path.join(__dirname,"public")));

app.use("/blog",blogController)

module.exports = app;