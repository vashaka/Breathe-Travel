const router = require("express").Router();

const hotelControllers = require("../controllers/hotels");

router.get("/", hotelControllers.getHotels);
router.get("/:id", hotelControllers.getHotel);

module.exports = router;
