const express = require('express');
const app = express();
const path = require('path')
const userModel = require('./models/user');
const PORT = 3000;

app.set("view engine", "ejs");
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

app.get("/",(req,res)=> {
  res.render("index")
}
);



app.listen(3000 , () => {
    console.log(`Backend server is running on PORT: ${PORT}!`)
});

