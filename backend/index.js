const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");

const productRoute = require("./routes/product");
const userRoute = require("./routes/user");
const categoryRoute = require("./routes/category");

dotenv.config();
//connect database
try {
  mongoose.set("strictQuery", false);
  mongoose.connect(process.env.MONGODB_URL);
  console.log("Connected to Mongo Successfully!");
} catch (error) {
  console.log(error);
}

app.use(bodyParser.json({ limit: "50mb" }));
app.use(cors());
app.use(morgan("common"));

app.get("/api", (req, res) => {
  res.status(200).json("hello");
});

//Routes
app.use("/v1/product", productRoute);
app.use("/v1/user", userRoute);
app.use("/v1/category", categoryRoute);

app.listen(8000, () => {
  console.log("Server is running...");
});
