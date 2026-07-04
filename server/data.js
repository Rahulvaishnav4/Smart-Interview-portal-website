const mongoose = require("mongoose");
require('dotenv').config();

const mongoURL = process.env.mongoURL_LOCAL;
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
