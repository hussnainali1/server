const express = require("express");
const router = express.Router();
// const { check, validationResult } = require("express-validator");
const world_m = require("../../models/worldNews");

// @route   GET /api/news
// @desc    Get all news
// @access  Public

exports.getWorld = async (req, res) => {
  try {
    const world_ = await world_m.find().sort({ _id: -1 });
    res.json(world_);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server error");
  }
  return res.json({ message: " technology data is read" });
};

// exports.getscholar = (req, res) => {};
