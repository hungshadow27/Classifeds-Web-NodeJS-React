const mongoose = require("mongoose");

const categorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      default: "category description",
    },
    image: {
      type: String,
      trim: true,
      default: "",
    },
    slug: {
      type: String,
      trim: true,
      default: "",
    },
    childs: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "ChildCategory",
      },
    ],
  },
  {
    timestamps: true, // This will automatically add `createdAt` and `updatedAt` fields
  }
);

let Category = mongoose.model("Category", categorySchema);

module.exports = Category;
