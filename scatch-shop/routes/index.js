const express = require("express");
const router = express.Router();
const isloggedIn = require("../middlewares/islogged-In");
const productModel = require("../models/product");
const userModel = require("../models/userModel");

router.get("/", (req, res) => {
  let flashMsg = req.flash("flashMsg");
  res.render("index", { flashMsg, loggedin: false });
});

router.get("/shop", isloggedIn, async (req, res) => {
  let products = await productModel.find();
  let flashMsg = req.flash("flashMsg");
  res.render("shop", { products, flashMsg });
});

router.get("/cart", isloggedIn, async (req, res) => {
  let user = await userModel
    .findOne({ email: req.user.email })
    .populate("cart");
  res.render("cart", { user });
});

// router.get("/addtocart/:productid", isloggedIn, async (req, res) => {
//   let user = await userModel.findOne({ email: req.user.email });
//   user.cart.push(req.params.productid);
//   await user.save();
//   req.flash("flashMsg", "Product added to cart");
//   res.redirect("/shop");
// });


router.get("/addtocart/:productid", isloggedIn, async (req, res) => {
  try {
    // Find the user by email
    let user = await userModel.findOne({ email: req.user.email });

    // Check if the product is already in the cart
    if (user.cart.includes(req.params.productid)) {
      req.flash("flashMsg", "Product already in cart");
    } else {
      // Add the product to the cart if it doesn't already exist
      user.cart.push(req.params.productid);
      await user.save();
      req.flash("flashMsg", "Product added to cart");
    }

    // Redirect to the shop page
    res.redirect("/shop");
  } catch (error) {
    console.error("Error adding product to cart:", error);
    req.flash("flashMsg", "An error occurred. Please try again.");
    res.redirect("/shop");
  }
});


module.exports = router;
