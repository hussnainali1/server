const express = require("express");
const router = express.Router();
// const { check, validationResult } = require("express-validator");
const MSadmis = require("../../models/MSadmission");

// @route   GET /api/news
// @desc    Get all news
// @access  Public

exports.getMSadmission = async (req, res) => {
  try {
    const admi_ = await MSadmis.find().sort({ _id: -1 });
    res.json(admi_);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server error");
  }
  return res.json({ message: " admission news loaded" });
};

// exports.getscholar = (req, res) => {};
