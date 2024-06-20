const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
      trim: true,
      unique: true,
    },
    description: {
      type: String,
      trim: true,
    },
  },
  {
    timestamps: true, // This will automatically add `createdAt` and `updatedAt` fields
  }
);

let Category = mongoose.model("Category", categorySchema);

module.exports = Category;
