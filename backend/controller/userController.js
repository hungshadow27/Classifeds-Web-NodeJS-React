const Product = require("../model/ProductModel");
const User = require("../model/UserModel");

const userController = {
  //Add User
  addUser: async (req, res) => {
    try {
      const newUser = new User(req.body);
      const saveUser = await newUser.save();
      res.status(200).json(saveUser);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getAllUsers: async (req, res) => {
    try {
      const users = await User.find();
      res.status(200).json(users);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getAnUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id).populate("products");
      res.status(200).json(user);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  updateUser: async (req, res) => {
    try {
      const user = await User.findById(req.params.id);
      await user.updateOne({ $set: req.body });
      res.status(200).json("updated successfully!");
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteUser: async (req, res) => {
    try {
      await Product.updateMany({ seller: req.params.id }, { seller: null });
      await User.findByIdAndDelete(req.params.id);
      res.status(200).json("deleted successfully!");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = userController;
