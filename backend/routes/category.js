const categoryController = require("../controller/categoryController");

const router = require("express").Router();

//Add Category
router.post("/", categoryController.addCategory);
router.get("/", categoryController.getAllCategories);
router.get("/:id", categoryController.getACategory);
module.exports = router;
