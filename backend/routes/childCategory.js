const childCategoryController = require("../controller/childCategoryController");

const router = require("express").Router();

//Add Category
router.post("/", childCategoryController.addChildCategory);
router.get("/", childCategoryController.getAllChildCategories);
router.get("/:id", childCategoryController.getAChildCategory);
module.exports = router;
