const router = require("express").Router();

const landmarksController = require("../controllers/landmarks");

router.get("/", landmarksController.getLandmarks);
router.get("/:id", landmarksController.getLandmark);

module.exports = router;
