const express = require('express');
const app = express();
const path = require("path");
const userModel = require('./models/user');
const postModel = require("./models/post");
const multer = require("multer");
const crypto = require("crypto");

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

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, '/tmp/my-uploads')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix)
  }
});

const upload = multer({ storage: storage })

app.get("/",(req,res)=> {
  res.render("index")
}
);

app.get("/test" , (req,res) => {
  res.render("test");
})

app.get("/signup",(req,res)=> {
  res.render("signup")
}
);

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
              res.redirect("/login")
           })
      });
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
    if(result) {
      let token = jwt.sign({email: email, userid: user._id}, "farahanwaseerminiapp");
      res.cookie("token", token);
      res.status(200).redirect("/profile");
    } 
    else res.redirect("/login");
  })
});

app.get("/logout", (req,res) => {
  res.cookie("token", "");
  res.redirect("/login");
});

app.get("/profile", isLoggedIn, async (req,res) => {
  console.log(req.user)
  let user = await userModel.findOne({email: req.user.email}).populate("posts")
  res.render("profile", {user});
});

app.post("/post", isLoggedIn, async (req,res) => {

  let user = await userModel.findOne({email: req.user.email})
  let {content} = req.body;

  let post = await postModel.create({
    user: user._id,
    content
  });

  user.posts.push(post._id);
  await user.save();
  res.redirect("/profile");
  
});

app.get("/like/:id", isLoggedIn, async(req,res) => {
    let post = await postModel.findOne({_id: req.params.id}).populate("user");

    if(post.likes.indexOf(req.user.userid) === -1) {
      post.likes.push(req.user.userid);
    }
    else {
      post.likes.splice(post.likes.indexOf(req.user.userid), 1);
    }

    await post.save();
    res.redirect("/profile");

});

app.get("/post/edit/:id", isLoggedIn, async (req,res) => {
   let post = await postModel.findOne({_id: req.params.id});
   res.render("editPost", {post});
});

app.post("/post/edit/:id", isLoggedIn, async (req,res) => {
  let post = await postModel.findOneAndUpdate({_id: req.params.id}, {content: req.body.content});
  res.redirect("/profile");
});

app.get("/post/delete/:id", isLoggedIn, async (req,res) => {
  let post = await postModel.findOneAndDelete({_id: req.params.id});
  res.redirect("/profile");
});


function isLoggedIn(req,res,next) {
  if(req.cookies.token === "") res.redirect("/login");
  else {
    let data = jwt.verify(req.cookies.token, "farahanwaseerminiapp");
    req.user = data;
    next();
  }
}

app.listen( PORT || 3000 , () => {
    console.log(`Backend server is running on PORT: ${PORT}!`)
});

