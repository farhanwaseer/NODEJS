const express = require('express');
const app = express();
const path = require('path')
const PORT = 3000;
const userModel = require('./models/user');

//////////////

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({extended: true}));
app.use(express.static(path.join(__dirname, 'public')));

////////////

app.get('/', (req,res) => {
    res.render('index');
});

app.post('/create', async (req,res) => {
    console.log(req.body);
    let {name,email,image} = req.body;
    let createUser = await userModel.create({
        name,
        email,
        image
    })
    res.redirect('/read');
});

app.get('/read', async (req,res) => {
    let readUser = await userModel.find()
    res.render("read", {readUser})
});

app.get('/edit/:id', async (req,res) => {
    // console.log( req.params.id);
    let user = await userModel.findOne({_id: req.params.id})
    res.render("edit", {user});

   });

   app.post('/update/:id', async (req,res) => {
   let {name, email, image} = req.body;
    let user = await userModel.findOneAndUpdate({_id: req.params.id}, {name, email, image}, {new: true})
    res.redirect("/read");
    
   });


app.get('/delete/:id', async (req,res) => {
 console.log( req.params.id);
 let deleteUsers = await userModel.findOneAndDelete({_id: req.params.id});
 console.log("User deleted successfly !")
 res.redirect("/read");
});


app.listen(PORT, () => {
    console.log(`Backend server is running on PORT: ${PORT}!`)
});