// const express = require("express");
// const router = express.Router();
// const { check, validationResult } = require("express-validator");
const BSadmis = require("../../models/BSadmission");

// @route   GET /api/news
// @desc    Get all news
// @access  Public

exports.getBSadmission = async (req, res) => {
  try {
    const admi_ = await BSadmis.find().sort({ _id: -1 });
    res.json(admi_);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server error");
  }
  return res.json({ message: " admission news loaded" });
};

// exports.getscholar = (req, res) => {};
