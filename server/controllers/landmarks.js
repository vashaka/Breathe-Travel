const Landmark = require("../models/landmark");

exports.getLandmarks = (req, res) => {
  Landmark.find()
    .then((landmarks) => {
      res.json(landmarks);
    })
    .catch((err) => {
      res.status(500);
      console.log(err);
    });
};

exports.getLandmark = (req, res) => {
  Landmark.findById(req.params.id)
    .then((landmark) => {
      res.json(landmark);
    })
    .catch((err) => console.log(err));
};
