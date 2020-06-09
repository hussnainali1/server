const registerEvent_model = require("../../models/saveevent");
// const bodyparser = require("body-parser");

exports.Search_registerEvent = async (req, res) => {
  try {
    // console.log("hi")
    var location = req.body.current;
    // location = location.slice(1);
    // location = String.splice(1, location.length - 1);
    location = location.replace('"', '');
    location = location.replace('"', '');
    console.log(location);
    const eventApproved_ = await registerEvent_model
      .find({
        status: "approved",
        city: { $regex: new RegExp(".*" + location + ".*", "i") },
      })
      .sort({ _id: -1 });
    console.log(eventApproved_);
    return res.json(eventApproved_);
  } catch (err) {
    console.error(err.message);
    return res.status(500).send("Server error");
  }
  return res.json({ message: "events displayed" });
};

// exports.getscholar = (req, res) => {};
