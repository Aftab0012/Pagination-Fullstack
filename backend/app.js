require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routes/dataRoute");

const app = express();
const PORT = 3000;

const DB_URI = process.env.MONGOOSE_URL;
mongoose
  .connect(DB_URI)
  .then(() => {
    console.log("Connected to Db at, " + DB_URI);
  })
  .catch((error) => {
    console.log(error);
  });

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: false }));

app.use("/api", router);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
