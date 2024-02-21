const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const legalProsSchema = Schema({
  personalInfo: {
    name: {
      type: String,
      required: true,
    },
    regno: {
      type: String,
      required: true,
    },
  },

  specializations: {
    type: [String],
    default: ["General Lawyer"],
  },
});

module.exports = mongoose.model("Legalpros", legalProsSchema);
