// routes/products.js
const express = require("express");
const router = express.Router();
const Product = require("../models/product");

// @route   GET /api/products
// @desc    Get all products
// @access  Public
router.get("/", async (req, res) => {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// @route   POST /api/products
// @desc    Add new product
// @access  Public
router.post("/", async (req, res) => {
  const { title, description, price, imageUrl } = req.body;

  try {
    const newProduct = new Product({
      title,
      description,
      price,
      imageUrl,
    });

    const product = await newProduct.save();
    res.json(product);
  } catch (err) {
    console.error(err.message);
    res.status(500).send("Server Error");
  }
});

// Add routes for updating and deleting products

module.exports = router;
