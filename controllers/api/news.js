const express = require("express");
const router = express.Router();
const { check, validationResult } = require("express-validator");
const dawn = require("../../models/dawn");

// @route   GET /api/news
// @desc    Get all news
// @access  Public

exports.getapi = async (req, res) => {
  try {
    const dawn_ = await dawn.find().sort({ _id: -1 });
    res.json(dawn_);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server error");
  }
  return res.json({ message: " api activated" });
};

// exports.getscholar = (req, res) => {};
