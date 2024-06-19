const categoryController = require("../controller/categoryController");

const router = require("express").Router();

//Add Category
router.post("/", categoryController.addCategory);

module.exports = router;
