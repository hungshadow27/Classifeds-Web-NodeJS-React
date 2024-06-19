const productController = require("../controller/productController");

const router = require("express").Router();

//Add Product
router.post("/", productController.addProduct);

module.exports = router;
