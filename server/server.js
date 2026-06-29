const express = require("express");
const cors = require("cors");
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

app.listen(3000, () => {
  console.log("Server is running ");
});
