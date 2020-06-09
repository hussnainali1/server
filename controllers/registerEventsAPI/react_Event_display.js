const registerEvent_model = require("../../models/saveevent");
// const bodyparser = require("body-parser");

exports.Reaact_Search_registerEvent = async (req, res) => {
    try {
        // console.log("hi")

        const eventApproved_ = await registerEvent_model
            .find()
            .sort({ _id: -1 });
        console.log(eventApproved_);
        return res.json(eventApproved_);
    } catch (err) {
        console.error(err.message);
        return res.status(500).send("Server error");
    }
    // return res.json({ message: "events displayed" });
};

// exports.getscholar = (req, res) => {};
