const express = require("express");
const router = express.Router();
// const { check, validationResult } = require("express-validator");
const sport = require("../../models/sports");

// @route   GET /api/news
// @desc    Get all news
// @access  Public

exports.getsport = async (req, res) => {
  try {
    const sport_ = await sport.find().sort({ _id: -1 });
    res.json(sport_);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server error");
  }
  return res.json({ message: " admission news loaded" });
};

// exports.getscholar = (req, res) => {};
