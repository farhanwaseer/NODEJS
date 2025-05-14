// const express = require("express");
import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";

// config dotenv
dotenv.config();

// database config
connectDB();

// rest object

const app = express();

// middleware
app.use(express.json());
app.use(morgan("dev"));

// rest api

app.get("/", (req, res) => {
  res.send({
    massage: "WellCome to App",
  });
});

// PORT
const PORT = process.env.PORT || 8080;

// run listen
app.listen(PORT, () => {
  console.log(
    `Server is running on ${process.env.DEV_MODE} mode on port ${PORT}`.cyan
      .bold
  );
});
