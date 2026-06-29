const mongoose = require("mongoose");

const queryData = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    enum: ["Aptitude", "DSA", "Technical", "Resources"],
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
});

const queryForm = mongoose.model("queryForm", queryData);
module.exports = queryForm;
