const express = require("express");
const app = express();
const mongoose = require("mongoose");

// connecting to database
main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => {
    console.log(err);
  });

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

// app routes
app.get("/", (req, res) => {
  res.send("Hi I am the root route");
});

// app.listen()
app.listen(8080, () => {
  console.log("app is listening to port 8080");
});
