const express = require("express");
const app = express();


app.get("/", (req,res) => {
    res.cookie("name", "farhan")
    res.send("hello world");
});


app.listen(3000, () => {
    console.log("BackEnd is running on PORT 3000....")
})