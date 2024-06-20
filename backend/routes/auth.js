const authController = require("../controller/authController");
const middlewareController = require("../controller/middlewareController");

const router = require("express").Router();

router.post("/register", authController.registerUser);
router.post("/login", authController.loginUser);
router.post("/refresh", authController.requestRefreshToken);
router.post(
  "/logout",
  middlewareController.verifyToken,
  authController.userLogout
);
module.exports = router;
