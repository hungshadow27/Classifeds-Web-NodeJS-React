const express = require("express");
const app = express();
const cors = require("cors");
const mongoose = require("mongoose");
var bodyParser = require("body-parser");
const morgan = require("morgan");
const dotenv = require("dotenv");
const cookieParser = require("cookie-parser");

const productRoute = require("./routes/product");
const userRoute = require("./routes/user");
const categoryRoute = require("./routes/category");
const authRoute = require("./routes/auth");

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
app.use(cookieParser());

//Routes
app.use("/v1/product", productRoute);
app.use("/v1/user", userRoute);
app.use("/v1/category", categoryRoute);
app.use("/v1/auth", authRoute);

app.listen(8000, () => {
  console.log("Server is running...");
});
