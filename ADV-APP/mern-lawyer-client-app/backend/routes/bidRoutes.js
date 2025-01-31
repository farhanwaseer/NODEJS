import express from "express";
import { placeBid, getBidsForCase } from "../controllers/bidController.js";
import { protect } from "../middleware/authMiddleware.js";

const router = express.Router();

router.post("/:caseId", protect, placeBid);
router.get("/:caseId", getBidsForCase);

export default router;
