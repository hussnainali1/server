var moongose = require("mongoose");
const sch = new moongose.Schema({
  tilte: {
    type: String
  },
  link: {
    type: String
  },
  discription: {
    type: String
  }
});
module.exports = moongose.model("scholarship", sch);
