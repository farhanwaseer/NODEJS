import { json } from "express";
import User from "../models/User.js";
import fs from "fs";
import imagekit from "../configs/imageKit.js";
import Car from "./../models/Car.js";
import upload from './../middleware/multer.js';

//  Change Role
export const changeRoleToOwner = async (req, res) => {
  try {
    const { _id } = req.user;
    await User.findByIdAndUpdate(_id, { role: "owner" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};

// API to list Car

export const addCar = async (req, res) => {
  try {
    const { _id } = req.user;
    let car = JSON.parse(req.body.carData);
    const imageFile = req.file;
    // upload image to imagekit
    const fileBuffer = fs.readFileSync(imageFile.path);
    const response = await imagekit.upload({
      file: fileBuffer,
      fileName: imageFile.originalname,
      folder: "/cars",
    });

    // optimization through imagekit url transformation
    var optimizedImageUrl = imagekit.url({
      path: response.filePath,
      transformation: [
        { width: "1280" }, // Width resizing
        { quality: "auto" }, // Auto compression
        { format: "webp" }, // Convert to modern format
      ],
    });
    //  upload to db
    const image = optimizedImageUrl;
    await Car.create({ ...car, owner: _id, image });
    res.json({ success: true, message: "Car Added" });
  } catch (error) {
    console.log(error.message);
    res.json({ success: false, message: error.message });
  }
};
