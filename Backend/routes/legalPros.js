const express = require("express");
const router = express.Router({ mergeParams: true });
const Legalpros = require("../models/legalPros.js");
const legalProsController = require("../controllers/legalPros");

router.route("/").get(legalProsController.index);

router
  .route("/search")
  .get(legalProsController.renderSearch)
  .post(legalProsController.performSearch);

module.exports = router;
