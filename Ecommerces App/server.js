// const express = require("express");
import express from "express";
import colors from "colors";

// rest object

const app = express();

// rest api

app.get("/", (req, res) => {
  res.send({
    massage: "WellCome to App",
  });
});

// PORT
const PORT = 8080;

// run listen
app.listen(PORT, () => {
  console.log(`Server is running on ${PORT}`.cyan.bold);
});
