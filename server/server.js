const express = require("express");
const cors = require("cors"); // use to connect frontend or backend with diff port numbers
require("dotenv").config(); // use to store sensitive info like port,passwords , Database URL etc
const app = express();

const queryDb = require("./data");
const queryForm = require("./module/structure");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  res.send("done");
});

app.post("/query", async (req, res) => {
  try {
    const data = req.body;
    const newQuery = new queryForm(data);

    const response = await newQuery.save();
    console.log("Data is saved");
    res.status(200).send(response);
  } catch (err) {
    res.status(500).json({ error: "Internal server error", err });
  }
});

const PORT = process.env.PORT; // its access the PORT number from .env file
app.listen(PORT, () => {
  console.log("Server is running ");
});
