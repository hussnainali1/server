var moongose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

const MSsch = new moongose.Schema({
  tilte: {
    type: String,
    unique: true
  },
  link: {
    type: String,
    unique: true
  },
  discription: {
    type: String,
    unique: true
  }
});
MSsch.plugin(uniqueValidator);
module.exports = moongose.model("MSscholarship", MSsch);
