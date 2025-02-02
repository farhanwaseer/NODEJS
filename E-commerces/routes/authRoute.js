import express from "express";
import {
  registerController,
  loginController,
  testController,
} from "../controllers/authController.js";
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";

// router object
const router = express.Router();

// Routing
// register || method Post
router.post("/register", registerController);

// Login || POST
router.post("/login", loginController);

// test route
router.get("/test", requireSignIn, isAdmin, testController);

export default router;
