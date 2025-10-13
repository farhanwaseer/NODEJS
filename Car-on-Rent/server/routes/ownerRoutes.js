import express from "express";
import { protect } from "../middleware/auth.js";
import {
  addCar,
  changeRoleToOwner,
  deletCar,
  getDashboardData,
  getOwnerCars,
  toggleCarAvailability,
  updateUserImage,
} from "../controllers/ownerController.js";
import upload from "../middleware/multer.js";

const ownerRouter = express.Router();

ownerRouter.post("/change-role", protect, changeRoleToOwner);
ownerRouter.post("/add-car", upload.single("image"), protect, addCar);
ownerRouter.get("/cars", protect, getOwnerCars);
ownerRouter.post("/toggle-car", protect, toggleCarAvailability);
ownerRouter.post("/delete-car", protect, deletCar);

ownerRouter.get("/dashboard", protect, getDashboardData);
ownerRouter.get(
  "/update-image",
  upload.single("image"),
  protect,
  updateUserImage
);

export default ownerRouter;
