import express from "express";
import "dotenv/config";
import cors from "cors";

// Initialize Express App  

const app = express();

// Middleware

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Server is running <h1>farhan waseer</h1>  "));

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => console.log(`Server on PORT : ${PORT} `));
