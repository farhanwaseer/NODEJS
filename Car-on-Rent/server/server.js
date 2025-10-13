import express from "express";
import "dotenv/config";
import cors from "cors";
import connectDB from "./configs/db.js";
// routes import
import userRouter from "./routes/userRoutes.js";
import ownerRouter from "./routes/ownerRoutes.js";
import bookingRouter from "./routes/bookingRoutes.js";

// Initialize Express App

const app = express();

//  Connect DataBase()
await connectDB();

// Middleware

app.use(cors());
app.use(express.json());

// Routes
app.get("/", (req, res) =>
  res.send(
    "Server is running <h1>farhan waseer</h1> <h2>/car-rental Database Connected Successfully </h2>  "
  )
);

// Routes  User
app.use("/api/user", userRouter);
app.use("/api/owner", ownerRouter);
app.use("/api/bookings", bookingRouter);

// Listen Server

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server on PORT : ${PORT} `));
