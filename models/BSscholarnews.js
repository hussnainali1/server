var moongose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");
const BSsch = new moongose.Schema({
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
BSsch.plugin(uniqueValidator);
module.exports = moongose.model("BSscholarship", BSsch);
