const express = require("express");
const router = express.Router();
const productModel = require("../models/product");
const upload = require("../config/multer-config");

router.get("/", (req, res) => {
  res.send("Working");
});

router.post("/create", upload.single("image"), async (req, res) => {
  //  /products/create
  try {
    let { image, name, price, discount, bgcolor, panelcolor, textcolor } =
      req.body;
    let product = await productModel.create({
      image: req.file.buffer,
      name,
      price,
      discount,
      bgcolor,
      panelcolor,
      textcolor,
    });
    req.flash("success", "Product created successfully!");
    res.redirect("/owner/admin");
  } catch (error) {
    res.send(error.message);
  }
});

module.exports = router;
