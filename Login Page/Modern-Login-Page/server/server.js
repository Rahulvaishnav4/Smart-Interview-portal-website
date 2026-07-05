const express = require("express");
const cors = require("cors");
const app = express();

const userData = require("./data");
const userModule = require("./modules/login");

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => {
  res.send("welcome..");
});

app.post("/user", async (req, res) => {
  try {
    const user = await userModule.findOne({
      email: req.body.email,
    });

    if (user) {
      return res.status(400).json({
        message: "Email already exists..",
      });
    }

    const obj = new userModule(req.body);
    const response = await obj.save();
    res.status(200).json({
      success: true,
      message: "SignUp Successful",
    });
  } catch (err) {
    console.log(err);
    res.status(500).json(err);
  }
});

app.post("/login", async (req, res) => {
  try {
    const findEmail = await userModule.findOne({
      email: req.body.email,
    });
    if(!findEmail){
      return res.json({
          success:false,
          message:"User not found",
        })
    }
    if (findEmail) {
      if (req.body.password == findEmail.password) {
        return res.json({
          success: true,
          message: "Login Successful",
        });
      }
      return res.json({
        success:false,
        message:"Invalid password",
      })
    } 
  } catch (err) {
    console.log(err);
    res.status(500).json({
      success:false,
      message: "Internal Server Error",
    });
  }
});
app.listen(5000, () => {
  console.log("Server is running on port 5000 >>>>");
});
