const express = require("express");
const app = express();
const PORT = 5000;

const cookieParser = require("cookie-parser");
const path = require("path");
const userModel = require("./models/userModel");
const productModel = require("./models/product");

app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

app.get("/", (req,res) => {
    res.send("Working");
});

app.listen(5000, () => {
    console.log(`Server working on ${PORT}`);
});