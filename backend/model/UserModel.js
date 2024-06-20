const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      trim: true,
      default: "",
    },
    username: {
      type: String,
      require: true,
      unique: true,
    },
    password: {
      type: String,
      required: true,
    },
    contactInfo: {
      phone: {
        type: String,
        trim: true,
        default: "",
      },
      email: {
        type: String,
        unique: true,
        trim: true,
        default: "",
      },
      location: {
        type: String,
        trim: true,
        default: "",
      },
    },
    products: [
      {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Product",
      },
    ],
    admin: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

let User = mongoose.model("User", userSchema);

module.exports = User;
