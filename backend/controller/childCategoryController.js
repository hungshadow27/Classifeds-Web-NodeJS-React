const ChildCategory = require("../model/ChildCategoryModel");
const Category = require("../model/CategoryModel");

const childCategoryController = {
  //Add Category
  addChildCategory: async (req, res) => {
    try {
      const newChildCategory = new ChildCategory(req.body);
      const saveChildCategory = await newChildCategory.save();
      if (req.body.category) {
        const category = Category.find({ _id: req.body.category });
        await category.updateOne({ $push: { childs: saveChildCategory._id } });
      }
      res.status(200).json(saveChildCategory);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getAllChildCategories: async (req, res) => {
    try {
      const childCategories = await ChildCategory.find().populate("category");
      res.status(200).json(childCategories);
    } catch (error) {
      res.status(500).json(error);
    }
  },
  getAChildCategory: async (req, res) => {
    try {
      const childCategory = childCategory.findById(req.params.id);
      res.status(200).json(childCategory);
    } catch (error) {
      res.status(500).json(error);
    }
  },
};

module.exports = childCategoryController;
