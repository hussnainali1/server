// const fs = require("fs");
// const express = require("express");
// const app = express();
// app.use(bodyparser.json());
const technology_n = require("../../models/tech");

exports.Search_technology_news = async (req, res) => {
  try {
    const search = req.body.searchData;
    console.log(search);
    await technology_n.find(
      { tilte: { $regex: new RegExp(".*" + search + ".*", "i") } },
      function(err, doc) {
        //I HAVE NO IDEA WHAT TO DO HERE??
        if (err) throw err;
        if (doc.length > 0) {
          console.log("data is fetching");
          console.log(doc);
          return res.json(doc);
        } else if (doc == null) {
          console.log("Not found");
          // return res.json(null);
          // return res.json({ tilte: "not found" }); // db.close();
        }
      }
    );
  } catch (error) {
    res.status(500);
  }

  return res.json(null);
};

// exports.getscholar = (req, res) => {};
