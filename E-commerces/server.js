import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js"


// configure env
dotenv.config();

// DataBase Connection
connectDB();

// rest object
const app = express();

// middelwares
app.use(express.json());
app.use(morgan("dev"));

// routes
app.use("/api/v1/auth", authRoutes)
// rest api
app.get("/", (req, res) => {
  res.send("<h1>WelCome to App</h1>");
});

app.get("/api",(req, res) => {
  res.send("<h1>WelCome to App Api</h1>");
});

// PORT
const PORT = process.env.PORT || 8080;

// Start your Express server
app.listen(PORT, () => {
  console.log(`  Server in Running on ${PORT}`.cyan.bold);
});
