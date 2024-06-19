const userController = require("../controller/userController");

const router = require("express").Router();

//Add Product
router.post("/", userController.addUser);
router.get("/", userController.getAllUsers);
router.get("/:id", userController.getAnUser);
module.exports = router;
