const express = require("express");
const router = express.Router();
// const { check, validationResult } = require("express-validator");
const buss_m = require("../../models/business_model");

// @route   GET /api/news
// @desc    Get all news
// @access  Public

exports.getBussiness = async (req, res) => {
  try {
    const bussiness_ = await buss_m.find().sort({ _id: -1 });
    res.json(bussiness_);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server error");
  }
  return res.json({ message: " admission news loaded" });
};

// exports.getscholar = (req, res) => {};
