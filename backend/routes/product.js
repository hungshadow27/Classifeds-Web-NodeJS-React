const productController = require("../controller/productController");

const router = require("express").Router();

//Add Product
router.post("/", productController.addProduct);
router.get("/", productController.getAllProducts);
router.get("/:id", productController.getAProduct);
router.put("/:id", productController.updateProduct);

module.exports = router;
