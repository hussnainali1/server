var moongose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

const BSadmission = new moongose.Schema({
  category: {
    type: String
  },
  discription: {
    type: String,
    unique: true
  }
});
BSadmission.plugin(uniqueValidator);
module.exports = moongose.model("BSadmission", BSadmission);
