var moongose = require("mongoose");
var uniqueValidator = require("mongoose-unique-validator");
const Event = new moongose.Schema({
  eventManager_name: {
    type: String,
    unique: true
  },
  eventManager_mobile: {
    type: Number,
    unique: true
  },
  eventManager_email: {
    type: String,
    unique: true
  },

  Event_name: {
    type: String,
    unique: true
  },
  Event_date: {
    type: String,
    unique: true
  },
  Event_time: {
    type: String,
    unique: true
  },

  Sitting_Cap: {
    type: String,
    unique: true
  },

  location: {
    type: String,
    unique: true
  },

  city: {
    type: String,
    unique: true
  },

  description: {
    type: String,
    unique: true
  },
  status: {
    type: String
  }
});
Event.plugin(uniqueValidator);
module.exports = moongose.model("event", Event);
