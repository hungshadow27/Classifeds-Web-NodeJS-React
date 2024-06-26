const mongoose = require("mongoose");

const childCategorySchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      trim: true,
      default: "",
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
    category: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Category",
      },
    ],
  },
  {
    timestamps: true, // This will automatically add `createdAt` and `updatedAt` fields
  }
);

let ChildCategory = mongoose.model("ChildCategory", childCategorySchema);

module.exports = ChildCategory;
