const { Category } = require("../model/model.js");

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
};

module.exports = categoryController;
