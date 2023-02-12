const router = require("express").Router();

const authControllers = require("../controllers/auth");

router.post("/register", authControllers.registerUser);
router.post("/login", authControllers.loginUser);
router.get("/profile", authControllers.getProfile);
router.post("/logout", authControllers.logOutUser);

module.exports = router;
