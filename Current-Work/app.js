const cookieParser = require("cookie-parser");
const express = require("express");
const userModel = require("./models/user");

const app = express();
const path = require("path");
const PORT = 3000;
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');


app.set("view engine", "ejs");
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));

app.get("/", (req,res) => {
    res.render("index");
});

app.post("/create", async (req,res) => {
    let {username, email, password, age} = req.body;
    let createdUser = await userModel.create({
        username,
        email,
        password,
        age
    });
    res.send(createdUser);
});

app.listen(PORT, () => {
    console.log("BackEnd is running on PORT 3000....")
});