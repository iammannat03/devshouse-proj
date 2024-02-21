const Legalpros = require("../models/legalPros.js");

module.exports.index = async (req, res) => {
  try {
    let result = await Legalpros.find({});
    res.render("legalPros/index.ejs", { legalPros: result });
  } catch (err) {
    console.log(err);
  }
};

module.exports.renderSearch = async (req, res) => {
  try {
    let result = null;
    res.render("legalPros/search.ejs", { result });
  } catch (err) {
    console.log(err);
  }
};

module.exports.performSearch = async (req, res) => {
  try {
    let { name } = req.body;
    console.log(name);
    let result = await Legalpros.find({ "personalInfo.name": name });
    console.log(result);
    res.render("legalPros/search.ejs", { result });
  } catch (err) {
    console.log(err);
  }
};
