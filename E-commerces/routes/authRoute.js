import express from "express";
import { registerController } from "../controllers/authController.js";

// router object
const router = express.Router();

// Routing
// register || method Post
router.post("/register", registerController);

export default router;
