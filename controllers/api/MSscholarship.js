const express = require("express");
const router = express.Router();
// const { check, validationResult } = require("express-validator");
const MSschol = require("../../models/MSscholarnews");

// @route   GET /api/scholarship

exports.MSgetscholar = async (req, res) => {
  try {
    const msscholarship_ = await MSschol.find().sort({ _id: -1 });
    res.json(msscholarship_);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server error");
  }
  return res.json({ message: " api scholarship data is read " });
};
