const registerEvent_model_1 = require("../../models/saveevent");
// const bodyparser = require("body-parser");

exports.Search_Event_ID = async (req, res) => {
    console.log(req.query.Search_id)
    try {
        const SearchEvent = await registerEvent_model_1.find({
            _id: req.query.Search_id
        })
        return res.json(SearchEvent);
        // console.log(SearchEvent)

    } catch (err) {
        console.error(err.message);
        return res.status(500).send("Server error");
    }
};

// exports.getscholar = (req, res) => {};