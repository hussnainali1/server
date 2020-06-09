var moongose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

const jobs = new moongose.Schema({
  tilte: {
    type: String,
    unique: true,
  },
  link: {
    type: String,
    unique: true,
  },
  img: {
    type: String,
    unique: true,
  },
  discription: {
    type: String,
    unique: true,
  },
  description_img_link: {
    type: String,
    unique: true,
  },
  description_img_link_data: {
    type: String,
    default: 00,

  },
});

jobs.plugin(uniqueValidator);
module.exports = moongose.model("jobs", jobs);
