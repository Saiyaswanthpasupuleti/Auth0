require("dotenv").config();
const express = require("express");
const cors = require("cors");
const jwtCheck = require("./middleware/checkToken");
const app = express();
app.use(cors());
app.use(express.json());
app.get("/", (req, res) => {
  res.send("Hello World API Public ");
});
app.get("/protected", jwtCheck, (req, res) => {
  res.json({
    message: "You accessed protected route ",
    user: req.auth,
  });
});
app.listen(8080, () => console.log("Server running on port 8080"));
