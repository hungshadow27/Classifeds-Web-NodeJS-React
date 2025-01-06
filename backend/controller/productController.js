const Product = require("../model/ProductModel");
const User = require("../model/UserModel");

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
  getProductsByCategory: async (req, res) => {
    const { category } = req.params; // Trích xuất category slug từ URL
    if (!category) {
      return res.status(400).json({ error: "Category parameter is required" });
    }
    try {
      // Tìm tất cả sản phẩm và populate thông tin category
      const products = await Product.find().populate([
        {
          path: "category", // Populate trường category (ObjectId)
          match: { slug: category }, // Lọc category theo slug
        },
        { path: "seller" },
      ]);

      // Lọc lại các sản phẩm chỉ có category.slug trùng với category
      const filteredProducts = products.filter((product) => product.category);

      return res.status(200).json(filteredProducts);
    } catch (err) {
      return res.status(500).json({ error: err.message });
    }
  },
  getLatestProducts: async (req, res) => {
    try {
      const products = await Product.find().sort({ x: -1 }).limit(15);
      res.status(200).json(products);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  updateProduct: async (req, res) => {
    try {
      const product = await Product.findById(req.params.id);
      await product.updateOne({ $set: req.body });
      res.status(200).json("updated successfully!");
    } catch (error) {
      res.status(500).json(error);
    }
  },
  deleteProduct: async (req, res) => {
    try {
      await User.updateMany(
        { products: req.params.id },
        { $pull: { products: req.params.id } }
      );
      await Product.findByIdAndDelete(req.params.id);
      res.status(200).json("deleted successfully!");
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = productController;
