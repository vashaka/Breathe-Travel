const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const landmarkSchema = new Schema(
  {
    title: { type: String, required: true },
    side: String,
    imageUrl: { type: String, required: true },
    image1: { type: String },
    image2: { type: String },
    image3: { type: String },
    image4: { type: String },
    image5: { type: String },
    image6: { type: String },
    price: { type: Number },
    rating: { type: String },
    reviews: { type: String },
    viewers: { type: String },
    stars: { type: Number },
    // coordinates: { x: String, y: String },
    x: Number,
    y: Number,
  },
  { timestamps: true }
);

const landmarkModel = mongoose.model("Landmark", landmarkSchema);
module.exports = landmarkModel;
