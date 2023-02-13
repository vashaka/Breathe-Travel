const router = require("express").Router();

const authControllers = require("../controllers/auth");

router.post("/register", authControllers.registerUser);
router.post("/login", authControllers.loginUser);
router.get("/profile", authControllers.getProfile);
router.get("/logout", authControllers.logOutUser);
router.post("/delete-user", authControllers.removeUser);

module.exports = router;
