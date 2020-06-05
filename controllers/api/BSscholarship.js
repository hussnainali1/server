const express = require("express");
const router = express.Router();
// const { check, validationResult } = require("express-validator");
const schol = require("../../models/BSscholarnews");

// @route   GET /api/scholarship

exports.getscholar = async (req, res) => {
  try {
    const scholarship_ = await schol.find().sort({ _id: -1 });
    res.json(scholarship_);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server error");
  }
  return res.json({ message: " api scholarship data is read " });
};
