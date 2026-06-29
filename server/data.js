const mongoose = require("mongoose");

const mongoURL = "mongodb://localhost:27017/query";
mongoose.connect(mongoURL);

const db = mongoose.connection;

db.on("connected", () => {
  console.log("Mongoose is connected to the server");
});
db.on("disconnected", () => {
  console.log("Mongoose is disconnected to the server");
});
db.on("error", (err) => {
  console.error("Internal server error", err);
});

module.exports = db;
