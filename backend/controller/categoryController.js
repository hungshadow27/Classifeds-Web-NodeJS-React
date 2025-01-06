const Category = require("../model/CategoryModel");

const categoryController = {
  //Add Category
  addCategory: async (req, res) => {
    try {
      const newCategory = new Category(req.body);
      const saveCategory = await newCategory.save();
      res.status(200).json(saveCategory);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getAllCategories: async (req, res) => {
    try {
      const categories = await Category.find().populate("childs");
      res.status(200).json(categories);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getACategory: async (req, res) => {
    try {
      const category = Category.findById(req.params.id);
      res.status(200).json(category);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getACategoryBySlug: async (req, res) => {
    const { slug } = req.params;
    if (!slug) {
      return res.status(400).json({ error: "Slug parameter is required" });
    }

    // Fetch category by slug (adjust database query as needed)
    Category.findOne({ slug: slug })
      .then((category) => {
        if (!category) {
          return res.status(404).json({ error: "Category not found" });
        }
        res.status(200).json(category);
      })
      .catch((err) => res.status(500).json({ error: err.message }));
  },
};

module.exports = categoryController;
