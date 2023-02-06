const Hotel = require("../models/hotel");

exports.getHotels = (req, res) => {
  Hotel.find()
    .then((hotels) => {
      res.json(hotels);
    })
    .catch((err) => {
      res.status(500);
      console.log(err);
    });
};

exports.getHotel = (req, res) => {
  Hotel.findById(req.params.id)
    .then((hotel) => {
      res.json(hotel);
    })
    .catch((err) => console.log(err));
};
