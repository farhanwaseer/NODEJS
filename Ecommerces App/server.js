// const express = require("express");
import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";

// config dotenv
dotenv.config();

// database config
connectDB();

// rest object

const app = express();

// middleware
app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

// routes
app.use("/api/v1/auth", authRoutes);
// rest api

app.get("/", (req, res) => {
  res.send(
    `<h1 style="text-align: center; color: blue;">Welcome to E-commerce App</h1>`
  );
});
8;

// PORT
const PORT = process.env.PORT || 8080;

// run listen
app.listen(PORT, () => {
  console.log(
    `Server is running on ${process.env.DEV_MODE} mode on port ${PORT}`.cyan
      .bold
  );
});
