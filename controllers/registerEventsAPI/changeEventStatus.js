const event = require("../../models/saveevent");

exports.updateEventStatus = async (req, res) => {
  console.log("----------");
  console.log(req.body.id_update);
  console.log("----------");

  // eventObj.status = "notvarified";
  try {
    var objForUpdate = {};
    objForUpdate.status = req.body.status_update;
    await event.findOneAndUpdate({
        _id: req.body.id_update
      },
      objForUpdate,
      function (error, results) {
        if (error) {
          return next(error);
        }
        return res.json({
          status: 1,
          message: "Admin Updated Successfully",
          object: results
        });
      }
    );
  } catch (error) {
    console.log(error);
  }
};

// return res.json(null);

// exports.getscholar = (req, res) => {};