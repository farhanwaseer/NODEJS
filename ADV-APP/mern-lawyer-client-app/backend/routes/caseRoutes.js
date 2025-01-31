import express from "express";
import { createCase, getCases, getCaseById } from "../controllers/caseController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/", protect, createCase);
router.get("/", getCases);
router.get("/:id", getCaseById);

export default router;
