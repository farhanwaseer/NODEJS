import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";

// config dotenv
dotenv.config();

// DB config
connectDB();

// rest object
const app = express();

// middleware
app.use(express.json());
app.use(morgan("dev"));


// rest api
app.get("/", (req, res) => {
  res.send("Hello World");
});

const PORT = process.env.PORT;

// run listen
app.listen(PORT, () => {
  console.log(
    `Server is running ${process.env.DEV_MODE} mode on port ${PORT}`.green.bold
  );
});
