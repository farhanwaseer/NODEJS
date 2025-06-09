import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";

// config dotenv
dotenv.config();

// DB config
connectDB();

// rest object
const app = express();

// middleware
app.use(cors())
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/v1/auth", authRoutes);

// rest api
app.get("/", (req, res) => {
  res.send("<h1>Hello World -- ORG--APP</h1>");
});

const PORT = process.env.PORT;

// run listen
app.listen(PORT, () => {
  console.log(
    `  Server is running ${process.env.DEV_MODE} mode on port ${PORT}`.green
      .bold
  );
});
