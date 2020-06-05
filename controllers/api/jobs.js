const express = require("express");
const router = express.Router();
// const { check, validationResult } = require("express-validator");
const jobs_m = require("../../models/jobs_model");

// @route   GET /api/news
// @desc    Get all news
// @access  Public

exports.getJobs = async (req, res) => {
  
  try {
    const jobs_ = await jobs_m.find().sort({ _id: -1 });
    res.json(jobs_);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server error");
  }
  return res.json({ message: " admission news loaded" });
};

// exports.getscholar = (req, res) => {};
