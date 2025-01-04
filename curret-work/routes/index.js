const express = require("express");
const router = express.Router();
const isloggedIn = require("../middlewares/islogged-In");
const productModel = require("../models/product");

router.get("/", (req, res) => {
  let flashMsg = req.flash("flashMsg");
  let loggedin = false;
  res.render("index", { flashMsg, loggedin});
});

router.get("/shop", isloggedIn, async (req, res) => {
  let products = await productModel.find();
  res.render("shop", {products});
});

module.exports = router;
