const { Product, User } = require("../model/model.js");

const productController = {
  //Add Product
  addProduct: async (req, res) => {
    try {
      const newProduct = new Product(req.body);
      const saveProduct = await newProduct.save();
      if (req.body.seller) {
        const user = User.find({ _id: req.body.seller });
        await user.updateOne({ $push: { products: saveProduct._id } });
      }
      res.status(200).json(saveProduct);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getAllProducts: async (req, res) => {
    try {
      const products = await Product.find();
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getAProduct: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id).populate([
        "seller",
        "category",
      ]);
      res.status(200).json(product);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = productController;
