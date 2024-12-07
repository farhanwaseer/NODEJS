const cookieParser = require("cookie-parser");
const express = require("express");
const userModel = require("./models/user");

const app = express();
const path = require("path");
const PORT = 3000;
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const { hash } = require("crypto");


app.set("view engine", "ejs");
app.use(cookieParser());
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, "public")));


app.get("/", (req,res) => {
    res.render("index");
});

app.get("/signup", (req,res) => {
    res.render("signup");
});

app.post("/create",  (req,res) => {
    let {username, email, password, age} = req.body;

    bcrypt.genSalt(10, (err,salt) => {        
        bcrypt.hash(password, salt, async (err, hash) => {            
            let createdUser = await userModel.create({
                username,
                email,
                password: hash,
                age
            });
            let token = jwt.sign({email}, "farhanwaseerapp");
            res.cookie("token", token);
            res.send(createdUser);

         })
    });
    
});

app.get("/login", (req,res) => {
    res.render("login")
});

app.post("/login", async (req,res) => {
    let user = await userModel.findOne({email: req.body.email});
    if(!user) return res.send("Something went wrong");

    bcrypt.compare(req.body.password, user.password, (err, result) => {
        if(result) {
            let secret = "farhanwaseerapp";
            let token = jwt.sign({email: user.email}, secret);
            res.cookie("token", token);
            res.send("Yes you can login");
        }
        else res.send("Something went wrong");
    });

})

app.get("/logout", (req,res) => {
    res.cookie("token", "");
    res.redirect("/");
});


app.listen(PORT, () => {
    console.log("BackEnd is running on PORT 3000....")
});

