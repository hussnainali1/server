var moongose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");

const MSadmission = new moongose.Schema({
  category: {
    type: String
  },
  discription: {
    type: String,
    unique: true
  }
});
MSadmission.plugin(uniqueValidator);
module.exports = moongose.model("MSadmission", MSadmission);
