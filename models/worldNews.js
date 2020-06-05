var moongose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

const world = new moongose.Schema({
  tilte: {
    type: String,
    unique: true
  },
  link: {
    type: String,
    unique: true
  },
  img: {
    type: String,
    unique: true
  },
  discription: {
    type: String,
    unique: true
  }
});

world.plugin(uniqueValidator);

module.exports = moongose.model("worldNews", world);
