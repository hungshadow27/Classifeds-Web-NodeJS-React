const userController = require("../controller/userController");
const middlewareController = require("../controller/middlewareController");

const router = require("express").Router();

//Add Product
router.post("/", userController.addUser);
router.get("/", middlewareController.verifyToken, userController.getAllUsers);
router.get("/:id", userController.getAnUser);
router.put("/:id", userController.updateUser);
router.delete("/:id", userController.deleteUser);
module.exports = router;
