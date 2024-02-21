const mongoose = require("mongoose");
const initData = require("./data.js");

const Legalpros = require("../models/legalPros.js");

// database setup
const MONGO_URL = "mongodb://127.0.0.1:27017/dev_jli";

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect(MONGO_URL);
}

// initialising db
const initLegalProsDB = async () => {
  await Legalpros.deleteMany({}); // deleting previous data

  // // this code snippet can be used to add more field entries in future:-
  // initLegalProsDB.data = initLegalProsDB.data.map((obj) => ({
  //   ...obj,
  //   owner: "65bc869735e03f69b73c9ef0",
  // }));
  console.log(initData.data);
  await Legalpros.insertMany(initData.data);
  console.log("data was initialised");
};

initLegalProsDB();
