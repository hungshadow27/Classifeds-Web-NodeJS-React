const { Product } = require("../model/model.js");

const productController = {
  //Add Product
  addProduct: async (req, res) => {
    try {
      const newProduct = new Product(req.body);
      const saveProduct = await newProduct.save();
      res.status(200).json(saveProduct);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = productController;
