const express = require('express');
const app = express();
const path = require("path");
const userModel = require('./models/user');
const postModel = require("./models/post");

const PORT = 3000;
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const { hash } = require("crypto");
const cookieParser = require('cookie-parser');



app.set("view engine", "ejs");
app.use(express.json());
app.use(cookieParser())
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/",(req,res)=> {
  res.render("index")
}
);

app.get("/signup",(req,res)=> {
  res.render("signup")
}
);

app.get("/login",(req,res)=> {
  res.render("login")
}
);

app.post("/login", async (req,res) => {
  let {email, password} = req.body;

  let user = await userModel.findOne({email});
  if(!user) return res.status(500).send("Something went wrong");

  bcrypt.compare(password, user.password, (err, result) => {
    if(result)  res.status(200).send("you can login");
    else res.redirect("/login");
  })
  
})

app.post("/signup", async (req,res)=> {
 let {username, name,email, password, age} = req.body;

 let user = await userModel.findOne({email});
 if(user) return res.status(500).send("User already registered");

     bcrypt.genSalt(10, (err,salt) => {        
         bcrypt.hash(password, salt, async (err, hash) => {            
             let user = await userModel.create({
                 username,
                 name,
                 email,
                 age,
                 password: hash
             });
             let token = jwt.sign({email: email, userid: user._id}, "farahanwaseerminiapp");
             res.cookie("token", token);
             res.send("Registered")
          })
     });
    }
);




app.listen(3000 , () => {
    console.log(`Backend server is running on PORT: ${PORT}!`)
});

