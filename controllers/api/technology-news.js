const express = require("express");
const router = express.Router();
// const { check, validationResult } = require("express-validator");
const techno = require("../../models/tech");

// @route   GET /api/news
// @desc    Get all news
// @access  Public

exports.getTechnology = async (req, res) => {
  try {
    const tech_ = await techno.find().sort({ _id: -1 });
    res.json(tech_);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server error");
  }
  return res.json({ message: " technology data is read" });
};

// exports.getscholar = (req, res) => {};
