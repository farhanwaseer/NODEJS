import express from "express";
import {
  registerController,
  loginController,
  testController,
  forgotPasswordController
} from "../controllers/authController.js";
import { requireSignIn, isAdmin } from "../middlewares/authMiddleware.js";

// router object
const router = express.Router();

// routing
// Register || POST
router.post("/register", registerController);

// Login || POST
router.post("/login", loginController);

// forgot password || POST
router.post("/forgot-password", forgotPasswordController);

// test route
router.get("/test", requireSignIn, isAdmin, testController);

// protected route auth
router.get("/user-auth", requireSignIn, (req, res) => {
  res.status(200).send({ ok: true });
});

export default router;
