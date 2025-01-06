const productController = require("../controller/productController");

const router = require("express").Router();

//Add Product
router.get("/latest", productController.getLatestProducts);

router.post("/", productController.addProduct);
router.get("/", productController.getAllProducts);
router.get("/category/:category", productController.getProductsByCategory);
router.get("/:id", productController.getAProduct);
router.put("/:id", productController.updateProduct);
router.delete("/:id", productController.deleteProduct);
module.exports = router;
