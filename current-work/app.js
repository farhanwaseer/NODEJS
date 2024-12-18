const express = require('express');
const app = express();
const path = require("path");
const userModel = require('./models/user');

const PORT = 3000;
const jwt = require("jsonwebtoken");
const bcrypt = require('bcrypt');
const { hash } = require("crypto");



app.set("view engine", "ejs");
app.use(express.json());
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

app.post("/signup", async (req,res)=> {
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
            //  res.render("readuser", {createdUser});
            res.send(createdUser)
          })
     });
    }
);




app.listen(3000 , () => {
    console.log(`Backend server is running on PORT: ${PORT}!`)
});

